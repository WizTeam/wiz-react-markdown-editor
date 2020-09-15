'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _config = require('../config');

var _rules = require('../parser/rules');

const HTML_BLOCK_REG = /^<([a-zA-Z\d-]+)(?=\s|>)[^<>]*?>$/;

const htmlBlock = (ContentState) => {
  ContentState.prototype.createHtmlBlock = function (code) {
    const block = this.createBlock('figure');
    block.functionType = 'html';
    const { preBlock, preview } = this.createPreAndPreview('html', code);
    this.appendChild(block, preBlock);
    this.appendChild(block, preview);
    return block;
  };

  ContentState.prototype.initHtmlBlock = function (block) {
    let htmlContent = '';
    const text = block.children[0].text;

    const matches = _rules.inlineRules.html_tag.exec(text);

    if (matches) {
      const tag = matches[3];
      const content = matches[4] || '';
      const openTag = matches[2];
      const closeTag = matches[5];
      const isVoidTag = _config.VOID_HTML_TAGS.indexOf(tag) > -1;

      if (closeTag) {
        htmlContent = text;
      } else if (isVoidTag) {
        htmlContent = text;

        if (content) {
          // TODO: @jocs notice user that the html is not valid.
          console.warn('Invalid html content.');
        }
      } else {
        htmlContent = ''.concat(openTag, '\n').concat(content, '\n</').concat(tag, '>');
      }
    } else {
      htmlContent = '<div>\n'.concat(text, '\n</div>');
    }

    block.type = 'figure';
    block.functionType = 'html';
    block.text = htmlContent;
    block.children = [];
    const { preBlock, preview } = this.createPreAndPreview('html', htmlContent);
    this.appendChild(block, preBlock);
    this.appendChild(block, preview);
    return preBlock; // preBlock
  };

  ContentState.prototype.updateHtmlBlock = function (block) {
    const { type } = block;
    if (type !== 'li' && type !== 'p') return false;
    const { text } = block.children[0];
    const match = HTML_BLOCK_REG.exec(text);

    const tagName = match && match[1] && _config.HTML_TAGS.find((t) => t === match[1]);

    return _config.VOID_HTML_TAGS.indexOf(tagName) === -1 && tagName
      ? this.initHtmlBlock(block)
      : false;
  };
};

var _default = htmlBlock;
exports.default = _default;
