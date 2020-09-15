'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseScrollFloat = _interopRequireDefault(require('../baseScrollFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

var _index = require('../../prism/index');

var _fileIcons = _interopRequireDefault(require('../fileIcons'));

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
  placement: 'bottom-start',
  modifiers: {
    offset: {
      offset: '0, 0'
    }
  },
  showArrow: false
};

class CodePicker extends _baseScrollFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-list-picker';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.renderArray = [];
    this.oldVnode = null;
    this.activeItem = null;
    this.listen();
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-code-picker', ({ reference, lang, cb }) => {
      const modes = (0, _index.search)(lang);

      if (modes.length && reference) {
        this.show(reference, cb);
        this.renderArray = modes;
        this.activeItem = modes[0];
        this.render();
      } else {
        this.hide();
      }
    });
  }

  render() {
    const { renderArray, oldVnode, scrollElement, activeItem } = this;
    let children = renderArray.map((item) => {
      let iconClassNames;

      if (item.ext && Array.isArray(item.ext)) {
        for (const ext of item.ext) {
          iconClassNames = _fileIcons.default.getClassWithColor('fackname.'.concat(ext));
          if (iconClassNames) break;
        }
      } else if (item.name) {
        iconClassNames = _fileIcons.default.getClassWithColor(item.name);
      } // Because `markdown mode in Codemirror` don't have extensions.
      // if still can not get the className, add a common className 'atom-icon light-cyan'

      if (!iconClassNames) {
        iconClassNames =
          item.name === 'markdown'
            ? _fileIcons.default.getClassWithColor('fackname.md')
            : 'atom-icon light-cyan';
      }

      const iconSelector =
        'span' +
        iconClassNames
          .split(/\s/)
          .map((s) => '.'.concat(s))
          .join('');
      const icon = (0, _snabbdom.h)('div.icon-wrapper', (0, _snabbdom.h)(iconSelector));
      const text = (0, _snabbdom.h)('div.language', item.name);
      const selector = activeItem === item ? 'li.item.active' : 'li.item';
      return (0, _snabbdom.h)(
        selector,
        {
          dataset: {
            label: item.name
          },
          on: {
            click: () => {
              this.selectItem(item);
            }
          }
        },
        [icon, text]
      );
    });

    if (children.length === 0) {
      children = (0, _snabbdom.h)('div.no-result', 'No result');
    }

    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(scrollElement, vnode);
    }

    this.oldVnode = vnode;
  }

  getItemElement(item) {
    const { name } = item;
    return this.floatBox.querySelector('[data-label="'.concat(name, '"]'));
  }
}

_defineProperty(CodePicker, 'pluginName', 'codePicker');

var _default = CodePicker;
exports.default = _default;
