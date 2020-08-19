module.exports = {
  importPrismjs: (language) => import('prismjs/components/prism-' + language),
  // importParser: () => import('../parser/render/sequence'),
  importFlowchart: () => import('flowchart.js'),
  importMermaid: () => import('mermaid/dist/mermaid.core'),
  importVegaLite: () => import('vega-embed')
};
