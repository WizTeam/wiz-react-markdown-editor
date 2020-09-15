'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = text;

// render token of text type to vdom.
function text(h, cursor, block, token) {
  const { start, end } = token.range;
  return [h('span.ag-plain-text', this.highlight(h, block, start, end, token))];
}
