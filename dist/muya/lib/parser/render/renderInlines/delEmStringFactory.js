"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delEmStrongFac;

var _config = require("../../../config");

var _utils = require("../../../utils");

// render factory of `del`,`em`,`strong`
function delEmStrongFac(type, h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const COMMON_MARKER = "span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE);
  const {
    marker
  } = token;
  const {
    start,
    end
  } = token.range;
  const backlashStart = end - marker.length - token.backlash.length;
  const content = [...token.children.reduce((acc, to) => {
    const chunk = this[(0, _utils.snakeToCamel)(to.type)](h, cursor, block, to, className);
    return Array.isArray(chunk) ? [...acc, ...chunk] : [...acc, chunk];
  }, []), ...this.backlashInToken(h, token.backlash, className, backlashStart, token)];
  const startMarker = this.highlight(h, block, start, start + marker.length, token);
  const endMarker = this.highlight(h, block, end - marker.length, end, token);
  return [h(COMMON_MARKER, startMarker), h("".concat(type, ".").concat(_config.CLASS_OR_ID.AG_INLINE_RULE), content), h(COMMON_MARKER, endMarker)];
}