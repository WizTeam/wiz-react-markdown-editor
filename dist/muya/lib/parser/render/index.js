"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderers = _interopRequireDefault(require("../../renderers"));

var _config = require("../../config");

var _utils = require("../../utils");

var _snabbdom = require("./snabbdom");

var _rules = require("../rules");

var _renderInlines = _interopRequireDefault(require("./renderInlines"));

var _renderBlock = _interopRequireDefault(require("./renderBlock"));

var _blockRules = require("../marked/blockRules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StateRender {
  constructor(muya) {
    this.muya = muya;
    this.eventCenter = muya.eventCenter;
    this.codeCache = new Map();
    this.loadImageMap = new Map();
    this.loadMathMap = new Map();
    this.mermaidCache = new Map();
    this.diagramCache = new Map();
    this.tokenCache = new Map();
    this.labels = new Map();
    this.urlMap = new Map();
    this.renderingTable = null;
    this.renderingRowContainer = null;
    this.container = null;
  }

  setContainer(container) {
    this.container = container;
  } // collect link reference definition


  collectLabels(blocks) {
    this.labels.clear();

    const travel = block => {
      const {
        text,
        children
      } = block;

      if (children && children.length) {
        children.forEach(c => travel(c));
      } else if (text) {
        const tokens = _rules.beginRules.reference_definition.exec(text);

        if (tokens) {
          const key = (tokens[2] + tokens[3]).toLowerCase();

          if (!this.labels.has(key)) {
            this.labels.set(key, {
              href: tokens[6],
              title: tokens[10] || ''
            });
          }
        }
      }
    };

    blocks.forEach(b => travel(b));
  }

  checkConflicted(block, token, cursor) {
    const {
      start,
      end
    } = cursor;
    const key = block.key;
    const {
      start: tokenStart,
      end: tokenEnd
    } = token.range;

    if (key !== start.key && key !== end.key) {
      return false;
    } else if (key === start.key && key !== end.key) {
      return (0, _utils.conflict)([tokenStart, tokenEnd], [start.offset, start.offset]);
    } else if (key !== start.key && key === end.key) {
      return (0, _utils.conflict)([tokenStart, tokenEnd], [end.offset, end.offset]);
    } else {
      return (0, _utils.conflict)([tokenStart, tokenEnd], [start.offset, start.offset]) || (0, _utils.conflict)([tokenStart, tokenEnd], [end.offset, end.offset]);
    }
  }

  getClassName(outerClass, block, token, cursor) {
    return outerClass || (this.checkConflicted(block, token, cursor) ? _config.CLASS_OR_ID.AG_GRAY : _config.CLASS_OR_ID.AG_HIDE);
  }

  getHighlightClassName(active) {
    return active ? _config.CLASS_OR_ID.AG_HIGHLIGHT : _config.CLASS_OR_ID.AG_SELECTION;
  }

  getSelector(block, activeBlocks) {
    const {
      cursor,
      selectedBlock
    } = this.muya.contentState;
    const type = block.type === 'hr' ? 'p' : block.type;
    const isActive = activeBlocks.some(b => b.key === block.key) || block.key === cursor.start.key;
    let selector = "".concat(type, "#").concat(block.key, ".").concat(_config.CLASS_OR_ID.AG_PARAGRAPH);

    if (isActive) {
      selector += ".".concat(_config.CLASS_OR_ID.AG_ACTIVE);
    }

    if (type === 'span') {
      selector += ".ag-".concat((0, _utils.camelToSnake)(block.functionType));
    }

    if (!block.parent && selectedBlock && block.key === selectedBlock.key) {
      selector += ".".concat(_config.CLASS_OR_ID.AG_SELECTED);
    }

    return selector;
  }

  async renderMermaid() {
    if (this.mermaidCache.size) {
      const mermaid = await (0, _renderers.default)('mermaid');
      mermaid.initialize({
        theme: this.muya.options.mermaidTheme
      });

      for (const [key, value] of this.mermaidCache.entries()) {
        const {
          code
        } = value;
        const target = document.querySelector(key);

        if (!target) {
          continue;
        }

        try {
          mermaid.parse(code);
          target.innerHTML = code;
          mermaid.init(undefined, target);
        } catch (err) {
          target.innerHTML = '< Invalid Mermaid Codes >';
          target.classList.add(_config.CLASS_OR_ID.AG_MATH_ERROR);
        }
      }

      this.mermaidCache.clear();
    }
  }

  async renderDiagram() {
    const cache = this.diagramCache;

    if (cache.size) {
      const RENDER_MAP = {
        flowchart: await (0, _renderers.default)('flowchart'),
        sequence: await (0, _renderers.default)('sequence'),
        'vega-lite': await (0, _renderers.default)('vega-lite')
      };

      for (const [key, value] of cache.entries()) {
        const target = document.querySelector(key);

        if (!target) {
          continue;
        }

        const {
          code,
          functionType
        } = value;
        const render = RENDER_MAP[functionType];
        const options = {};

        if (functionType === 'sequence') {
          Object.assign(options, {
            theme: this.muya.options.sequenceTheme
          });
        } else if (functionType === 'vega-lite') {
          Object.assign(options, {
            actions: false,
            tooltip: false,
            renderer: 'svg',
            theme: this.muya.options.vegaTheme
          });
        }

        try {
          if (functionType === 'flowchart' || functionType === 'sequence') {
            const diagram = render.parse(code);
            target.innerHTML = '';
            diagram.drawSVG(target, options);
          } else if (functionType === 'vega-lite') {
            await render(key, JSON.parse(code), options);
          }
        } catch (err) {
          target.innerHTML = "< Invalid ".concat(functionType === 'flowchart' ? 'Flow Chart' : 'Sequence', " Codes >");
          target.classList.add(_config.CLASS_OR_ID.AG_MATH_ERROR);
        }
      }

      this.diagramCache.clear();
    }
  }

  render(blocks, activeBlocks, matches) {
    const selector = "div#".concat(this.muya.CLASS_OR_ID.AG_EDITOR_ID);
    const children = blocks.map(block => {
      return this.renderBlock(null, block, activeBlocks, matches, true);
    });
    const newVdom = (0, _snabbdom.h)(selector, children);
    const rootDom = document.querySelector(selector) || this.container;
    const oldVdom = (0, _snabbdom.toVNode)(rootDom);
    (0, _snabbdom.patch)(oldVdom, newVdom);
    this.renderMermaid();
    this.renderDiagram();
    this.codeCache.clear();
  } // Only render the blocks which you updated


  partialRender(blocks, activeBlocks, matches, startKey, endKey) {
    const cursorOutMostBlock = activeBlocks[activeBlocks.length - 1]; // If cursor is not in render blocks, need to render cursor block independently

    const needRenderCursorBlock = blocks.indexOf(cursorOutMostBlock) === -1; // const newVnode = h('section', blocks.map(block => this.renderBlock(null, block, activeBlocks, matches)))
    // const html = toHTML(newVnode).replace(/^<section>([\s\S]+?)<\/section>$/, '$1')

    const needChangeDom = [];
    const firstOldDom = startKey ? document.querySelector("#".concat(startKey)) : document.querySelector("div#".concat(this.muya.CLASS_OR_ID.AG_EDITOR_ID)).firstElementChild;
    const parentDom = firstOldDom.parentElement;

    if (!firstOldDom) {
      // TODO@Jocs Just for fix #541, Because I'll rewrite block and render method, it will nolonger have this issue.
      return;
    }

    function addNeedChangeDom(dom) {
      if (blocks.findIndex(({
        key
      }) => key === dom.id) === -1) {
        dom.remove();
      } else {
        needChangeDom.push(dom);
      }
    }

    addNeedChangeDom(firstOldDom);
    let nextSibling = firstOldDom.nextElementSibling;
    let prevDom = firstOldDom.previousElementSibling;

    while (nextSibling && nextSibling.id !== endKey) {
      addNeedChangeDom(nextSibling);
      nextSibling = nextSibling.nextElementSibling;
    }

    nextSibling && addNeedChangeDom(nextSibling); // 节点插入

    let i = 0;
    blocks.forEach(block => {
      const renderBlock = this.renderBlock(null, block, activeBlocks, matches);

      if (i < needChangeDom.length && block.key === needChangeDom[i].id) {
        (0, _snabbdom.patch)((0, _snabbdom.toVNode)(needChangeDom[i++]), renderBlock);
        prevDom = prevDom ? prevDom.nextElementSibling : parentDom.children[0];
      } else {
        const newVnode = (0, _snabbdom.h)('section', [renderBlock]);
        const newDom = (0, _snabbdom.toHTML)(newVnode).replace(/^<section>([\s\S]+?)<\/section>$/, '$1');

        if (prevDom) {
          prevDom.insertAdjacentHTML('afterend', newDom);
          prevDom = prevDom.nextElementSibling;
        } else {
          firstOldDom.insertAdjacentHTML('beforebegin', newDom);
        }
      }
    }); // firstOldDom.insertAdjacentHTML('beforebegin', html)
    // Array.from(needToRemoved).forEach(dom => dom.remove())
    // Render cursor block independently

    if (needRenderCursorBlock) {
      const {
        key
      } = cursorOutMostBlock;
      const cursorDom = document.querySelector("#".concat(key));

      if (cursorDom) {
        const oldCursorVnode = (0, _snabbdom.toVNode)(cursorDom);
        const newCursorVnode = this.renderBlock(null, cursorOutMostBlock, activeBlocks, matches);
        (0, _snabbdom.patch)(oldCursorVnode, newCursorVnode);
      }
    }

    this.renderMermaid();
    this.renderDiagram();
    this.codeCache.clear();
  }
  /**
   * Only render one block.
   *
   * @param {object} block
   * @param {array} activeBlocks
   * @param {array} matches
   */


  singleRender(block, activeBlocks, matches) {
    const selector = "#".concat(block.key);
    const newVdom = this.renderBlock(null, block, activeBlocks, matches, true);
    const rootDom = document.querySelector(selector);
    const oldVdom = (0, _snabbdom.toVNode)(rootDom);
    (0, _snabbdom.patch)(oldVdom, newVdom);
    this.renderMermaid();
    this.renderDiagram();
    this.codeCache.clear();
  }

}

(0, _utils.mixins)(StateRender, _renderInlines.default, _renderBlock.default);
var _default = StateRender;
exports.default = _default;