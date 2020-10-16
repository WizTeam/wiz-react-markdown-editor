"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

var _utils = require("../utils");

var _selection = _interopRequireDefault(require("../selection"));

var _render = _interopRequireDefault(require("../parser/render"));

var _enterCtrl = _interopRequireDefault(require("./enterCtrl"));

var _updateCtrl = _interopRequireDefault(require("./updateCtrl"));

var _backspaceCtrl = _interopRequireDefault(require("./backspaceCtrl"));

var _deleteCtrl = _interopRequireDefault(require("./deleteCtrl"));

var _codeBlockCtrl = _interopRequireDefault(require("./codeBlockCtrl"));

var _tableBlockCtrl = _interopRequireDefault(require("./tableBlockCtrl"));

var _tableDragBarCtrl = _interopRequireDefault(require("./tableDragBarCtrl"));

var _tableSelectCellsCtrl = _interopRequireDefault(require("./tableSelectCellsCtrl"));

var _core = _interopRequireDefault(require("./core"));

var _history = _interopRequireDefault(require("./history"));

var _arrowCtrl = _interopRequireDefault(require("./arrowCtrl"));

var _pasteCtrl = _interopRequireDefault(require("./pasteCtrl"));

var _copyCutCtrl = _interopRequireDefault(require("./copyCutCtrl"));

var _paragraphCtrl = _interopRequireDefault(require("./paragraphCtrl"));

var _tabCtrl = _interopRequireDefault(require("./tabCtrl"));

var _formatCtrl = _interopRequireDefault(require("./formatCtrl"));

var _searchCtrl = _interopRequireDefault(require("./searchCtrl"));

var _containerCtrl = _interopRequireDefault(require("./containerCtrl"));

var _htmlBlock = _interopRequireDefault(require("./htmlBlock"));

var _clickCtrl = _interopRequireDefault(require("./clickCtrl"));

var _inputCtrl = _interopRequireDefault(require("./inputCtrl"));

var _tocCtrl = _interopRequireDefault(require("./tocCtrl"));

var _emojiCtrl = _interopRequireDefault(require("./emojiCtrl"));

var _imageCtrl = _interopRequireDefault(require("./imageCtrl"));

var _linkCtrl = _interopRequireDefault(require("./linkCtrl"));

var _dragDropCtrl = _interopRequireDefault(require("./dragDropCtrl"));

var _footnoteCtrl = _interopRequireDefault(require("./footnoteCtrl"));

var _importMarkdown = _interopRequireDefault(require("../utils/importMarkdown"));

var _cursor = _interopRequireDefault(require("../selection/cursor"));

var _escapeCharacter = _interopRequireWildcard(require("../parser/escapeCharacter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prototypes = [_core.default, _tabCtrl.default, _enterCtrl.default, _updateCtrl.default, _backspaceCtrl.default, _deleteCtrl.default, _codeBlockCtrl.default, _arrowCtrl.default, _pasteCtrl.default, _copyCutCtrl.default, _tableBlockCtrl.default, _tableDragBarCtrl.default, _tableSelectCellsCtrl.default, _paragraphCtrl.default, _formatCtrl.default, _searchCtrl.default, _containerCtrl.default, _htmlBlock.default, _clickCtrl.default, _inputCtrl.default, _tocCtrl.default, _emojiCtrl.default, _imageCtrl.default, _linkCtrl.default, _dragDropCtrl.default, _footnoteCtrl.default, _importMarkdown.default];

class ContentState {
  constructor(muya, options) {
    const {
      bulletListMarker
    } = options;
    this.muya = muya;
    Object.assign(this, options); // Use to cache the keys which you don't want to remove.

    this.exemption = new Set();
    this.blocks = [this.createBlockP()];
    this.stateRender = new _render.default(muya);
    this.renderRange = [null, null];
    this.currentCursor = null; // you'll select the outmost block of current cursor when you click the front icon.

    this.selectedBlock = null;
    this._selectedImage = null;
    this.dropAnchor = null;
    this.prevCursor = null;
    this.historyTimer = null;
    this.history = new _history.default(this);
    this.turndownConfig = Object.assign(_config.DEFAULT_TURNDOWN_CONFIG, {
      bulletListMarker
    }); // table drag bar

    this.dragInfo = null;
    this.isDragTableBar = false;
    this.dragEventIds = []; // table cell select

    this.cellSelectInfo = null;
    this._selectedTableCells = null;
    this.cellSelectEventIds = [];
    this.init();
  }

  set selectedTableCells(info) {
    const oldSelectedTableCells = this._selectedTableCells;

    if (!info && !!oldSelectedTableCells) {
      const selectedCells = this.muya.container.querySelectorAll('.ag-cell-selected');

      for (const cell of Array.from(selectedCells)) {
        cell.classList.remove('ag-cell-selected');
        cell.classList.remove('ag-cell-border-top');
        cell.classList.remove('ag-cell-border-right');
        cell.classList.remove('ag-cell-border-bottom');
        cell.classList.remove('ag-cell-border-left');
      }
    }

    this._selectedTableCells = info;
  }

  get selectedTableCells() {
    return this._selectedTableCells;
  }

  set selectedImage(image) {
    const oldSelectedImage = this._selectedImage; // if there is no selected image, remove selected status of current selected image.

    if (!image && oldSelectedImage) {
      const selectedImages = this.muya.container.querySelectorAll('.ag-inline-image-selected');

      for (const img of selectedImages) {
        img.classList.remove('ag-inline-image-selected');
      }
    }

    this._selectedImage = image;
  }

  get selectedImage() {
    return this._selectedImage;
  }

  set cursor(cursor) {
    if (!(cursor instanceof _cursor.default)) {
      cursor = new _cursor.default(cursor);
    }

    const handler = () => {
      const {
        blocks,
        renderRange,
        currentCursor
      } = this;
      this.history.push({
        blocks,
        renderRange,
        cursor: currentCursor
      });
    };

    this.prevCursor = this.currentCursor;
    this.currentCursor = cursor;

    if (!cursor.noHistory) {
      if (this.prevCursor && (this.prevCursor.start.key !== cursor.start.key || this.prevCursor.end.key !== cursor.end.key)) {
        handler();
      } else {
        if (this.historyTimer) clearTimeout(this.historyTimer);
        this.historyTimer = setTimeout(handler, 2000);
      }
    }
  }

  get cursor() {
    return this.currentCursor;
  }

  init() {
    const lastBlock = this.getLastBlock();
    const {
      key,
      text
    } = lastBlock;
    const offset = text.length;
    this.searchMatches = {
      value: '',
      // the search value
      matches: [],
      // matches
      index: -1 // active match

    };
    this.cursor = {
      start: {
        key,
        offset
      },
      end: {
        key,
        offset
      }
    };
  }

  getHistory() {
    const {
      stack,
      index
    } = this.history;
    return {
      stack,
      index
    };
  }

  setHistory({
    stack,
    index
  }) {
    Object.assign(this.history, {
      stack,
      index
    });
  }

  setCursor() {
    _selection.default.setCursorRange(this.cursor);
  }

  setNextRenderRange() {
    const {
      start,
      end
    } = this.cursor;
    const startBlock = this.getBlock(start.key);
    const endBlock = this.getBlock(end.key);
    const startOutMostBlock = this.findOutMostBlock(startBlock);
    const endOutMostBlock = this.findOutMostBlock(endBlock);
    this.renderRange = [startOutMostBlock.preSibling, endOutMostBlock.nextSibling];
  }

  postRender() {
    this.resizeLineNumber();
  }

  render(isRenderCursor = true, clearCache = false) {
    const {
      blocks,
      searchMatches: {
        matches,
        index
      }
    } = this;
    const activeBlocks = this.getActiveBlocks();

    if (clearCache) {
      this.stateRender.tokenCache.clear();
    }

    matches.forEach((m, i) => {
      m.active = i === index;
    });
    this.setNextRenderRange();
    this.stateRender.collectLabels(blocks);
    this.stateRender.render(blocks, activeBlocks, matches);

    if (isRenderCursor) {
      this.setCursor();
    } else {
      this.muya.blur();
    }

    this.postRender();
  }

  partialRender(isRenderCursor = true) {
    const {
      blocks,
      searchMatches: {
        matches,
        index
      }
    } = this;
    const activeBlocks = this.getActiveBlocks();
    const [startKey, endKey] = this.renderRange;
    matches.forEach((m, i) => {
      m.active = i === index;
    });
    const startIndex = startKey ? blocks.findIndex(block => block.key === startKey) : 0;
    const endIndex = endKey ? blocks.findIndex(block => block.key === endKey) + 1 : blocks.length;
    const needRenderBlocks = blocks.slice(startIndex, endIndex);
    this.setNextRenderRange();
    this.stateRender.collectLabels(blocks);
    this.stateRender.partialRender(needRenderBlocks, activeBlocks, matches, startKey, endKey);

    if (isRenderCursor) {
      this.setCursor();
    } else {
      this.muya.blur();
    }

    this.postRender();
  }

  singleRender(block, isRenderCursor = true) {
    const {
      blocks,
      searchMatches: {
        matches,
        index
      }
    } = this;
    const activeBlocks = this.getActiveBlocks();
    matches.forEach((m, i) => {
      m.active = i === index;
    });
    this.setNextRenderRange();
    this.stateRender.collectLabels(blocks);
    this.stateRender.singleRender(block, activeBlocks, matches);

    if (isRenderCursor) {
      this.setCursor();
    } else {
      this.muya.blur();
    }

    this.postRender();
  }
  /**
   * A block in Mark Text present a paragraph(block syntax in GFM) or a line in paragraph.
   * a `span` block must in a `p block` or `pre block` and `p block`'s children must be `span` blocks.
   */


  createBlock(type = 'span', extras = {}) {
    const key = (0, _utils.getUniqueId)();
    const blockData = {
      key,
      text: '',
      type,
      editable: true,
      parent: null,
      preSibling: null,
      nextSibling: null,
      children: []
    }; // give span block a default functionType `paragraphContent`

    if (type === 'span' && !extras.functionType) {
      blockData.functionType = 'paragraphContent';
    }

    if (extras.functionType === 'codeContent' && extras.text) {
      const CHAR_REG = new RegExp("(".concat(_escapeCharacter.escapeCharacters.join('|'), ")"), 'gi');
      extras.text = extras.text.replace(CHAR_REG, (_, p) => {
        return _escapeCharacter.default[p];
      });
    }

    Object.assign(blockData, extras);
    return blockData;
  }

  createBlockP(text = '') {
    const pBlock = this.createBlock('p');
    const contentBlock = this.createBlock('span', {
      text
    });
    this.appendChild(pBlock, contentBlock);
    return pBlock;
  }

  isCollapse(cursor = this.cursor) {
    const {
      start,
      end
    } = cursor;
    return start.key === end.key && start.offset === end.offset;
  } // getBlocks


  getBlocks() {
    return this.blocks;
  }

  getCursor() {
    return this.cursor;
  }

  getBlock(key) {
    if (!key) return null;
    let result = null;

    const travel = blocks => {
      for (const block of blocks) {
        if (block.key === key) {
          result = block;
          return;
        }

        const {
          children
        } = block;

        if (children.length) {
          travel(children);
        }
      }
    };

    travel(this.blocks);
    return result;
  }

  copyBlock(origin) {
    const copiedBlock = (0, _utils.deepCopy)(origin);

    const travel = (block, parent, preBlock, nextBlock) => {
      const key = (0, _utils.getUniqueId)();
      block.key = key;
      block.parent = parent ? parent.key : null;
      block.preSibling = preBlock ? preBlock.key : null;
      block.nextSibling = nextBlock ? nextBlock.key : null;
      const {
        children
      } = block;
      const len = children.length;

      if (children && len) {
        let i;

        for (i = 0; i < len; i++) {
          const b = children[i];
          const preB = i >= 1 ? children[i - 1] : null;
          const nextB = i < len - 1 ? children[i + 1] : null;
          travel(b, block, preB, nextB);
        }
      }
    };

    travel(copiedBlock, null, null, null);
    return copiedBlock;
  }

  getParent(block) {
    if (block && block.parent) {
      return this.getBlock(block.parent);
    }

    return null;
  } // return block and its parents


  getParents(block) {
    const result = [];
    result.push(block);
    let parent = this.getParent(block);

    while (parent) {
      result.push(parent);
      parent = this.getParent(parent);
    }

    return result;
  }

  getPreSibling(block) {
    return block.preSibling ? this.getBlock(block.preSibling) : null;
  }

  getNextSibling(block) {
    return block.nextSibling ? this.getBlock(block.nextSibling) : null;
  }
  /**
   * if target is descendant of parent return true, else return false
   * @param  {[type]}  parent [description]
   * @param  {[type]}  target [description]
   * @return {Boolean}        [description]
   */


  isInclude(parent, target) {
    const children = parent.children;

    if (children.length === 0) {
      return false;
    } else {
      if (children.some(child => child.key === target.key)) {
        return true;
      } else {
        return children.some(child => this.isInclude(child, target));
      }
    }
  }

  removeTextOrBlock(block) {
    if (block.functionType === 'languageInput') return;

    const checkerIn = block => {
      if (this.exemption.has(block.key)) {
        return true;
      } else {
        const parent = this.getBlock(block.parent);
        return parent ? checkerIn(parent) : false;
      }
    };

    const checkerOut = block => {
      const children = block.children;

      if (children.length) {
        if (children.some(child => this.exemption.has(child.key))) {
          return true;
        } else {
          return children.some(child => checkerOut(child));
        }
      } else {
        return false;
      }
    };

    if (checkerIn(block) || checkerOut(block)) {
      block.text = '';
      const {
        children
      } = block;

      if (children.length) {
        children.forEach(child => this.removeTextOrBlock(child));
      }
    } else if (block.editable) {
      this.removeBlock(block);
    }
  }
  /**
   * remove blocks between before and after, and includes after block.
   */


  removeBlocks(before, after, isRemoveAfter = true, isRecursion = false) {
    const isCells = block => block ? /td|th/.test(block.type) || block.parent && isCells(this.getBlock(block.parent)) : false;

    if (!isRecursion) {
      if (isCells(before)) {
        this.exemption.add(this.closest(before, 'figure').key);
      }

      if (isCells(after)) {
        this.exemption.add(this.closest(after, 'figure').key);
      }
    }

    let nextSibling = this.getBlock(before.nextSibling);
    let beforeEnd = false;

    while (nextSibling) {
      if (nextSibling.key === after.key || this.isInclude(nextSibling, after)) {
        beforeEnd = true;
        break;
      }

      this.removeTextOrBlock(nextSibling);
      nextSibling = this.getBlock(nextSibling.nextSibling);
    }

    if (!beforeEnd) {
      const parent = this.getParent(before);

      if (parent) {
        this.removeBlocks(parent, after, false, true);
      }
    }

    let preSibling = this.getBlock(after.preSibling);
    let afterEnd = false;

    while (preSibling) {
      if (preSibling.key === before.key || this.isInclude(preSibling, before)) {
        afterEnd = true;
        break;
      }

      this.removeTextOrBlock(preSibling);
      preSibling = this.getBlock(preSibling.preSibling);
    }

    if (!afterEnd) {
      const parent = this.getParent(after);

      if (parent) {
        const removeAfter = isRemoveAfter && this.isOnlyRemoveableChild(after);
        this.removeBlocks(before, parent, removeAfter, true);
      }
    }

    if (isRemoveAfter) {
      this.removeTextOrBlock(after);
    }

    if (!isRecursion) {
      this.exemption.clear();
    }
  }

  removeBlock(block, fromBlocks = this.blocks) {
    const remove = (blocks, block) => {
      const len = blocks.length;
      let i;

      for (i = 0; i < len; i++) {
        if (blocks[i].key === block.key) {
          const preSibling = this.getBlock(block.preSibling);
          const nextSibling = this.getBlock(block.nextSibling);

          if (preSibling) {
            preSibling.nextSibling = nextSibling ? nextSibling.key : null;
          }

          if (nextSibling) {
            nextSibling.preSibling = preSibling ? preSibling.key : null;
          }

          return blocks.splice(i, 1);
        } else {
          if (blocks[i].children.length) {
            remove(blocks[i].children, block);
          }
        }
      }
    };

    remove(Array.isArray(fromBlocks) ? fromBlocks : fromBlocks.children, block);
  }

  getActiveBlocks() {
    const result = [];
    let block = this.getBlock(this.cursor.start.key);

    if (block) {
      result.push(block);
    }

    while (block && block.parent) {
      block = this.getBlock(block.parent);
      result.push(block);
    }

    return result;
  }

  insertAfter(newBlock, oldBlock) {
    const siblings = oldBlock.parent ? this.getBlock(oldBlock.parent).children : this.blocks;
    const oldNextSibling = this.getBlock(oldBlock.nextSibling);
    const index = this.findIndex(siblings, oldBlock);
    siblings.splice(index + 1, 0, newBlock);
    oldBlock.nextSibling = newBlock.key;
    newBlock.parent = oldBlock.parent;
    newBlock.preSibling = oldBlock.key;

    if (oldNextSibling) {
      newBlock.nextSibling = oldNextSibling.key;
      oldNextSibling.preSibling = newBlock.key;
    }
  }

  insertBefore(newBlock, oldBlock) {
    const siblings = oldBlock.parent ? this.getBlock(oldBlock.parent).children : this.blocks;
    const oldPreSibling = this.getBlock(oldBlock.preSibling);
    const index = this.findIndex(siblings, oldBlock);
    siblings.splice(index, 0, newBlock);
    oldBlock.preSibling = newBlock.key;
    newBlock.parent = oldBlock.parent;
    newBlock.nextSibling = oldBlock.key;
    newBlock.preSibling = null;

    if (oldPreSibling) {
      oldPreSibling.nextSibling = newBlock.key;
      newBlock.preSibling = oldPreSibling.key;
    }
  }

  findOutMostBlock(block) {
    const parent = this.getBlock(block.parent);
    return parent ? this.findOutMostBlock(parent) : block;
  }

  findIndex(children, block) {
    return children.findIndex(child => child === block);
  }

  prependChild(parent, block) {
    block.parent = parent.key;
    block.preSibling = null;

    if (parent.children.length) {
      block.nextSibling = parent.children[0].key;
    }

    parent.children.unshift(block);
  }

  appendChild(parent, block) {
    const len = parent.children.length;
    const lastChild = parent.children[len - 1];
    parent.children.push(block);
    block.parent = parent.key;

    if (lastChild) {
      lastChild.nextSibling = block.key;
      block.preSibling = lastChild.key;
    } else {
      block.preSibling = null;
    }

    block.nextSibling = null;
  }

  replaceBlock(newBlock, oldBlock) {
    const blockList = oldBlock.parent ? this.getParent(oldBlock).children : this.blocks;
    const index = this.findIndex(blockList, oldBlock);
    blockList.splice(index, 1, newBlock);
    newBlock.parent = oldBlock.parent;
    newBlock.preSibling = oldBlock.preSibling;
    newBlock.nextSibling = oldBlock.nextSibling;
  }

  canInserFrontMatter(block) {
    if (!block) return true;
    const parent = this.getParent(block);
    return block.type === 'span' && !block.preSibling && !parent.preSibling && !parent.parent;
  }

  isFirstChild(block) {
    return !block.preSibling;
  }

  isLastChild(block) {
    return !block.nextSibling;
  }

  isOnlyChild(block) {
    return !block.nextSibling && !block.preSibling;
  }

  isOnlyRemoveableChild(block) {
    if (block.editable === false) return false;
    const parent = this.getParent(block);
    return (parent ? parent.children : this.blocks).filter(child => child.editable && child.functionType !== 'languageInput').length === 1;
  }

  getLastChild(block) {
    if (block) {
      const len = block.children.length;

      if (len) {
        return block.children[len - 1];
      }
    }

    return null;
  }

  firstInDescendant(block) {
    const children = block.children;

    if (block.children.length === 0 && _config.HAS_TEXT_BLOCK_REG.test(block.type)) {
      return block;
    } else if (children.length) {
      if (children[0].type === 'input' || children[0].type === 'div' && children[0].editable === false) {
        // handle task item
        return this.firstInDescendant(children[1]);
      } else {
        return this.firstInDescendant(children[0]);
      }
    }
  }

  lastInDescendant(block) {
    if (block.children.length === 0 && _config.HAS_TEXT_BLOCK_REG.test(block.type)) {
      return block;
    } else if (block.children.length) {
      const children = block.children;
      let lastChild = children[children.length - 1];

      while (lastChild.editable === false) {
        lastChild = this.getPreSibling(lastChild);
      }

      return this.lastInDescendant(lastChild);
    }
  }

  findPreBlockInLocation(block) {
    const parent = this.getParent(block);
    const preBlock = this.getPreSibling(block);

    if (block.preSibling && preBlock.type !== 'input' && preBlock.type !== 'div' && preBlock.editable !== false) {
      // handle task item and table
      return this.lastInDescendant(preBlock);
    } else if (parent) {
      return this.findPreBlockInLocation(parent);
    } else {
      return null;
    }
  }

  findNextBlockInLocation(block) {
    const parent = this.getParent(block);
    const nextBlock = this.getNextSibling(block);

    if (nextBlock && nextBlock.editable !== false) {
      return this.firstInDescendant(nextBlock);
    } else if (parent) {
      return this.findNextBlockInLocation(parent);
    } else {
      return null;
    }
  }

  getPositionReference() {
    const {
      fontSize,
      lineHeight
    } = this.muya.options;
    const {
      start
    } = this.cursor;
    const block = this.getBlock(start.key);

    const {
      x,
      y,
      width
    } = _selection.default.getCursorCoords();

    const height = fontSize * lineHeight;
    const bottom = y + height;
    const right = x + width;
    const left = x;
    const top = y;
    return {
      getBoundingClientRect() {
        return {
          x,
          y,
          top,
          left,
          right,
          bottom,
          height,
          width
        };
      },

      clientWidth: width,
      clientHeight: height,
      id: block ? block.key : null
    };
  }

  getFirstBlock() {
    return this.firstInDescendant(this.blocks[0]);
  }

  getLastBlock() {
    const {
      blocks
    } = this;
    const len = blocks.length;
    return this.lastInDescendant(blocks[len - 1]);
  }

  closest(block, type) {
    if (!block) {
      return null;
    }

    if (type instanceof RegExp ? type.test(block.type) : block.type === type) {
      return block;
    } else {
      const parent = this.getParent(block);
      return this.closest(parent, type);
    }
  }

  getParentBlock(block, fn, isSelf = true) {
    const target = isSelf ? block : this.getParent(block);

    if (!target || !fn) {
      return null;
    }

    if (fn(block)) {
      return target;
    }

    return this.getParentBlock(target, fn, false);
  }

  getAnchor(block) {
    const {
      type,
      functionType
    } = block;

    if (type !== 'span') {
      return null;
    }

    if (functionType === 'codeContent' || functionType === 'cellContent') {
      return this.closest(block, 'figure') || this.closest(block, 'pre');
    } else {
      return this.getParent(block);
    }
  }

  clear() {
    this.history.clearHistory();
  }

}

prototypes.forEach(ctrl => ctrl(ContentState));
var _default = ContentState;
exports.default = _default;