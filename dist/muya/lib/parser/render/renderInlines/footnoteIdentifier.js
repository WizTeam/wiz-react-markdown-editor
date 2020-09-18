"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = footnoteIdentifier;

var _config = require("../../../config");

function footnoteIdentifier(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const {
    marker
  } = token;
  const {
    start,
    end
  } = token.range;
  const startMarker = this.highlight(h, block, start, start + marker.length, token);
  const endMarker = this.highlight(h, block, end - 1, end, token);
  const content = this.highlight(h, block, start + marker.length, end - 1, token);
  return [h("sup#noteref-".concat(token.content, ".").concat(_config.CLASS_OR_ID.AG_INLINE_FOOTNOTE_IDENTIFIER, ".").concat(_config.CLASS_OR_ID.AG_INLINE_RULE), [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), startMarker), h('a', {
    attrs: {
      spellcheck: 'false'
    }
  }, content), h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), endMarker)])];
}