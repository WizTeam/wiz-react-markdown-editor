'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.cumputeCheckboxStatus = void 0;

const cumputeCheckboxStatus = function (parentCheckbox) {
  const children = parentCheckbox.parentElement.lastElementChild.children;
  const len = children.length;

  for (let i = 0; i < len; i++) {
    const checkbox = children[i].firstElementChild;

    if (checkbox.checked === false) {
      return false;
    }
  }

  return true;
};

exports.cumputeCheckboxStatus = cumputeCheckboxStatus;
