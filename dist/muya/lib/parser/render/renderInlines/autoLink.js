'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = autoLink;

var _config = require('../../../config');

// render auto_link to vdom
function autoLink(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const { isLink, marker, href, email } = token;
  const { start, end } = token.range;
  const startMarker = this.highlight(h, block, start, start + marker.length, token);
  const endMarker = this.highlight(h, block, end - marker.length, end, token);
  const content = this.highlight(h, block, start + marker.length, end - marker.length, token);
  return [
    h('span.'.concat(className), startMarker),
    h(
      'a.'.concat(_config.CLASS_OR_ID.AG_INLINE_RULE, '.').concat(_config.CLASS_OR_ID.AG_AUTO_LINK),
      {
        attrs: {
          spellcheck: 'false'
        },
        props: {
          href: isLink ? encodeURI(href) : 'mailto:'.concat(email),
          target: '_blank'
        }
      },
      content
    ),
    h('span.'.concat(className), endMarker)
  ];
}
