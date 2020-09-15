'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getImageInfo = void 0;

var _dom = require('../selection/dom');

var _parser = require('../parser');

const getImageInfo = (image) => {
  const paragraph = (0, _dom.findNearestParagraph)(image);
  const raw = image.getAttribute('data-raw');
  const offset = (0, _dom.getOffsetOfParagraph)(image, paragraph);
  const tokens = (0, _parser.tokenizer)(raw);
  const token = tokens[0];
  token.range = {
    start: offset,
    end: offset + raw.length
  };
  return {
    key: paragraph.id,
    token,
    imageId: image.id
  };
};

exports.getImageInfo = getImageInfo;
