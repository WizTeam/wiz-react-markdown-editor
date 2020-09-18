"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pedantic = exports.gfm = exports.normal = exports.block = void 0;

var _utils = require("./utils");

/* eslint-disable no-useless-escape */

/**
 * Block-Level Rules
 */
const block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' + // optional indentation
  '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' + // (1)
  '|comment[^\\n]*(\\n+|$)' + // (2)
  '|<\\?[\\s\\S]*?\\?>\\n*' + // (3)
  '|<![A-Z][\\s\\S]*?>\\n*' + // (4)
  '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' + // (5)
  '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' + // (6)
  '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' + // (7) open tag
  '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' + // (7) closing tag
  ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: _utils.noop,
  table: _utils.noop,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/,
  // extra
  frontmatter: /^(?:(?:---\n([\s\S]+?)---)|(?:\+\+\+\n([\s\S]+?)\+\+\+)|(?:;;;\n([\s\S]+?);;;)|(?:\{\n([\s\S]+?)\}))(?:\n{2,}|\n{1,2}$)/,
  multiplemath: /^\$\$([\s\S]+?)\$\$(?:\n+|$)/,
  footnote: /^\[\^([^\^\[\]\s]+?)\]:[\s\S]+?(?=\n *\n {0,3}[^ ]+|$)/
};
exports.block = block;
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = (0, _utils.edit)(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.checkbox = /^\[([ xX])\] +/;
block.bullet = /(?:[*+-]|\d{1,9}(?:\.|\)))/; // patched: support "(" as ordered list delimiter too
// patched: fix https://github.com/marktext/marktext/issues/831#issuecomment-477719256
// block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/

block.item = /^(( {0,3})(bull) [^\n]*(?:\n(?!(\2bull |\2bull\n))[^\n]*)*|( {0,3})(bull)(?:\n(?!(\2bull |\2bull\n)))*)/;
block.item = (0, _utils.edit)(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
block.list = (0, _utils.edit)(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = (0, _utils.edit)(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = (0, _utils.edit)(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} +').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = (0, _utils.edit)(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

const normal = Object.assign({}, block);
/**
 * GFM Block Grammar
 */

exports.normal = normal;
const gfm = Object.assign({}, normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

exports.gfm = gfm;
const pedantic = Object.assign({}, normal, {
  html: (0, _utils.edit)('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' + // closed tag
  '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: _utils.noop,
  // fences not supported
  paragraph: (0, _utils.edit)(normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/* eslint-ensable no-useless-escape */

exports.pedantic = pedantic;