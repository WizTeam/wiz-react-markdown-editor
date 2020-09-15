'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = referenceLink;

var _config = require('../../../config');

var _utils = require('../../../utils');

function referenceLink(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const labelClass =
    className === _config.CLASS_OR_ID.AG_GRAY ? _config.CLASS_OR_ID.AG_REFERENCE_LABEL : className;
  const { start, end } = token.range;
  const { anchor, children, backlash, isFullLink, label } = token;
  const MARKER = '[';
  const key = (label + backlash.second).toLowerCase();
  const backlashStart = start + MARKER.length + anchor.length;
  const content = [
    ...children.reduce((acc, to) => {
      const chunk = this[(0, _utils.snakeToCamel)(to.type)](h, cursor, block, to, className);
      return Array.isArray(chunk) ? [...acc, ...chunk] : [...acc, chunk];
    }, []),
    ...this.backlashInToken(h, backlash.first, className, backlashStart, token)
  ];
  const { href, title } = this.labels.get(key);
  const startMarker = this.highlight(h, block, start, start + MARKER.length, token);
  const endMarker = this.highlight(
    h,
    block,
    start + MARKER.length + anchor.length + backlash.first.length,
    end,
    token
  );
  const anchorSelector = href
    ? 'a.'
        .concat(_config.CLASS_OR_ID.AG_INLINE_RULE, '.')
        .concat(_config.CLASS_OR_ID.AG_REFERENCE_LINK)
    : 'span.'.concat(_config.CLASS_OR_ID.AG_REFERENCE_LINK);
  const data = {
    attrs: {
      spellcheck: 'false'
    },
    props: {
      title
    },
    dataset: {
      start,
      end,
      raw: token.raw
    }
  };

  if (href) {
    Object.assign(data.props, {
      href
    });
  }

  if (isFullLink) {
    const labelContent = this.highlight(
      h,
      block,
      start + 3 * MARKER.length + anchor.length + backlash.first.length,
      end - MARKER.length - backlash.second.length,
      token
    );
    const middleMarker = this.highlight(
      h,
      block,
      start + MARKER.length + anchor.length + backlash.first.length,
      start + 3 * MARKER.length + anchor.length + backlash.first.length,
      token
    );
    const lastMarker = this.highlight(h, block, end - MARKER.length, end, token);
    const secondBacklashStart = end - MARKER.length - backlash.second.length;
    return [
      h('span.'.concat(className), startMarker),
      h(anchorSelector, data, content),
      h('span.'.concat(className), middleMarker),
      h('span.'.concat(labelClass), labelContent),
      ...this.backlashInToken(h, backlash.second, className, secondBacklashStart, token),
      h('span.'.concat(className), lastMarker)
    ];
  } else {
    return [
      h('span.'.concat(className), startMarker),
      h(anchorSelector, data, content),
      h('span.'.concat(className), endMarker)
    ];
  }
}
