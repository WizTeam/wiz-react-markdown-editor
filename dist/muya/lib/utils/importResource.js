'use strict';

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

module.exports = {
  importPrismjs: (language) =>
    Promise.resolve(''.concat('prismjs/components/prism-' + language)).then((s) =>
      _interopRequireWildcard(require(s))
    ),
  // importParser: () => import('../parser/render/sequence'),
  importFlowchart: () =>
    Promise.resolve().then(() => _interopRequireWildcard(require('flowchart.js'))),
  importMermaid: () =>
    Promise.resolve().then(() => _interopRequireWildcard(require('mermaid/dist/mermaid.core'))),
  importVegaLite: () => Promise.resolve().then(() => _interopRequireWildcard(require('vega-embed')))
};
