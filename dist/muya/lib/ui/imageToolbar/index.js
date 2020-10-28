"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require("../baseFloat"));

var _snabbdom = require("../../parser/render/snabbdom");

var _config = _interopRequireDefault(require("./config"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultOptions = {
  placement: 'top',
  modifiers: {
    offset: {
      offset: '0, 10'
    }
  },
  showArrow: false
};

class ImageToolbar extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-image-toolbar';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.oldVnode = null;
    this.imageInfo = null;
    this.options = opts;
    this.icons = _config.default;
    this.reference = null;
    const toolbarContainer = this.toolbarContainer = document.createElement('div');
    this.container.appendChild(toolbarContainer);
    this.floatBox.classList.add('ag-image-toolbar-container');
    this.listen();
  }

  listen() {
    const {
      eventCenter
    } = this.muya;
    super.listen();
    eventCenter.subscribe('muya-image-toolbar', ({
      reference,
      imageInfo
    }) => {
      this.reference = reference;

      if (reference) {
        this.imageInfo = imageInfo;
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
    const {
      icons,
      oldVnode,
      toolbarContainer,
      imageInfo
    } = this;
    const {
      attrs
    } = imageInfo.token;
    const dataAlign = attrs['data-align'];
    const children = icons.map(i => {
      let icon;
      let iconWrapperSelector;

      if (i.icon) {
        // SVG icon Asset
        iconWrapperSelector = 'div.icon-wrapper';
        icon = (0, _snabbdom.h)('i.icon', (0, _snabbdom.h)('i.icon-inner', {
          style: {
            background: "url(".concat(i.icon, ") no-repeat"),
            'background-size': '100%'
          }
        }, ''));
      }

      const iconWrapper = (0, _snabbdom.h)(iconWrapperSelector, icon);
      let itemSelector = "li.item.".concat(i.type);

      if (i.type === dataAlign || !dataAlign && i.type === 'inline') {
        itemSelector += '.active';
      }

      return (0, _snabbdom.h)(itemSelector, {
        dataset: {
          tip: i.tooltip
        },
        on: {
          click: event => {
            this.selectItem(event, i);
          }
        }
      }, [(0, _snabbdom.h)('div.tooltip', i.tooltip), iconWrapper]);
    });
    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(toolbarContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, item) {
    event.preventDefault();
    event.stopPropagation();
    const {
      imageInfo
    } = this;

    switch (item.type) {
      // Delete image.
      case 'delete':
        this.muya.contentState.deleteImage(imageInfo); // Hide image transformer

        this.muya.eventCenter.dispatch('muya-transformer', {
          reference: null
        });
        return this.hide();
      // Edit image, for example: editor alt and title, replace image.

      case 'edit':
        {
          // const rect = this.reference.getBoundingClientRect()
          // const reference = {
          //   getBoundingClientRect () {
          //     rect.height = 0
          //     return rect
          //   }
          // }
          // // Hide image transformer
          // this.muya.eventCenter.dispatch('muya-transformer', {
          //   reference: null
          // })
          this.muya.eventCenter.dispatch('muya-image-selector', {
            // reference,
            imageInfo // cb: () => {}

          });
          return this.muya.imageSelector.handleSelectButtonClick();
        }

      case 'inline':
      case 'left':
      case 'center':
      case 'right':
        {
          this.muya.contentState.updateImage(this.imageInfo, 'data-align', item.type);
          return this.hide();
        }
    }
  }

}

_defineProperty(ImageToolbar, "pluginName", 'imageToolbar');

var _default = ImageToolbar;
exports.default = _default;