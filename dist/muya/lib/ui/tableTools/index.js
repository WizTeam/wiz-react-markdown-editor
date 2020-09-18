"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require("../baseFloat"));

var _snabbdom = require("../../parser/render/snabbdom");

var _config = require("./config");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultOptions = {
  placement: 'right-start',
  modifiers: {
    offset: {
      offset: '0, 5'
    }
  },
  showArrow: false
};

class TableBarTools extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-table-bar-tools';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.options = opts;
    this.oldVnode = null;
    this.tableInfo = null;
    this.floatBox.classList.add('ag-table-bar-tools');
    const tableBarContainer = this.tableBarContainer = document.createElement('div');
    this.container.appendChild(tableBarContainer);
    this.listen();
  }

  listen() {
    super.listen();
    const {
      eventCenter
    } = this.muya;
    eventCenter.subscribe('muya-table-bar', ({
      reference,
      tableInfo
    }) => {
      if (reference) {
        this.tableInfo = tableInfo;
        this.show(reference);
        this.render();
      } else {
        this.hide();
      }
    });
  }

  render() {
    const {
      tableInfo,
      oldVnode,
      tableBarContainer
    } = this;
    const renderArray = _config.toolList[tableInfo.barType];
    const children = renderArray.map(item => {
      const {
        label
      } = item;
      const selector = 'li.item';
      return (0, _snabbdom.h)(selector, {
        dataset: {
          label: item.action
        },
        on: {
          click: event => {
            this.selectItem(event, item);
          }
        }
      }, label);
    });
    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(tableBarContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, item) {
    event.preventDefault();
    event.stopPropagation();
    const {
      contentState
    } = this.muya;
    contentState.editTable(item);
    this.hide();
  }

}

_defineProperty(TableBarTools, "pluginName", 'tableBarTools');

var _default = TableBarTools;
exports.default = _default;