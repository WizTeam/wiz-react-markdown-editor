'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = tag;

var _config = require('../../../config');

function tag(h, cursor, block, token, outerClass) {
  const COMMON_MARKER = 'span.'.concat(_config.CLASS_OR_ID.AG_TAG);
  const { content } = token;
  return [h(COMMON_MARKER, content)];
}
