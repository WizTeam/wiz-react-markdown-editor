'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require('../baseFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

var _config = _interopRequireDefault(require('./config'));

require('./index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const defaultOptions = {
  placement: 'top',
  modifiers: {
    offset: {
      offset: '0, 5'
    }
  },
  showArrow: false
};

class FormatPicker extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-format-picker';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.oldVnode = null;
    this.formats = null;
    this.options = opts;
    this.icons = _config.default;
    const formatContainer = (this.formatContainer = document.createElement('div'));
    this.container.appendChild(formatContainer);
    this.floatBox.classList.add('ag-format-picker-container');
    this.listen();
  }

  listen() {
    const { eventCenter } = this.muya;
    super.listen();
    eventCenter.subscribe('muya-format-picker', ({ reference, formats }) => {
      if (reference) {
        this.formats = formats;
        setTimeout(() => {
          this.show(reference);
          this.render();
        }, 0);
      } else {
        this.hide();
      }
    });
  }

  render() {
    const { icons, oldVnode, formatContainer, formats } = this;
    const children = icons.map((i) => {
      let icon;
      let iconWrapperSelector;

      if (i.icon) {
        // SVG icon Asset
        iconWrapperSelector = 'div.icon-wrapper';
        icon = (0, _snabbdom.h)(
          'i.icon',
          (0, _snabbdom.h)(
            'i.icon-inner',
            {
              style: {
                background: 'url('.concat(i.icon, ') no-repeat'),
                'background-size': '100%'
              }
            },
            ''
          )
        );
      }

      const iconWrapper = (0, _snabbdom.h)(iconWrapperSelector, icon);
      let itemSelector = 'li.item.'.concat(i.type);

      if (formats.some((f) => f.type === i.type || (f.type === 'html_tag' && f.tag === i.type))) {
        itemSelector += '.active';
      }

      return (0, _snabbdom.h)(
        itemSelector,
        {
          attrs: {
            title: ''.concat(i.tooltip, ' ').concat(i.shortcut)
          },
          on: {
            click: (event) => {
              this.selectItem(event, i);
            }
          }
        },
        [iconWrapper]
      );
    });
    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(formatContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, item) {
    event.preventDefault();
    event.stopPropagation();
    const { contentState } = this.muya;
    contentState.render();
    contentState.format(item.type);

    if (/link|image/.test(item.type)) {
      this.hide();
    } else {
      const { formats } = contentState.selectionFormats();
      this.formats = formats;
      this.render();
    }
  }
}

_defineProperty(FormatPicker, 'pluginName', 'formatPicker');

var _default = FormatPicker;
exports.default = _default;
