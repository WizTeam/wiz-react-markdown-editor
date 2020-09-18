'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = multipleMath;

var _config = require('../../../config');

function multipleMath(h, cursor, block, token, outerClass) {
  const { start, end } = token.range;
  const content = this.highlight(h, block, start, end, token);
  return [
    h(
      'span.'.concat(_config.CLASS_OR_ID.AG_GRAY, '.').concat(_config.CLASS_OR_ID.AG_REMOVE),
      content
    )
  ];
}