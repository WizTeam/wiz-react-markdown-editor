'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = renderBlock;

/**
 * [renderBlock render one block, no matter it is a container block or text block]
 */
function renderBlock(parent, block, activeBlocks, matches, useCache = false) {
  const method =
    Array.isArray(block.children) && block.children.length > 0
      ? 'renderContainerBlock'
      : 'renderLeafBlock';
  return this[method](parent, block, activeBlocks, matches, useCache);
}
