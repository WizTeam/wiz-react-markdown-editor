"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inlineCode;

var _config = require("../../../config");

function inlineCode(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const {
    marker
  } = token;
  const {
    start,
    end
  } = token.range;
  const startMarker = this.highlight(h, block, start, start + marker.length, token);
  const endMarker = this.highlight(h, block, end - marker.length, end, token);
  const content = this.highlight(h, block, start + marker.length, end - marker.length, token);
  return [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), startMarker), h("code.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE), {
    attrs: {
      spellcheck: 'false'
    }
  }, content), h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), endMarker)];
}