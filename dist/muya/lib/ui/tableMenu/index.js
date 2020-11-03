"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require("../baseFloat"));

var _snabbdom = require("../../parser/render/snabbdom");

var _config = require("./config");

var _lang = require("./lang");

var _selection = _interopRequireDefault(require("../../selection"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MAX_SUBMENU_HEIGHT = 400;
const ITEM_HEIGHT = 28;
const PADDING = 10;
const MENU_WIDTH = 190;
const defaultOptions = {
  placement: 'bottom-start',
  modifiers: {
    preventOverflow: {
      padding: 15
    },
    offset: {
      offset: '0, 10'
    }
  },
  showArrow: false
};

class TableMenu extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-table-menu';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.oldVnode = null;
    this.startBlock = null;
    this.options = opts;
    this.reference = null;
    this.tableElement = null;
    this.startCursor = null;
    this.lang = this.muya.options.lang;
    const tableMenuContainer = this.tableMenuContainer = document.createElement('div');
    Object.assign(this.container.parentNode.style, {
      overflow: 'visible'
    });
    this.container.appendChild(tableMenuContainer);
    this.listen();
  }

  listen() {
    const {
      eventCenter
    } = this.muya;
    super.listen();
    eventCenter.subscribe('muya-table-menu', ({
      reference,
      tableElement,
      startBlock,
      startCursor
    }) => {
      if (reference) {
        this.tableElement = tableElement;
        this.startBlock = startBlock;
        this.startCursor = startCursor;
        this.reference = reference;
        setTimeout(() => {
          this.show(reference);
          this.render();
        }, 0);
      } else {
        this.hide();
        this.reference = null;
      }
    });
    eventCenter.subscribe('changeLang', lang => {
      this.lang = lang;
      this.render();
    });
  }

  renderAlignMenu() {
    const {
      reference
    } = this;
    const rect = reference.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth; //

    const children = _config.alignMenu.map(({
      label,
      shortCut
    }) => {
      const shortCutWrapper = (0, _snabbdom.h)('div.short-cut', [(0, _snabbdom.h)('span', shortCut)]);
      let textWrapper = (0, _snabbdom.h)('span', _lang.content[this.lang][label]); //

      let itemChildren = [textWrapper, shortCutWrapper];
      let itemSelector = "li.item.".concat(label); //

      return (0, _snabbdom.h)(itemSelector, {
        on: {
          click: event => {
            this.selectItem(event, {
              label
            });
          }
        }
      }, itemChildren);
    }); //


    let subMenuSelector = 'div.submenu';

    if (windowHeight - rect.bottom < MAX_SUBMENU_HEIGHT - (ITEM_HEIGHT + PADDING)) {
      subMenuSelector += '.align-bottom';
    }

    if (windowWidth <= rect.left + MENU_WIDTH * 2) {
      subMenuSelector += '.align-left';
    }

    return (0, _snabbdom.h)(subMenuSelector, (0, _snabbdom.h)('ul', children));
  }

  render() {
    const {
      oldVnode,
      tableMenuContainer
    } = this;

    const children = _config.menu.map(({
      label,
      shortCut
    }) => {
      if (label === 'border') {
        return (0, _snabbdom.h)('div.border');
      } //


      const shortCutWrapper = (0, _snabbdom.h)('div.short-cut', [(0, _snabbdom.h)('span', shortCut)]);
      let textWrapper = (0, _snabbdom.h)('span', _lang.content[this.lang][label]); //

      let itemChildren = [textWrapper, shortCutWrapper];
      let itemSelector = "li.item.".concat(label);

      if (label === 'align') {
        itemChildren.push(this.renderAlignMenu());
      } //


      return (0, _snabbdom.h)(itemSelector, {
        on: {
          click: event => {
            this.selectItem(event, {
              label
            });
          }
        }
      }, itemChildren);
    });

    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(tableMenuContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, {
    label
  }) {
    event.preventDefault();
    event.stopPropagation();
    const {
      contentState
    } = this.muya;
    const {
      tableElement,
      startBlock
    } = this; //

    contentState.cursor = {
      start: this.startCursor,
      end: this.startCursor
    };

    _selection.default.setCursorRange(contentState.cursor); //


    switch (label) {
      case 'insertRowBefore':
        contentState.editTable({
          action: 'insert',
          location: 'previous',
          target: 'row'
        });
        break;

      case 'insertRowAfter':
        contentState.editTable({
          action: 'insert',
          location: 'next',
          target: 'row'
        });
        break;

      case 'insertColLeft':
        contentState.editTable({
          action: 'insert',
          location: 'left',
          target: 'column'
        });
        break;

      case 'insertColRight':
        contentState.editTable({
          action: 'insert',
          location: 'right',
          target: 'column'
        });
        break;

      case 'alignLeft':
      case 'alignCenter':
      case 'alignRight':
        contentState.tableToolBarClick(label.slice(5).toLowerCase());
        break;

      case 'removeRow':
        contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'row'
        });
        break;

      case 'removeCol':
        contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'column'
        });
        break;

      case 'removeTable':
        contentState.tableToolBarClick('delete');
        break;

      case 'copyHtml':
        this.muya.clipboard.copy('copyCodeContent', tableElement.outerHTML);
        break;

      case 'copyMarkdown':
        this.muya.clipboard.copy('copyBlock', startBlock);
        break;

      default:
        break;
    } // delay hide to avoid dispatch enter hander


    setTimeout(this.hide.bind(this));
  }

}

_defineProperty(TableMenu, "pluginName", 'tableMenu');

var _default = TableMenu;
exports.default = _default;