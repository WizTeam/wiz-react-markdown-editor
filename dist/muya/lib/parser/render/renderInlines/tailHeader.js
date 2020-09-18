"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tailHeader;

function tailHeader(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const {
    start,
    end
  } = token.range;
  const content = this.highlight(h, block, start, end, token);

  if (/^h\d$/.test(block.type)) {
    return [h("span.".concat(className), content)];
  } else {
    return content;
  }
}