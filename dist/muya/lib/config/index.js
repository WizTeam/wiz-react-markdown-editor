"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSearchOption = exports.DATA_URL_REG = exports.URL_REG = exports.isWin = exports.isOsx = exports.MUYA_DEFAULT_OPTION = exports.EXPORT_DOMPURIFY_CONFIG = exports.PREVIEW_DOMPURIFY_CONFIG = exports.LINE_BREAK = exports.FORMAT_TYPES = exports.FORMAT_MARKER_MAP = exports.DEFAULT_TURNDOWN_CONFIG = exports.CURSOR_FOCUS_DNA = exports.CURSOR_ANCHOR_DNA = exports.DAED_REMOVE_SELECTOR = exports.CLASS_OR_ID = exports.LOWERCASE_TAGS = exports.EVENT_KEYS = exports.emptyElementNames = exports.blockContainerElementNames = exports.PARAGRAPH_TYPES = exports.IMAGE_EXT_REG = exports.BLOCK_TYPE7 = exports.BLOCK_TYPE6 = exports.BLOCK_TYPE2_REG = exports.BLOCK_TYPE1 = exports.HTML_TAGS = exports.VOID_HTML_TAGS = exports.HAS_TEXT_BLOCK_REG = exports.UNDO_DEPTH = exports.DEVICE_MEMORY = void 0;

var _utils = require("../utils");

var _htmlTags = _interopRequireDefault(require("html-tags"));

var _void = _interopRequireDefault(require("html-tags/void"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// [0.25, 0.5, 1, 2, 4, 8] <—?—> [256M, 500M/768M, 1G/1000M, 2G, 4G, 8G]
// Electron 2.0.2 not support yet! So give a default value 4
const DEVICE_MEMORY = navigator.deviceMemory || 4; // Get the divice memory number(Chrome >= 63)

exports.DEVICE_MEMORY = DEVICE_MEMORY;
const UNDO_DEPTH = DEVICE_MEMORY >= 4 ? 100 : 50;
exports.UNDO_DEPTH = UNDO_DEPTH;
const HAS_TEXT_BLOCK_REG = /^span$/i;
exports.HAS_TEXT_BLOCK_REG = HAS_TEXT_BLOCK_REG;
const VOID_HTML_TAGS = _void.default;
exports.VOID_HTML_TAGS = VOID_HTML_TAGS;
const HTML_TAGS = _htmlTags.default; // TYPE1 ~ TYPE7 according to https://github.github.com/gfm/#html-blocks

exports.HTML_TAGS = HTML_TAGS;
const BLOCK_TYPE1 = ['script', 'pre', 'style'];
exports.BLOCK_TYPE1 = BLOCK_TYPE1;
const BLOCK_TYPE2_REG = /^<!--(?=\s).*\s+-->$/;
exports.BLOCK_TYPE2_REG = BLOCK_TYPE2_REG;
const BLOCK_TYPE6 = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'meta', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
exports.BLOCK_TYPE6 = BLOCK_TYPE6;

const BLOCK_TYPE7 = _htmlTags.default.filter(tag => {
  return !BLOCK_TYPE1.find(t => t === tag) && !BLOCK_TYPE6.find(t => t === tag);
});

exports.BLOCK_TYPE7 = BLOCK_TYPE7;
const IMAGE_EXT_REG = /\.(?:jpeg|jpg|png|gif|svg|webp)(?=\?|$)/i;
exports.IMAGE_EXT_REG = IMAGE_EXT_REG;
const PARAGRAPH_TYPES = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'li', 'figure'];
exports.PARAGRAPH_TYPES = PARAGRAPH_TYPES;
const blockContainerElementNames = [// elements our editor generates
...PARAGRAPH_TYPES, // all other known block elements
'address', 'article', 'aside', 'audio', 'canvas', 'dd', 'dl', 'dt', 'fieldset', 'figcaption', 'footer', 'form', 'header', 'hgroup', 'main', 'nav', 'noscript', 'output', 'section', 'video', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'];
exports.blockContainerElementNames = blockContainerElementNames;
const emptyElementNames = ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'];
exports.emptyElementNames = emptyElementNames;
const EVENT_KEYS = (0, _utils.generateKeyHash)(['Enter', 'Backspace', 'Space', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Escape']);
exports.EVENT_KEYS = EVENT_KEYS;
const LOWERCASE_TAGS = (0, _utils.generateKeyHash)([...blockContainerElementNames, ...emptyElementNames, 'div']);
exports.LOWERCASE_TAGS = LOWERCASE_TAGS;
const CLASS_OR_ID = (0, _utils.genUpper2LowerKeyHash)(['AG_ACTIVE', 'AG_AUTO_LINK', 'AG_AUTO_LINK_EXTENSION', 'AG_BACKLASH', 'AG_BUG', 'AG_BULLET_LIST', 'AG_BULLET_LIST_ITEM', 'AG_CHECKBOX_CHECKED', 'AG_CONTAINER_BLOCK', 'AG_CONTAINER_PREVIEW', 'AG_CONTAINER_ICON', 'AG_COPY_REMOVE', 'AG_EDITOR_ID', 'AG_EMOJI_MARKED_TEXT', 'AG_EMOJI_MARKER', 'AG_EMPTY', 'AG_FENCE_CODE', 'AG_FLOWCHART', 'AG_FOCUS_MODE', 'AG_FRONT_MATTER', 'AG_FRONT_ICON', 'AG_GRAY', 'AG_HARD_LINE_BREAK', 'AG_HARD_LINE_BREAK_SPACE', 'AG_LINE_END', 'AG_HEADER_TIGHT_SPACE', 'AG_HIDE', 'AG_HIGHLIGHT', 'AG_HTML_BLOCK', 'AG_HTML_ESCAPE', 'AG_HTML_PREVIEW', 'AG_HTML_TAG', 'AG_IMAGE_FAIL', 'AG_IMAGE_BUTTONS', 'AG_IMAGE_LOADING', 'AG_EMPTY_IMAGE', 'AG_IMAGE_MARKED_TEXT', 'AG_IMAGE_SRC', 'AG_IMAGE_CONTAINER', 'AG_INLINE_IMAGE', 'AG_IMAGE_SUCCESS', 'AG_IMAGE_UPLOADING', 'AG_INLINE_IMAGE_SELECTED', 'AG_INLINE_IMAGE_IS_EDIT', 'AG_INDENT_CODE', 'AG_INLINE_FOOTNOTE_IDENTIFIER', 'AG_INLINE_RULE', 'AG_LANGUAGE', 'AG_LANGUAGE_INPUT', 'AG_LINK', 'AG_LINK_IN_BRACKET', 'AG_LIST_ITEM', 'AG_LOOSE_LIST_ITEM', 'AG_MATH', 'AG_MATH_TEXT', 'AG_MATH_RENDER', 'AG_RUBY', 'AG_RUBY_TEXT', 'AG_RUBY_RENDER', 'AG_SELECTED', 'AG_SOFT_LINE_BREAK', 'AG_MATH_ERROR', 'AG_MATH_MARKER', 'AG_MATH_RENDER', 'AG_MATH_TEXT', 'AG_MERMAID', 'AG_MULTIPLE_MATH', 'AG_NOTEXT_LINK', 'AG_ORDER_LIST', 'AG_ORDER_LIST_ITEM', 'AG_OUTPUT_REMOVE', 'AG_PARAGRAPH', 'AG_RAW_HTML', 'AG_REFERENCE_LABEL', 'AG_REFERENCE_LINK', 'AG_REFERENCE_MARKER', 'AG_REFERENCE_TITLE', 'AG_REMOVE', 'AG_RUBY', 'AG_RUBY_RENDER', 'AG_RUBY_TEXT', 'AG_SELECTION', 'AG_SEQUENCE', 'AG_SHOW_PREVIEW', 'AG_SOFT_LINE_BREAK', 'AG_TASK_LIST', 'AG_TASK_LIST_ITEM', 'AG_TASK_LIST_ITEM_CHECKBOX', 'AG_TIGHT_LIST_ITEM', 'AG_TOOL_BAR', 'AG_VEGA_LITE', 'AG_WARN', 'AG_TAG']);
exports.CLASS_OR_ID = CLASS_OR_ID;
const DAED_REMOVE_SELECTOR = new Set(['.ag-image-marked-text::before', '.ag-image-marked-text.ag-image-fail::before', '.ag-hide', '.ag-gray', '.ag-warn']);
exports.DAED_REMOVE_SELECTOR = DAED_REMOVE_SELECTOR;
const CURSOR_ANCHOR_DNA = (0, _utils.getLongUniqueId)();
exports.CURSOR_ANCHOR_DNA = CURSOR_ANCHOR_DNA;
const CURSOR_FOCUS_DNA = (0, _utils.getLongUniqueId)();
exports.CURSOR_FOCUS_DNA = CURSOR_FOCUS_DNA;
const DEFAULT_TURNDOWN_CONFIG = {
  headingStyle: 'atx',
  // setext or atx
  hr: '---',
  bulletListMarker: '-',
  // -, +, or *
  codeBlockStyle: 'fenced',
  // fenced or indented
  fence: '```',
  // ``` or ~~~
  emDelimiter: '*',
  // _ or *
  strongDelimiter: '**',
  // ** or __
  linkStyle: 'inlined',
  linkReferenceStyle: 'full',

  blankReplacement(content, node, options) {
    if (node && node.classList.contains('ag-soft-line-break')) {
      return LINE_BREAK;
    } else if (node && node.classList.contains('ag-hard-line-break')) {
      return '  ' + LINE_BREAK;
    } else if (node && node.classList.contains('ag-hard-line-break-sapce')) {
      return '';
    } else {
      return node.isBlock ? '\n\n' : '';
    }
  }

};
exports.DEFAULT_TURNDOWN_CONFIG = DEFAULT_TURNDOWN_CONFIG;
const FORMAT_MARKER_MAP = {
  em: '*',
  inline_code: '`',
  strong: '**',
  del: '~~',
  inline_math: '$',
  u: {
    open: '<u>',
    close: '</u>'
  },
  sub: {
    open: '<sub>',
    close: '</sub>'
  },
  sup: {
    open: '<sup>',
    close: '</sup>'
  },
  mark: {
    open: '<mark>',
    close: '</mark>'
  }
};
exports.FORMAT_MARKER_MAP = FORMAT_MARKER_MAP;
const FORMAT_TYPES = ['strong', 'em', 'del', 'inline_code', 'link', 'image', 'inline_math'];
exports.FORMAT_TYPES = FORMAT_TYPES;
const LINE_BREAK = '\n';
exports.LINE_BREAK = LINE_BREAK;
const PREVIEW_DOMPURIFY_CONFIG = {
  // do not forbit `class` because `code` element use class to present language
  FORBID_ATTR: ['style', 'contenteditable'],
  ALLOW_DATA_ATTR: false,
  USE_PROFILES: {
    html: true,
    svg: true,
    svgFilters: true,
    mathMl: true
  }
};
exports.PREVIEW_DOMPURIFY_CONFIG = PREVIEW_DOMPURIFY_CONFIG;
const EXPORT_DOMPURIFY_CONFIG = {
  FORBID_ATTR: ['contenteditable'],
  ALLOW_DATA_ATTR: false,
  ADD_ATTR: ['data-align'],
  USE_PROFILES: {
    html: true,
    svg: true,
    svgFilters: true,
    mathMl: true
  }
};
exports.EXPORT_DOMPURIFY_CONFIG = EXPORT_DOMPURIFY_CONFIG;
const MUYA_DEFAULT_OPTION = {
  fontSize: 16,
  lineHeight: 1.6,
  focusMode: false,
  markdown: '',
  // Whether to trim the beginning and ending empty line in code block when open markdown.
  trimUnnecessaryCodeBlockEmptyLines: false,
  preferLooseListItem: true,
  autoPairBracket: true,
  autoPairMarkdownSyntax: true,
  autoPairQuote: true,
  bulletListMarker: '-',
  orderListDelimiter: '.',
  tabSize: 4,
  codeBlockLineNumbers: false,
  // bullet/list marker width + listIndentation, tab or Daring Fireball Markdown (4 spaces) --> list indentation
  listIndentation: 1,
  frontmatterType: '-',
  sequenceTheme: 'hand',
  // hand or simple
  mermaidTheme: 'default',
  // dark / forest / default
  vegaTheme: 'latimes',
  // excel / ggplot2 / quartz / vox / fivethirtyeight / dark / latimes
  hideQuickInsertHint: false,
  hideLinkPopup: false,
  autoCheck: false,
  // Whether we should set spellcheck attribute on our container to highlight misspelled words.
  // NOTE: The browser is not able to correct misspelled words words without a custom
  // implementation like in Mark Text.
  spellcheckEnabled: false,
  // transform the image to local folder, cloud or just return the local path
  imageAction: path => path,
  // Call Electron open dialog or input element type is file.
  imagePathPicker: null,
  clipboardFilePath: () => {},
  // image path auto completed when you input in image selector.
  imagePathAutoComplete: () => [],
  // Markdown extensions
  superSubScript: false,
  footnote: false
}; // export const DIAGRAM_TEMPLATE = {
//   'mermaid': `graph LR;\nYou-->|Mark Text|Me;`
// }

exports.MUYA_DEFAULT_OPTION = MUYA_DEFAULT_OPTION;
const isOsx = window && window.navigator && /Mac/.test(window.navigator.platform);
exports.isOsx = isOsx;
const isWin = window && window.navigator.userAgent && /win32|wow32|win64|wow64/i.test(window.navigator.userAgent); // http[s] (domain or IPv4 or localhost or IPv6) [port] /not-white-space

exports.isWin = isWin;
const URL_REG = /^http(s)?:\/\/([a-z0-9\-._~]+\.[a-z]{2,}|[0-9.]+|localhost|\[[a-f0-9.:]+\])(:[0-9]{1,5})?\/[\S]+/i; // data:[<MIME-type>][;charset=<encoding>][;base64],<data>

exports.URL_REG = URL_REG;
const DATA_URL_REG = /^data:image\/[\w+-]+(;[\w-]+=[\w-]+|;base64)*,[a-zA-Z0-9+/]+={0,2}$/; // The smallest transparent gif base64 image.
// export const SMALLEST_BASE64 = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
// export const isIOS = /(?:iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)

exports.DATA_URL_REG = DATA_URL_REG;
const defaultSearchOption = {
  isCaseSensitive: false,
  isWholeWord: false,
  isRegexp: false,
  selectHighlight: false,
  highlightIndex: -1
};
exports.defaultSearchOption = defaultSearchOption;