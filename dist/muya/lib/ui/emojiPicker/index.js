'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseScrollFloat = _interopRequireDefault(require('../baseScrollFloat'));

var _emojis = _interopRequireDefault(require('../emojis'));

var _snabbdom = require('../../parser/render/snabbdom');

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

class EmojiPicker extends _baseScrollFloat.default {
  constructor(muya) {
    const name = 'ag-emoji-picker';
    super(muya, name);
    this._renderObj = null;
    this.renderArray = null;
    this.activeItem = null;
    this.oldVnode = null;
    this.emoji = new _emojis.default();
    this.listen();
  }

  set renderObj(obj) {
    this._renderObj = obj;
    const renderArray = [];
    Object.keys(obj).forEach((key) => {
      renderArray.push(...obj[key]);
    });
    this.renderArray = renderArray;

    if (this.renderArray.length > 0) {
      this.activeItem = this.renderArray[0];
      const activeEle = this.getItemElement(this.activeItem);
      this.activeEleScrollIntoView(activeEle);
    }
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-emoji-picker', ({ reference, emojiNode }) => {
      if (!emojiNode) return this.hide();
      const text = emojiNode.textContent.trim();

      if (text) {
        const renderObj = this.emoji.search(text);
        this.renderObj = renderObj;

        const cb = (item) => {
          this.muya.contentState.setEmoji(item);
        };

        if (this.renderArray.length) {
          this.show(reference, cb);
          this.render();
        } else {
          this.hide();
        }
      }
    });
  }

  render() {
    const { scrollElement, _renderObj, activeItem, oldVnode } = this;
    const children = Object.keys(_renderObj).map((category) => {
      const title = (0, _snabbdom.h)('div.title', category);

      const emojis = _renderObj[category].map((e) => {
        const selector = activeItem === e ? 'div.item.active' : 'div.item';
        return (0, _snabbdom.h)(
          selector,
          {
            dataset: {
              label: e.aliases[0]
            },
            props: {
              title: e.description
            },
            on: {
              click: () => {
                this.selectItem(e);
              }
            }
          },
          (0, _snabbdom.h)('span', e.emoji)
        );
      });

      return (0, _snabbdom.h)('section', [title, (0, _snabbdom.h)('div.emoji-wrapper', emojis)]);
    });
    const vnode = (0, _snabbdom.h)('div', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(scrollElement, vnode);
    }

    this.oldVnode = vnode;
  }

  getItemElement(item) {
    const label = item.aliases[0];
    return this.floatBox.querySelector('[data-label="'.concat(label, '"]'));
  }

  destroy() {
    super.destroy();
    this.emoji.destroy();
  }
}

_defineProperty(EmojiPicker, 'pluginName', 'emojiPicker');

var _default = EmojiPicker;
exports.default = _default;
