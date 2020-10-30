"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fuzzaldrin = require("fuzzaldrin");

var _snabbdom = require("../../parser/render/snabbdom");

var _utils = require("../../utils");

var _baseScrollFloat = _interopRequireDefault(require("../baseScrollFloat"));

var _config = require("./config");

var _lang = require("./lang");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class QuickInsert extends _baseScrollFloat.default {
  constructor(muya) {
    const name = 'ag-quick-insert';
    super(muya, name);
    this.reference = null;
    this.oldVnode = null;
    this._renderObj = null;
    this.renderArray = null;
    this.activeItem = null;
    this.block = null;
    this.renderObj = _config.quickInsertObj;
    this.lang = this.muya.options.lang;
    this.render();
    this.listen();
  }

  set renderObj(obj) {
    this._renderObj = obj;
    const renderArray = [];
    Object.keys(obj).forEach(key => {
      renderArray.push(...obj[key]);
    });
    this.renderArray = renderArray;

    if (this.renderArray.length > 0) {
      this.activeItem = this.renderArray[0];
      const activeEle = this.getItemElement(this.activeItem);
      this.activeEleScrollIntoView(activeEle);
    }
  }

  render() {
    const {
      scrollElement,
      activeItem,
      _renderObj
    } = this;
    let children = Object.keys(_renderObj).filter(key => {
      return _renderObj[key].length !== 0;
    }).map(key => {
      const titleVnode = (0, _snabbdom.h)('div.title', _lang.content[this.lang][key].toUpperCase());
      const items = [];

      for (const item of _renderObj[key]) {
        const {
          title,
          subTitle,
          label,
          icon,
          shortCut
        } = item;
        const iconVnode = (0, _snabbdom.h)('div.icon-container', (0, _snabbdom.h)('i.icon', (0, _snabbdom.h)("i.icon-".concat(label.replace(/\s/g, '-')), {
          style: {
            background: "url(".concat(icon, ") no-repeat"),
            'background-size': '100%'
          }
        }, '')));
        const description = (0, _snabbdom.h)('div.description', [(0, _snabbdom.h)('div.big-title', _lang.content[this.lang][title]), (0, _snabbdom.h)('div.sub-title', _lang.content[this.lang][subTitle])]);
        const shortCutVnode = (0, _snabbdom.h)('div.short-cut', [(0, _snabbdom.h)('span', shortCut)]);
        const selector = activeItem.label === label ? 'div.item.active' : 'div.item';
        items.push((0, _snabbdom.h)(selector, {
          dataset: {
            label
          },
          on: {
            click: () => {
              this.selectItem(item);
            }
          }
        }, [iconVnode, description, shortCutVnode]));
      }

      return (0, _snabbdom.h)('section', [titleVnode, ...items]);
    });

    if (children.length === 0) {
      children = (0, _snabbdom.h)('div.no-result', 'No result');
    }

    const vnode = (0, _snabbdom.h)('div', children);

    if (this.oldVnode) {
      (0, _snabbdom.patch)(this.oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(scrollElement, vnode);
    }

    this.oldVnode = vnode;
  }

  listen() {
    super.listen();
    const {
      eventCenter
    } = this.muya;
    eventCenter.subscribe('muya-quick-insert', (reference, block, status) => {
      if (status) {
        this.block = block;
        this.show(reference);
        this.search(block.text.substring(1)); // remove `@` char
      } else {
        this.hide();
      }
    });
    eventCenter.subscribe('changeLang', lang => {
      this.lang = lang;
      this.render();
    });
  }

  search(text) {
    const {
      contentState
    } = this.muya; // const canInserFrontMatter = contentState.canInserFrontMatter(this.block);

    const obj = (0, _utils.deepCopy)(_config.quickInsertObj); // if (!canInserFrontMatter) {
    //   obj['basic block'].splice(2, 1);
    // }

    let result = obj;

    if (text !== '') {
      result = {};
      Object.keys(obj).forEach(key => {
        result[key] = (0, _fuzzaldrin.filter)(obj[key], text, {
          key: 'title'
        });
      });
    }

    this.renderObj = result;
    this.render();
  }

  selectItem(item) {
    const {
      contentState
    } = this.muya;
    this.block.text = '';
    const {
      key
    } = this.block;
    const offset = 0;
    contentState.cursor = {
      start: {
        key,
        offset
      },
      end: {
        key,
        offset
      }
    };

    if (/link|image/.test(item.label)) {
      contentState.setCursor();
      console.log("editor.contentState.format('".concat(item.label, "');"));
      contentState.format(item.label);
    } else {
      switch (item.label) {
        case 'paragraph':
          console.log("editor.contentState.partialRender()");
          contentState.partialRender();
          break;

        default:
          console.log("editor.contentState.updateParagraph('".concat(item.label, "', true)"));
          contentState.updateParagraph(item.label, true);
          break;
      }
    } // delay hide to avoid dispatch enter hander


    setTimeout(this.hide.bind(this));
  }

  getItemElement(item) {
    const {
      label
    } = item;
    return this.scrollElement.querySelector("[data-label=\"".concat(label, "\"]"));
  }

}

_defineProperty(QuickInsert, "pluginName", 'quickInsert');

var _default = QuickInsert;
exports.default = _default;