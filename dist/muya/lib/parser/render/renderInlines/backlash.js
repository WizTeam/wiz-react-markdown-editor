'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = backlash;

var _config = require('../../../config');

function backlash(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const { start, end } = token.range;
  const content = this.highlight(h, block, start, end, token);
  return [h('span.'.concat(className, '.').concat(_config.CLASS_OR_ID.AG_REMOVE), content)];
}
