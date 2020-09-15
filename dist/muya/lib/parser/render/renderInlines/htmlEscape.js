'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = htmlEscape;

var _config = require('../../../config');

var _escapeCharacter = _interopRequireDefault(require('../../escapeCharacter'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function htmlEscape(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const { escapeCharacter } = token;
  const { start, end } = token.range;
  const content = this.highlight(h, block, start, end, token);
  return [
    h(
      'span.'.concat(className, '.').concat(_config.CLASS_OR_ID.AG_HTML_ESCAPE),
      {
        dataset: {
          character: _escapeCharacter.default[escapeCharacter]
        }
      },
      content
    )
  ];
}
