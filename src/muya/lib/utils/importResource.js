module.exports = {
  importPrismjs: (language) => import('prismjs/components/prism-' + language),
  importFlowchart: () => import('flowchart.js'),
  importMermaid: () => import('mermaid/dist/mermaid.core'),
  importVegaLite: () => import('vega-embed')
};
