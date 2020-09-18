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
  placement: 'bottom',
  modifiers: {
    offset: {
      offset: '0, 5'
    }
  },
  showArrow: false
};

class LinkTools extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-link-tools';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.oldVnode = null;
    this.linkInfo = null;
    this.options = opts;
    this.icons = _config.default;
    this.hideTimer = null;
    const linkContainer = this.linkContainer = document.createElement('div');
    this.container.appendChild(linkContainer);
    this.listen();
  }

  listen() {
    const {
      eventCenter
    } = this.muya;
    super.listen();
    eventCenter.subscribe('muya-link-tools', ({
      reference,
      linkInfo
    }) => {
      if (reference) {
        this.linkInfo = linkInfo;
        setTimeout(() => {
          this.show(reference);
          this.render();
        }, 0);
      } else {
        if (this.hideTimer) {
          clearTimeout(this.hideTimer);
        }

        this.hideTimer = setTimeout(() => {
          this.hide();
        }, 500);
      }
    });

    const mouseOverHandler = () => {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
      }
    };

    const mouseOutHandler = () => {
      this.hide();
    };

    eventCenter.attachDOMEvent(this.container, 'mouseover', mouseOverHandler);
    eventCenter.attachDOMEvent(this.container, 'mouseleave', mouseOutHandler);
  }

  render() {
    const {
      icons,
      oldVnode,
      linkContainer
    } = this;
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
      return (0, _snabbdom.h)(itemSelector, {
        on: {
          click: event => {
            this.selectItem(event, i);
          }
        }
      }, iconWrapper);
    });
    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(linkContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, item) {
    event.preventDefault();
    event.stopPropagation();
    const {
      contentState
    } = this.muya;

    switch (item.type) {
      case 'unlink':
        contentState.unlink(this.linkInfo);
        this.hide();
        break;

      case 'jump':
        this.options.jumpClick(this.linkInfo);
        this.hide();
        break;
    }
  }

}

_defineProperty(LinkTools, "pluginName", 'linkTools');

var _default = LinkTools;
exports.default = _default;