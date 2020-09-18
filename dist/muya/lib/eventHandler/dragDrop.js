"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class DragDrop {
  constructor(muya) {
    this.muya = muya;
    this.dragOverBinding();
    this.dropBinding();
    this.dragendBinding();
    this.dragStartBinding();
  }

  dragStartBinding() {
    const {
      container,
      eventCenter
    } = this.muya;

    const dragStartHandler = event => {
      if (event.target.tagName === 'IMG') {
        return event.preventDefault();
      }
    };

    eventCenter.attachDOMEvent(container, 'dragstart', dragStartHandler);
  }

  dragOverBinding() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const dragoverHandler = event => {
      contentState.dragoverHandler(event);
    };

    eventCenter.attachDOMEvent(container, 'dragover', dragoverHandler);
  }

  dropBinding() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const dropHandler = event => {
      contentState.dropHandler(event);
    };

    eventCenter.attachDOMEvent(container, 'drop', dropHandler);
  }

  dragendBinding() {
    const {
      eventCenter,
      contentState
    } = this.muya;

    const dragleaveHandler = event => {
      contentState.dragleaveHandler(event);
    };

    eventCenter.attachDOMEvent(window, 'dragleave', dragleaveHandler);
  }

}

var _default = DragDrop;
exports.default = _default;