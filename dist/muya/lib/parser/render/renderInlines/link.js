"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = link;

var _config = require("../../../config");

var _utils = require("../../../utils");

// 'link': /^(\[)((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*?)(\\*)\]\((.*?)(\\*)\)/, // can nest
function link(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const linkClassName = className === _config.CLASS_OR_ID.AG_HIDE ? className : _config.CLASS_OR_ID.AG_LINK_IN_BRACKET;
  const {
    start,
    end
  } = token.range;
  const firstMiddleBracket = this.highlight(h, block, start, start + 3, token);
  const firstBracket = this.highlight(h, block, start, start + 1, token);
  const middleBracket = this.highlight(h, block, start + 1 + token.anchor.length + token.backlash.first.length, start + 1 + token.anchor.length + token.backlash.first.length + 2, token);
  const hrefContent = this.highlight(h, block, start + 1 + token.anchor.length + token.backlash.first.length + 2, start + 1 + token.anchor.length + token.backlash.first.length + 2 + token.hrefAndTitle.length, token);
  const middleHref = this.highlight(h, block, start + 1 + token.anchor.length + token.backlash.first.length, block, start + 1 + token.anchor.length + token.backlash.first.length + 2 + token.hrefAndTitle.length, token);
  const lastBracket = this.highlight(h, block, end - 1, end, token);
  const firstBacklashStart = start + 1 + token.anchor.length;
  const secondBacklashStart = end - 1 - token.backlash.second.length;

  if ((0, _utils.isLengthEven)(token.backlash.first) && (0, _utils.isLengthEven)(token.backlash.second)) {
    if (!token.children.length && !token.backlash.first) {
      // no-text-link
      return [h("span.".concat(_config.CLASS_OR_ID.AG_GRAY, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), firstMiddleBracket), h("a.".concat(_config.CLASS_OR_ID.AG_NOTEXT_LINK, ".").concat(_config.CLASS_OR_ID.AG_INLINE_RULE), {
        props: {
          href: token.href + encodeURI(token.backlash.second),
          target: '_blank',
          title: token.title
        }
      }, [...hrefContent, ...this.backlashInToken(h, token.backlash.second, className, secondBacklashStart, token)]), h("span.".concat(_config.CLASS_OR_ID.AG_GRAY, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), lastBracket)];
    } else {
      // has children
      return [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), firstBracket), h("a.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE), {
        props: {
          href: token.href + encodeURI(token.backlash.second),
          target: '_blank',
          title: token.title
        },
        dataset: {
          start,
          end,
          raw: token.raw
        }
      }, [...token.children.reduce((acc, to) => {
        const chunk = this[(0, _utils.snakeToCamel)(to.type)](h, cursor, block, to, className);
        return Array.isArray(chunk) ? [...acc, ...chunk] : [...acc, chunk];
      }, []), ...this.backlashInToken(h, token.backlash.first, className, firstBacklashStart, token)]), h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), middleBracket), h("span.".concat(linkClassName, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), {
        attrs: {
          spellcheck: 'false'
        }
      }, [...hrefContent, ...this.backlashInToken(h, token.backlash.second, className, secondBacklashStart, token)]), h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_REMOVE), lastBracket)];
    }
  } else {
    return [...firstBracket, ...token.children.reduce((acc, to) => {
      const chunk = this[(0, _utils.snakeToCamel)(to.type)](h, cursor, block, to, className);
      return Array.isArray(chunk) ? [...acc, ...chunk] : [...acc, chunk];
    }, []), ...this.backlashInToken(h, token.backlash.first, className, firstBacklashStart, token), ...middleHref, ...this.backlashInToken(h, token.backlash.second, className, secondBacklashStart, token), ...lastBracket];
  }
}