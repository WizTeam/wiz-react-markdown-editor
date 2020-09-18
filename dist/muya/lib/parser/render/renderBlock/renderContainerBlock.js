"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderContainerBlock;

var _config = require("../../../config");

var _renderToolBar = require("./renderToolBar");

var _renderFootnoteJump = require("./renderFootnoteJump");

var _renderContainerEditIcon = require("./renderContainerEditIcon");

var _renderCopyButton = _interopRequireDefault(require("./renderCopyButton"));

var _renderTableDargBar = require("./renderTableDargBar");

var _snabbdom = require("../snabbdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import renderLineNumberRows from './renderLineNumber'
const PRE_BLOCK_HASH = {
  fencecode: ".".concat(_config.CLASS_OR_ID.AG_FENCE_CODE),
  indentcode: ".".concat(_config.CLASS_OR_ID.AG_INDENT_CODE),
  html: ".".concat(_config.CLASS_OR_ID.AG_HTML_BLOCK),
  frontmatter: ".".concat(_config.CLASS_OR_ID.AG_FRONT_MATTER),
  multiplemath: ".".concat(_config.CLASS_OR_ID.AG_MULTIPLE_MATH),
  flowchart: ".".concat(_config.CLASS_OR_ID.AG_FLOWCHART),
  sequence: ".".concat(_config.CLASS_OR_ID.AG_SEQUENCE),
  mermaid: ".".concat(_config.CLASS_OR_ID.AG_MERMAID),
  'vega-lite': ".".concat(_config.CLASS_OR_ID.AG_VEGA_LITE)
};

function renderContainerBlock(parent, block, activeBlocks, matches, useCache = false) {
  let selector = this.getSelector(block, activeBlocks);
  const {
    key,
    align,
    type,
    headingStyle,
    editable,
    functionType,
    listType,
    listItemType,
    bulletMarkerOrDelimiter,
    isLooseListItem,
    lang,
    column
  } = block;

  if (type === 'table') {
    this.renderingTable = block;
  } else if (/thead|tbody/.test(type)) {
    this.renderingRowContainer = block;
  }

  const children = block.children.map(child => this.renderBlock(block, child, activeBlocks, matches, useCache));
  const data = {
    attrs: {},
    dataset: {}
  };

  if (editable === false) {
    Object.assign(data.attrs, {
      contenteditable: 'false',
      spellcheck: 'false'
    });
  }

  if (/code|pre/.test(type)) {
    if (typeof lang === 'string' && !!lang) {
      selector += ".language-".concat(lang.replace(/[#.]{1}/g, ''));
    }

    if (type === 'pre') {
      children.unshift((0, _renderCopyButton.default)());
    } // FIXME: Disabled due to #1648 - be consistent.
    // if (this.muya.options.codeBlockLineNumbers) {
    //   if (type === 'pre') {
    //     selector += '.line-numbers'
    //   } else {
    //     children.unshift(renderLineNumberRows(block.children[0]))
    //   }
    // }


    Object.assign(data.attrs, {
      spellcheck: 'false'
    });
  }

  if (/^(?:th|td)$/.test(type)) {
    const {
      cells
    } = this.muya.contentState.selectedTableCells || {};

    if (align) {
      Object.assign(data.attrs, {
        style: "text-align:".concat(align)
      });
    }

    if (typeof column === 'number') {
      Object.assign(data.dataset, {
        column
      });
    }

    if (cells && cells.length) {
      const cell = cells.find(c => c.key === key);

      if (cell) {
        const {
          top,
          right,
          bottom,
          left
        } = cell;
        selector += '.ag-cell-selected';

        if (top) {
          selector += '.ag-cell-border-top';
        }

        if (right) {
          selector += '.ag-cell-border-right';
        }

        if (bottom) {
          selector += '.ag-cell-border-bottom';
        }

        if (left) {
          selector += '.ag-cell-border-left';
        }
      }
    } else {
      // Judge whether to render the table drag bar.
      const {
        renderingTable,
        renderingRowContainer
      } = this;
      const findTable = renderingTable ? activeBlocks.find(b => b.key === renderingTable.key) : null;

      if (findTable && renderingRowContainer) {
        const {
          row: tableRow,
          column: tableColumn
        } = findTable;

        const isLastRow = () => {
          if (renderingRowContainer.type === 'thead') {
            return tableRow === 0;
          } else {
            return !parent.nextSibling;
          }
        };

        if (block.parent === activeBlocks[1].parent && !block.preSibling && tableRow > 0) {
          children.unshift((0, _renderTableDargBar.renderLeftBar)());
        }

        if (column === activeBlocks[1].column && isLastRow() && tableColumn > 0) {
          children.push((0, _renderTableDargBar.renderBottomBar)());
        }
      }
    }
  } else if (/^h/.test(type)) {
    if (/^h\d$/.test(type)) {
      // TODO: This should be the best place to create and update the TOC.
      //       Cache `block.key` and title and update only if necessary.
      Object.assign(data.dataset, {
        head: type
      });
      selector += ".".concat(headingStyle);
    }

    Object.assign(data.dataset, {
      role: type
    });
  } else if (type === 'figure') {
    if (functionType) {
      Object.assign(data.dataset, {
        role: functionType.toUpperCase()
      });

      if (functionType === 'table' && activeBlocks[0] && activeBlocks[0].functionType === 'cellContent') {
        children.unshift((0, _renderToolBar.renderTableTools)(activeBlocks));
      } else if (functionType !== 'footnote') {
        children.unshift((0, _renderContainerEditIcon.renderEditIcon)());
      } else {
        children.push((0, _renderFootnoteJump.footnoteJumpIcon)());
      }
    }

    if (/html|multiplemath|flowchart|mermaid|sequence|vega-lite/.test(functionType)) {
      selector += ".".concat(_config.CLASS_OR_ID.AG_CONTAINER_BLOCK);
      Object.assign(data.attrs, {
        spellcheck: 'false'
      });
    }
  } else if (/ul|ol/.test(type) && listType) {
    selector += ".ag-".concat(listType, "-list");

    if (type === 'ol') {
      Object.assign(data.attrs, {
        start: block.start
      });
    }
  } else if (type === 'li' && listItemType) {
    Object.assign(data.dataset, {
      marker: bulletMarkerOrDelimiter
    });
    selector += ".".concat(_config.CLASS_OR_ID.AG_LIST_ITEM);
    selector += ".ag-".concat(listItemType, "-list-item");
    selector += isLooseListItem ? ".".concat(_config.CLASS_OR_ID.AG_LOOSE_LIST_ITEM) : ".".concat(_config.CLASS_OR_ID.AG_TIGHT_LIST_ITEM);
  } else if (type === 'pre') {
    Object.assign(data.attrs, {
      spellcheck: 'false'
    });
    Object.assign(data.dataset, {
      role: functionType
    });
    selector += PRE_BLOCK_HASH[block.functionType];

    if (/html|multiplemath|mermaid|flowchart|vega-lite|sequence/.test(functionType)) {
      const codeBlock = block.children[0];
      const code = codeBlock.children.map(line => line.text).join('\n');
      this.codeCache.set(block.key, code);
    }
  }

  if (!block.parent) {
    children.unshift(this.renderIcon(block));
  }

  return (0, _snabbdom.h)(selector, data, children);
}