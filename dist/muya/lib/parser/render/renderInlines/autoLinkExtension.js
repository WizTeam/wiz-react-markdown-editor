'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = autoLinkExtension;

var _config = require('../../../config');

// render auto_link to vdom
function autoLinkExtension(h, cursor, block, token, outerClass) {
  const { linkType, www, url, email } = token;
  const { start, end } = token.range;
  const content = this.highlight(h, block, start, end, token);
  return [
    h(
      'a.'
        .concat(_config.CLASS_OR_ID.AG_INLINE_RULE, '.')
        .concat(_config.CLASS_OR_ID.AG_AUTO_LINK_EXTENSION),
      {
        attrs: {
          spellcheck: 'false'
        },
        props: {
          href:
            linkType === 'www'
              ? encodeURI('http://'.concat(www))
              : linkType === 'url'
              ? encodeURI(url)
              : 'mailto:'.concat(email),
          target: '_blank'
        }
      },
      content
    )
  ];
}
