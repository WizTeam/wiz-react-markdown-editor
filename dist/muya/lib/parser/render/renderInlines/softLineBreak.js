"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hardLineBreak;

var _config = require("../../../config");

function hardLineBreak(h, cursor, block, token, outerClass) {
  const {
    lineBreak,
    isAtEnd
  } = token;
  let selector = "span.".concat(_config.CLASS_OR_ID.AG_SOFT_LINE_BREAK);

  if (isAtEnd) {
    selector += ".".concat(_config.CLASS_OR_ID.AG_LINE_END);
  }

  return [h(selector, lineBreak)];
}