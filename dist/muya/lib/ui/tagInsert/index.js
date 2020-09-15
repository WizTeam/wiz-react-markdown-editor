'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _snabbdom = require('../../parser/render/snabbdom');

var _fuzzaldrin = require('fuzzaldrin');

var _baseScrollFloat = _interopRequireDefault(require('../baseScrollFloat'));

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

class TagInsert extends _baseScrollFloat.default {
  constructor(muya, options) {
    var _options$wordList;

    super(muya, 'ag-tag-insert');
    this.setWordList(
      (_options$wordList = options === null || options === void 0 ? void 0 : options.wordList) !==
        null && _options$wordList !== void 0
        ? _options$wordList
        : []
    );
    this.oldVnode = null;
    this.reference = null;
    this.listen();
  }

  setWordList(list = []) {
    this.wordList = [...new Set(list)];
    this.setRenderArray();
  }

  setRenderArray(list = this.wordList) {
    this.renderArray = list;
    this.activeItem = list[0];
  }

  render() {
    const { scrollElement, renderArray, activeItem } = this;
    const children = renderArray.map((item) =>
      (0, _snabbdom.h)(
        'div.item'.concat(activeItem === item ? '.active' : ''),
        {
          dataset: {
            text: item
          },
          on: {
            mousedown: () => this.selectItem(item)
          }
        },
        item
      )
    );
    let vNode = (0, _snabbdom.h)(
      'div',
      children.length ? children : (0, _snabbdom.h)('div.no-result', 'No result')
    );

    if (this.oldVnode) {
      (0, _snabbdom.patch)(this.oldVnode, vNode);
    } else {
      (0, _snabbdom.patch)(scrollElement, vNode);
    }

    this.oldVnode = vNode;
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-tag-insert', (reference, block, status) => {
      if (status) {
        const keyword = block.text.replace(
          /(^|[\t\f\v ])#(?!#|\s)(([^#\r\n]{1,25}[^#\s]#)|([^#\s]{1,25}$)|(\S{1,25}(\S|$)))/,
          (arg) => arg.trim().replace(/#/g, '')
        );
        this.search(keyword);
        this.show(reference);
      } else {
        this.hide();
      }
    });
  }

  search(keyword) {
    this.setRenderArray((0, _fuzzaldrin.filter)(this.wordList, keyword));
    this.render();
  }

  selectItem(item) {
    if (item) {
      this.muya.contentState.formatTag(item);
      setTimeout(this.hide.bind(this));
    }
  }

  getItemElement(item) {
    return this.scrollElement.querySelector('[data-text="'.concat(item, '"]'));
  }
}

exports.default = TagInsert;

_defineProperty(TagInsert, 'pluginName', 'tagInsert');
