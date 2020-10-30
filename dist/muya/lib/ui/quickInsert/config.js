"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickInsertObj = void 0;

var _ = _interopRequireDefault(require("../../assets/pngicon/paragraph/2.png"));

var _2 = _interopRequireDefault(require("../../assets/pngicon/html/2.png"));

var _3 = _interopRequireDefault(require("../../assets/pngicon/horizontal_line/2.png"));

var _4 = _interopRequireDefault(require("../../assets/pngicon/front_matter/2.png"));

var _5 = _interopRequireDefault(require("../../assets/pngicon/heading_1/2.png"));

var _6 = _interopRequireDefault(require("../../assets/pngicon/heading_2/2.png"));

var _7 = _interopRequireDefault(require("../../assets/pngicon/heading_3/2.png"));

var _8 = _interopRequireDefault(require("../../assets/pngicon/heading_4/2.png"));

var _9 = _interopRequireDefault(require("../../assets/pngicon/heading_5/2.png"));

var _10 = _interopRequireDefault(require("../../assets/pngicon/heading_6/2.png"));

var _11 = _interopRequireDefault(require("../../assets/pngicon/new_table/2.png"));

var _12 = _interopRequireDefault(require("../../assets/pngicon/bullet_list/2.png"));

var _13 = _interopRequireDefault(require("../../assets/pngicon/code/2.png"));

var _14 = _interopRequireDefault(require("../../assets/pngicon/quote_block/2.png"));

var _15 = _interopRequireDefault(require("../../assets/pngicon/todolist/2.png"));

var _16 = _interopRequireDefault(require("../../assets/pngicon/math/2.png"));

var _17 = _interopRequireDefault(require("../../assets/pngicon/order_list/2.png"));

var _18 = _interopRequireDefault(require("../../assets/pngicon/flowchart/2.png"));

var _19 = _interopRequireDefault(require("../../assets/pngicon/sequence/2.png"));

var _20 = _interopRequireDefault(require("../../assets/pngicon/mermaid/2.png"));

var _21 = _interopRequireDefault(require("../../assets/pngicon/chart/2.png"));

var _22 = _interopRequireDefault(require("../../assets/pngicon/format_image/2.png"));

var _23 = _interopRequireDefault(require("../../assets/pngicon/format_link/2.png"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const COMMAND_KEY = _config.isOsx ? '⌘' : 'Ctrl';
const OPTION_KEY = _config.isOsx ? '⌥' : 'Alt';
const SHIFT_KEY = _config.isOsx ? '⇧' : 'Shift'; // Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn

const quickInsertObj = {
  'basic block': [{
    title: 'Paragraph',
    subTitle: 'ParagraphInfo',
    label: 'paragraph',
    shortCut: "".concat(COMMAND_KEY, "+0"),
    icon: _.default
  }, {
    title: 'Horizontal Line',
    subTitle: 'HorizontalLineInfo',
    label: 'hr',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+-"),
    icon: _3.default
  } // {
  //   title: 'Front Matter',
  //   subTitle: '--- Lorem Ipsum ---',
  //   label: 'front-matter',
  //   shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Y`,
  //   icon: frontMatterIcon
  // }
  ],
  header: [{
    title: 'Header 1',
    subTitle: 'Header1Info',
    label: 'heading 1',
    shortCut: "".concat(COMMAND_KEY, "+1"),
    icon: _5.default
  }, {
    title: 'Header 2',
    subTitle: 'Header2Info',
    label: 'heading 2',
    shortCut: "".concat(COMMAND_KEY, "+2"),
    icon: _6.default
  }, {
    title: 'Header 3',
    subTitle: 'Header3Info',
    label: 'heading 3',
    shortCut: "".concat(COMMAND_KEY, "+3"),
    icon: _7.default
  }, {
    title: 'Header 4',
    subTitle: 'Header4Info',
    label: 'heading 4',
    shortCut: "".concat(COMMAND_KEY, "+4"),
    icon: _8.default
  }, {
    title: 'Header 5',
    subTitle: 'Header5Info',
    label: 'heading 5',
    shortCut: "".concat(COMMAND_KEY, "+5"),
    icon: _9.default
  }, {
    title: 'Header 6',
    subTitle: 'Header6Info',
    label: 'heading 6',
    shortCut: "".concat(COMMAND_KEY, "+6"),
    icon: _10.default
  }],
  'advanced block': [{
    title: 'Table Block',
    subTitle: 'TableInfo',
    label: 'table',
    shortCut: "".concat(SHIFT_KEY, "+").concat(COMMAND_KEY, "+T"),
    icon: _11.default
  }, {
    title: 'Display Math',
    subTitle: 'MathInfo',
    label: 'mathblock',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+M"),
    icon: _16.default
  }, {
    title: 'HTML Block',
    subTitle: 'HtmlInfo',
    label: 'html',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+J"),
    icon: _2.default
  }, {
    title: 'Code Block',
    subTitle: 'CodeBlockInfo',
    label: 'pre',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+C"),
    icon: _13.default
  }, {
    title: 'Quote Block',
    subTitle: 'QuoteInfo',
    label: 'blockquote',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+Q"),
    icon: _14.default
  }],
  'advanced inline': [{
    title: 'Link',
    subTitle: 'LinkInfo',
    label: 'link',
    icon: _23.default
  }, {
    title: 'Image',
    subTitle: 'ImageInfo',
    label: 'image',
    icon: _22.default
  }],
  'list block': [{
    title: 'Order List',
    subTitle: 'OrderInfo',
    label: 'ol-order',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+O"),
    icon: _17.default
  }, {
    title: 'Bullet List',
    subTitle: 'BulletInfo',
    label: 'ul-bullet',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+U"),
    icon: _12.default
  }, {
    title: 'To-do List',
    subTitle: 'ToDoInfo',
    label: 'ul-task',
    shortCut: "".concat(OPTION_KEY, "+").concat(COMMAND_KEY, "+X"),
    icon: _15.default
  }],
  diagram: [{
    title: 'Vega Chart',
    subTitle: 'VegaInfo',
    label: 'vega-lite',
    icon: _21.default
  }, {
    title: 'Flow Chart',
    subTitle: 'FlowInfo',
    label: 'flowchart',
    icon: _18.default
  }, {
    title: 'Sequence Diagram',
    subTitle: 'SequenceInfo',
    label: 'sequence',
    icon: _19.default
  }, {
    title: 'Mermaid',
    subTitle: 'MermaidInfo',
    label: 'mermaid',
    icon: _20.default
  }]
};
exports.quickInsertObj = quickInsertObj;