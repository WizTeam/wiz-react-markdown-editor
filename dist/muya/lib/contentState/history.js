'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _utils = require('../utils');

var _config = require('../config');

class History {
  constructor(contentState) {
    this.stack = [];
    this.index = -1;
    this.contentState = contentState;
  }

  undo() {
    if (this.index > 0) {
      this.index = this.index - 1;
      const state = (0, _utils.deepCopy)(this.stack[this.index]);
      const { blocks, cursor, renderRange } = state;
      cursor.noHistory = true;
      this.contentState.blocks = blocks;
      this.contentState.renderRange = renderRange;
      this.contentState.cursor = cursor;
      this.contentState.render();
    }
  }

  redo() {
    const { index, stack } = this;
    const len = stack.length;

    if (index < len - 1) {
      this.index = index + 1;
      const state = (0, _utils.deepCopy)(stack[this.index]);
      const { blocks, cursor, renderRange } = state;
      cursor.noHistory = true;
      this.contentState.blocks = blocks;
      this.contentState.renderRange = renderRange;
      this.contentState.cursor = cursor;
      this.contentState.render();
    }
  }

  push(state) {
    this.stack.splice(this.index + 1);
    const copyState = (0, _utils.deepCopy)(state);
    this.stack.push(copyState);

    if (this.stack.length > _config.UNDO_DEPTH) {
      this.stack.shift();
      this.index = this.index - 1;
    }

    this.index = this.index + 1;
  }

  clearHistory() {
    this.stack = [];
    this.index = -1;
  }
}

var _default = History;
exports.default = _default;
