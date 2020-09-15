'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = header;

var _config = require('../../../config');

function header(h, cursor, block, token, outerClass) {
  const { content } = token;
  const { start, end } = token.range;
  const className = this.getClassName(
    outerClass,
    block,
    {
      range: {
        start,
        end: end - content.length
      }
    },
    cursor
  );
  const markerVnode = this.highlight(h, block, start, end - content.length, token);
  const contentVnode = this.highlight(h, block, end - content.length, end, token);
  const spaceSelector =
    className === _config.CLASS_OR_ID.AG_HIDE
      ? 'span.'
          .concat(_config.CLASS_OR_ID.AG_HEADER_TIGHT_SPACE, '.')
          .concat(_config.CLASS_OR_ID.AG_REMOVE)
      : 'span.'.concat(_config.CLASS_OR_ID.AG_GRAY, '.').concat(_config.CLASS_OR_ID.AG_REMOVE);
  return [
    h('span.'.concat(className, '.').concat(_config.CLASS_OR_ID.AG_REMOVE), markerVnode),
    h(spaceSelector, contentVnode)
  ];
}
