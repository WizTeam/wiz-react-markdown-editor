import {
  importFlowchart,
  importMermaid,
  importVegaLite
  // importParser
} from '../utils/importResource';
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
        m = await importFlowchart();
        rendererCache.set(name, m.default);
        break;
      case 'mermaid':
        // m = await import('mermaid/dist/mermaid.core');
        m = await importMermaid();
        rendererCache.set(name, m.default);
        break;
      case 'vega-lite':
        // m = await import('vega-embed');
        m = await importVegaLite();
        rendererCache.set(name, m.default);
        break;
      default:
        throw new Error(`Unknown diagram name ${name}`);
    }
  }

  return rendererCache.get(name);
};

export default loadRenderer;
