"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinkInfo = void 0;

var _dom = require("../selection/dom");

var _parser = require("../parser");

const getLinkInfo = a => {
  const paragraph = (0, _dom.findNearestParagraph)(a);
  const raw = a.getAttribute('data-raw');
  const start = a.getAttribute('data-start');
  const end = a.getAttribute('data-end');
  const tokens = (0, _parser.tokenizer)(raw);
  const token = tokens[0];
  const href = a.getAttribute('href');
  token.range = {
    start,
    end
  };
  return {
    key: paragraph.id,
    token,
    href
  };
};

exports.getLinkInfo = getLinkInfo;