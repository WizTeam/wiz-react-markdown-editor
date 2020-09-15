'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = backlashInToken;

var _utils = require('../../../utils');

var _config = require('../../../config');

// TODO HIGHLIGHT
function backlashInToken(h, backlashes, outerClass, start, token) {
  const { highlights = [] } = token;
  const chunks = backlashes.split('');
  const len = chunks.length;
  const result = [];
  let i;

  for (i = 0; i < len; i++) {
    const chunk = chunks[i];
    const light = highlights.filter((light) =>
      (0, _utils.union)(
        {
          start: start + i,
          end: start + i + 1
        },
        light
      )
    );
    let selector = 'span';

    if (light.length) {
      const className = this.getHighlightClassName(light[0].active);
      selector += '.'.concat(className);
    }

    if ((0, _utils.isEven)(i)) {
      result.push(h(''.concat(selector, '.').concat(outerClass), chunk));
    } else {
      result.push(h(''.concat(selector, '.').concat(_config.CLASS_OR_ID.AG_BACKLASH), chunk));
    }
  }

  return result;
}
