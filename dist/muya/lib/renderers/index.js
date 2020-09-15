'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _importResource = require('../utils/importResource');

const rendererCache = new Map();
/**
 *
 * @param {string} name the renderer name: katex, sequence, flowchart, mermaid, vega-lite
 */

const loadRenderer = async (name) => {
  if (!rendererCache.has(name)) {
    let m;

    switch (name) {
      case 'sequence':
        // m = await import('../parser/render/sequence')
        // m = await importParser();
        // rendererCache.set(name, m.default);
        break;

      case 'flowchart':
        // m = await import('flowchart.js');
        m = await (0, _importResource.importFlowchart)();
        rendererCache.set(name, m.default);
        break;

      case 'mermaid':
        // m = await import('mermaid/dist/mermaid.core');
        m = await (0, _importResource.importMermaid)();
        rendererCache.set(name, m.default);
        break;

      case 'vega-lite':
        // m = await import('vega-embed');
        m = await (0, _importResource.importVegaLite)();
        rendererCache.set(name, m.default);
        break;

      default:
        throw new Error('Unknown diagram name '.concat(name));
    }
  }

  return rendererCache.get(name);
};

var _default = loadRenderer;
exports.default = _default;
