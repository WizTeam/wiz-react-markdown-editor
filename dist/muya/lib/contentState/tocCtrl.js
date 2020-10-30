"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const tocCtrl = ContentState => {
  ContentState.prototype.getTOC = function () {
    const {
      blocks
    } = this;
    const toc = [];

    for (const block of blocks) {
      if (/^h\d$/.test(block.type)) {
        const {
          headingStyle,
          key,
          type
        } = block;
        const {
          text
        } = block.children[0];
        const content = headingStyle === 'setext' ? text.trim() : text.replace(/^ *#{1,6} {1,}/, '').trim();
        const plainContent = text.replace(/^ *#{1,6} {1,}/, '').trim();
        const lvl = +type.substring(1);
        const slug = key;
        toc.push({
          content,
          lvl,
          slug,
          plainContent
        });
      }
    }

    return toc;
  };
};

var _default = tocCtrl;
exports.default = _default;