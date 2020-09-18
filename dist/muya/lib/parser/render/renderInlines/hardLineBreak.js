"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = softLineBreak;

var _config = require("../../../config");

function softLineBreak(h, cursor, block, token, outerClass) {
  const {
    spaces,
    lineBreak,
    isAtEnd
  } = token;
  const className = _config.CLASS_OR_ID.AG_HARD_LINE_BREAK;
  const spaceClass = _config.CLASS_OR_ID.AG_HARD_LINE_BREAK_SPACE;

  if (isAtEnd) {
    return [h("span.".concat(className), h("span.".concat(spaceClass), spaces)), h("span.".concat(_config.CLASS_OR_ID.AG_LINE_END), lineBreak)];
  } else {
    return [h("span.".concat(className), [h("span.".concat(spaceClass), spaces), lineBreak])];
  }
}