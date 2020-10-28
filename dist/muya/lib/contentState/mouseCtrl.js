"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selection = _interopRequireDefault(require("../selection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mouseCtrl = ContentState => {
  ContentState.prototype.mouseLeaveHandler = function () {
    const {
      start
    } = _selection.default.getCursorRange();

    const lastBlock = this.getLastBlock();
    const {
      key,
      text
    } = lastBlock;
    this.cursor = {
      start,
      end: {
        key,
        offset: text.length
      }
    };
  };
};

var _default = mouseCtrl;
exports.default = _default;