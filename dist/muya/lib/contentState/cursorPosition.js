"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rememberCursorOffset = rememberCursorOffset;
exports.getRecommendedCursorOffset = getRecommendedCursorOffset;

var _selection = _interopRequireDefault(require("../selection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let currentOffset;

function rememberCursorOffset() {
  const {
    start,
    end
  } = _selection.default.getCursorRange();

  if (start.key === end.key && start.offset == end.offset) {
    currentOffset = start.offset;
  } else {
    currentOffset = undefined;
  }
}

function getRecommendedCursorOffset() {
  return currentOffset;
}