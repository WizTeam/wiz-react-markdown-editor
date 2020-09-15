'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseScrollFloat = _interopRequireDefault(require('../baseScrollFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

var _folder = _interopRequireDefault(require('../../assets/icons/folder.svg'));

var _image = _interopRequireDefault(require('../../assets/icons/image.svg'));

var _upload = _interopRequireDefault(require('../../assets/icons/upload.svg'));

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

const iconhash = {
  'icon-image': _image.default,
  'icon-folder': _folder.default,
  'icon-upload': _upload.default
};

class ImagePathPicker extends _baseScrollFloat.default {
  constructor(muya) {
    const name = 'ag-list-picker';
    super(muya, name);
    this.renderArray = [];
    this.oldVnode = null;
    this.activeItem = null;
    this.floatBox.classList.add('ag-image-picker-wrapper');
    this.listen();
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-image-picker', ({ reference, list, cb }) => {
      if (list.length) {
        this.show(reference, cb);
        this.renderArray = list;
        this.activeItem = list[0];
        this.render();
      } else {
        this.hide();
      }
    });
  }

  render() {
    const { renderArray, oldVnode, scrollElement, activeItem } = this;
    const children = renderArray.map((item) => {
      const { text, iconClass } = item;
      const icon = (0, _snabbdom.h)(
        'div.icon-wrapper',
        (0, _snabbdom.h)(
          'svg',
          {
            attrs: {
              viewBox: iconhash[iconClass].viewBox,
              'aria-hidden': 'true'
            },
            hook: {
              prepatch(oldvnode, vnode) {
                // cheat snabbdom that the pre block is changed!!!
                oldvnode.children = [];
                oldvnode.elm.innerHTML = '';
              }
            }
          },
          (0, _snabbdom.h)('use', {
            attrs: {
              'xlink:href': iconhash[iconClass].url
            }
          })
        )
      );
      const textEle = (0, _snabbdom.h)('div.language', text);
      const selector = activeItem === item ? 'li.item.active' : 'li.item';
      return (0, _snabbdom.h)(
        selector,
        {
          dataset: {
            label: item.text
          },
          on: {
            click: () => {
              this.selectItem(item);
            }
          }
        },
        [icon, textEle]
      );
    });
    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(scrollElement, vnode);
    }

    this.oldVnode = vnode;
  }

  getItemElement(item) {
    const { text } = item;
    return this.floatBox.querySelector('[data-label="'.concat(text, '"]'));
  }
}

_defineProperty(ImagePathPicker, 'pluginName', 'imagePathPicker');

var _default = ImagePathPicker;
exports.default = _default;
