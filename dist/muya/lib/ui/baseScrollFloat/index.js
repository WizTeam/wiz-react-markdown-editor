"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require("../baseFloat"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BaseScrollFloat extends _baseFloat.default {
  constructor(muya, name, options = {}) {
    super(muya, name, options);
    this.scrollElement = null;
    this.reference = null;
    this.activeItem = null;
    this.createScrollElement();
  }

  createScrollElement() {
    const {
      container
    } = this;
    const scrollElement = document.createElement('div');
    container.appendChild(scrollElement);
    this.scrollElement = scrollElement;
  }

  activeEleScrollIntoView(ele) {
    if (ele) {
      ele.scrollIntoView(false);
    }
  }

  listen() {
    super.listen();
    const {
      eventCenter,
      container
    } = this.muya;

    const handler = event => {
      if (!this.status || this.muya.keyboard.isComposed) return;

      switch (event.key) {
        case _config.EVENT_KEYS.ArrowUp:
          this.step('previous');
          break;

        case _config.EVENT_KEYS.ArrowDown:
        case _config.EVENT_KEYS.Tab:
          this.step('next');
          break;

        case _config.EVENT_KEYS.Enter:
          this.selectItem(this.activeItem);
          break;

        default:
          break;
      }
    };

    eventCenter.attachDOMEvent(container, 'keydown', handler);
  }

  hide() {
    super.hide();
    this.reference = null;
  }

  show(reference, cb) {
    this.cb = cb;

    if (reference instanceof HTMLElement) {
      if (this.reference && this.reference === reference && this.status) return;
    } else {
      if (this.reference && this.reference.id === reference.id && this.status) return;
    }

    this.reference = reference;
    super.show(reference, cb);
  }

  step(direction) {
    let index = this.renderArray.findIndex(item => {
      return item === this.activeItem;
    });
    index = direction === 'next' ? index + 1 : index - 1;

    if (index < 0 || index >= this.renderArray.length) {
      return;
    }

    this.activeItem = this.renderArray[index];
    this.render();
    const activeEle = this.getItemElement(this.activeItem);
    this.activeEleScrollIntoView(activeEle);
  }

  selectItem(item) {
    const {
      cb
    } = this;
    cb(item); // delay hide to avoid dispatch enter hander

    setTimeout(this.hide.bind(this));
  }

  getItemElement() {}

}

var _default = BaseScrollFloat;
exports.default = _default;