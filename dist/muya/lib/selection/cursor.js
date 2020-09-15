'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _dom = require('./dom');

class Cursor {
  // You need to provide either `anchor`&&`focus` or `start`&&`end` or all.
  constructor({ anchor, focus, start, end, noHistory = false }) {
    if (anchor && focus && start && end) {
      this.anchor = anchor;
      this.focus = focus;
      this.start = start;
      this.end = end;
    } else if (anchor && focus) {
      this.anchor = anchor;
      this.focus = focus;

      if (anchor.key === focus.key) {
        if (anchor.offset <= focus.offset) {
          this.start = this.anchor;
          this.end = this.focus;
        } else {
          this.start = this.focus;
          this.end = this.anchor;
        }
      } else {
        const anchorParagraph = document.querySelector('#'.concat(anchor.key));
        const focusParagraph = document.querySelector('#'.concat(focus.key));
        let order = true;

        if (anchorParagraph && focusParagraph) {
          order = (0, _dom.compareParagraphsOrder)(anchorParagraph, focusParagraph);
        }

        if (order) {
          this.start = this.anchor;
          this.end = this.focus;
        } else {
          this.start = this.focus;
          this.end = this.anchor;
        }
      }
    } else {
      this.anchor = this.start = start;
      this.focus = this.end = end;
    }

    this.noHistory = noHistory;
  }
}

var _default = Cursor;
exports.default = _default;
