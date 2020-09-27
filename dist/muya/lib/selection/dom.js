"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareParagraphsOrder = exports.getCursorPositionWithinMarkedText = exports.getClosestBlockContainer = exports.getFirstSelectableLeafNode = exports.traverseUp = exports.isMuyaEditorElement = exports.isBlockContainer = exports.isAganippeParagraph = exports.findOutMostParagraph = exports.findNearestParagraph = exports.getOffsetOfParagraph = exports.getTextContent = void 0;

var _config = require("../config");

const CHOP_TEXT_REG = /(\*{1,3})([^*]+)(\1)/g;

const getTextContent = (node, blackList) => {
  if (node.nodeType === 3) {
    return node.textContent;
  } else if (!blackList) {
    return node.textContent;
  }

  let text = '';

  if (blackList.some(className => node.classList && node.classList.contains(className))) {
    return text;
  }

  if (node.nodeType === 3) {
    text += node.textContent;
  } else if (node.nodeType === 1 && node.classList.contains('ag-inline-image')) {
    // handle inline image
    const raw = node.getAttribute('data-raw');
    const imageContainer = node.querySelector('.ag-image-container');
    const hasImg = imageContainer.querySelector('img');
    const childNodes = imageContainer.childNodes;

    if (childNodes.length && hasImg) {
      for (const child of childNodes) {
        if (child.nodeType === 1 && child.nodeName === 'IMG') {
          text += raw;
        } else if (child.nodeType === 3) {
          text += child.textContent;
        }
      }
    } else {
      text += raw;
    }
  } else {
    const childNodes = node.childNodes;

    for (const n of childNodes) {
      text += getTextContent(n, blackList);
    }
  }

  return text;
};

exports.getTextContent = getTextContent;

const getOffsetOfParagraph = (node, paragraph) => {
  let offset = 0;
  let preSibling = node;
  if (node === paragraph) return offset;

  do {
    preSibling = preSibling.previousSibling;

    if (preSibling) {
      offset += getTextContent(preSibling, [_config.CLASS_OR_ID.AG_MATH_RENDER, _config.CLASS_OR_ID.AG_RUBY_RENDER]).length;
    }
  } while (preSibling);

  return node === paragraph || node.parentNode === paragraph ? offset : offset + getOffsetOfParagraph(node.parentNode, paragraph);
};

exports.getOffsetOfParagraph = getOffsetOfParagraph;

const findNearestParagraph = node => {
  if (!node) {
    return null;
  }

  do {
    if (isAganippeParagraph(node)) return node;
    node = node.parentNode;
  } while (node);

  return null;
};

exports.findNearestParagraph = findNearestParagraph;

const findOutMostParagraph = node => {
  do {
    const parentNode = node.parentNode;
    if (isMuyaEditorElement(parentNode) && isAganippeParagraph(node)) return node;
    node = parentNode;
  } while (node);
};

exports.findOutMostParagraph = findOutMostParagraph;

const isAganippeParagraph = element => {
  return element && element.classList && element.classList.contains(_config.CLASS_OR_ID.AG_PARAGRAPH);
};

exports.isAganippeParagraph = isAganippeParagraph;

const isBlockContainer = element => {
  return element && element.nodeType !== 3 && _config.blockContainerElementNames.indexOf(element.nodeName.toLowerCase()) !== -1;
};

exports.isBlockContainer = isBlockContainer;

const isMuyaEditorElement = element => {
  // return element && element.id === CLASS_OR_ID.AG_EDITOR_ID
  return element && element.id.startsWith('ag-editor-id');
};

exports.isMuyaEditorElement = isMuyaEditorElement;

const traverseUp = (current, testElementFunction) => {
  if (!current) {
    return false;
  }

  do {
    if (current.nodeType === 1) {
      if (testElementFunction(current)) {
        return current;
      } // do not traverse upwards past the nearest containing editor


      if (isMuyaEditorElement(current)) {
        return false;
      }
    }

    current = current.parentNode;
  } while (current);

  return false;
};

exports.traverseUp = traverseUp;

const getFirstSelectableLeafNode = element => {
  while (element && element.firstChild) {
    element = element.firstChild;
  } // We don't want to set the selection to an element that can't have children, this messes up Gecko.


  element = traverseUp(element, el => {
    return _config.emptyElementNames.indexOf(el.nodeName.toLowerCase()) === -1;
  }); // Selecting at the beginning of a table doesn't work in PhantomJS.

  if (element.nodeName.toLowerCase() === _config.LOWERCASE_TAGS.table) {
    const firstCell = element.querySelector('th, td');

    if (firstCell) {
      element = firstCell;
    }
  }

  return element;
};

exports.getFirstSelectableLeafNode = getFirstSelectableLeafNode;

const getClosestBlockContainer = node => {
  return traverseUp(node, node => {
    return isBlockContainer(node) || isMuyaEditorElement(node);
  });
};

exports.getClosestBlockContainer = getClosestBlockContainer;

const getCursorPositionWithinMarkedText = (markedText, cursorOffset) => {
  const chunks = [];
  let match;
  let result = {
    type: 'OUT'
  };

  do {
    match = CHOP_TEXT_REG.exec(markedText);

    if (match) {
      chunks.push({
        index: match.index + match[1].length,
        leftSymbol: match[1],
        rightSymbol: match[3],
        lastIndex: CHOP_TEXT_REG.lastIndex - match[3].length
      });
    }
  } while (match);

  chunks.forEach(chunk => {
    const {
      index,
      leftSymbol,
      rightSymbol,
      lastIndex
    } = chunk;

    if (cursorOffset > index && cursorOffset < lastIndex) {
      result = {
        type: 'IN',
        info: leftSymbol
      }; // rightSymbol is also ok
    } else if (cursorOffset === index) {
      result = {
        type: 'LEFT',
        info: leftSymbol.length
      };
    } else if (cursorOffset === lastIndex) {
      result = {
        type: 'RIGHT',
        info: rightSymbol.length
      };
    }
  });
  return result;
};

exports.getCursorPositionWithinMarkedText = getCursorPositionWithinMarkedText;

const compareParagraphsOrder = (paragraph1, paragraph2) => {
  return paragraph1.compareDocumentPosition(paragraph2) & Node.DOCUMENT_POSITION_FOLLOWING;
};

exports.compareParagraphsOrder = compareParagraphsOrder;