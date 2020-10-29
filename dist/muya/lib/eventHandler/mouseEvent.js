"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getLinkInfo = require("../utils/getLinkInfo");

var _utils = require("../utils");

class MouseEvent {
  constructor(muya) {
    this.muya = muya;
    this.isMouseDown = false;
    this.mouseBinding();
    this.mouseDown();
    this.mouseUp();
    this.mouseLeave();
  }

  mouseBinding() {
    const {
      container,
      eventCenter
    } = this.muya;

    const handler = event => {
      const target = event.target;
      const parent = target.parentNode;
      const preSibling = target.previousElementSibling;
      const parentPreSibling = parent ? parent.previousElementSibling : null;
      const {
        hideLinkPopup,
        footnote
      } = this.muya.options;
      const rect = parent.getBoundingClientRect();
      const reference = {
        getBoundingClientRect() {
          return rect;
        }

      };

      if (!hideLinkPopup && parent && parent.tagName === 'A' && parent.classList.contains('ag-inline-rule') && parentPreSibling && parentPreSibling.classList.contains('ag-hide')) {
        eventCenter.dispatch('muya-link-tools', {
          reference,
          linkInfo: (0, _getLinkInfo.getLinkInfo)(parent)
        });
      }

      if (footnote && parent && parent.tagName === 'SUP' && parent.classList.contains('ag-inline-footnote-identifier') && preSibling && preSibling.classList.contains('ag-hide')) {
        const identifier = target.textContent;
        eventCenter.dispatch('muya-footnote-tool', {
          reference,
          identifier,
          footnotes: (0, _utils.collectFootnotes)(this.muya.contentState.blocks)
        });
      }
    };

    const leaveHandler = event => {
      const target = event.target;
      const parent = target.parentNode;
      const preSibling = target.previousElementSibling;
      const {
        footnote
      } = this.muya.options;

      if (parent && parent.tagName === 'A' && parent.classList.contains('ag-inline-rule')) {
        eventCenter.dispatch('muya-link-tools', {
          reference: null
        });
      }

      if (footnote && parent && parent.tagName === 'SUP' && parent.classList.contains('ag-inline-footnote-identifier') && preSibling && preSibling.classList.contains('ag-hide')) {
        eventCenter.dispatch('muya-footnote-tool', {
          reference: null
        });
      }
    };

    eventCenter.attachDOMEvent(container, 'mouseover', handler);
    eventCenter.attachDOMEvent(container, 'mouseout', leaveHandler);
  }

  mouseDown() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const handler = event => {
      const target = event.target;

      if (event.button === 0) {
        this.isMouseDown = true;
      }

      if (target.classList && target.classList.contains('ag-drag-handler')) {
        contentState.handleMouseDown(event);
      } else if (target && target.closest('tr')) {
        contentState.handleCellMouseDown(event);
      }
    };

    eventCenter.attachDOMEvent(container, 'mousedown', handler);
    eventCenter.attachDOMEvent(container, 'touchstart', handler);
  }

  mouseUp() {
    const handler = () => {
      this.isMouseDown = false;
    };

    this.muya.eventCenter.attachDOMEvent(this.muya.container, 'mouseup', handler);
  } // 移出编辑器外


  mouseLeave() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const handler = () => {
      if (this.isMouseDown) {
        contentState.mouseLeaveHandler();
        this.isMouseDown = false;
      }
    };

    eventCenter.attachDOMEvent(container, 'mouseleave', handler);
  }

}

var _default = MouseEvent;
exports.default = _default;