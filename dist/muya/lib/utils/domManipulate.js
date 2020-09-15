'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.insertAfter = exports.insertBefore = exports.operateClassName = void 0;

/**
 * [description `add` or `remove` className of element
 */
const operateClassName = (element, ctrl, className) => {
  element.classList[ctrl](className);
};

exports.operateClassName = operateClassName;

const insertBefore = (newNode, originNode) => {
  const parentNode = originNode.parentNode;
  parentNode.insertBefore(newNode, originNode);
}; // DOM operations

exports.insertBefore = insertBefore;

const insertAfter = (newNode, originNode) => {
  const parentNode = originNode.parentNode;

  if (originNode.nextSibling) {
    parentNode.insertBefore(newNode, originNode.nextSibling);
  } else {
    parentNode.appendChild(newNode);
  }
};

exports.insertAfter = insertAfter;
