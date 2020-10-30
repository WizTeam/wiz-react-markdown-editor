import paragraphIcon from '../../assets/pngicon/paragraph/2.png';
import htmlIcon from '../../assets/pngicon/html/2.png';
import hrIcon from '../../assets/pngicon/horizontal_line/2.png';
import frontMatterIcon from '../../assets/pngicon/front_matter/2.png';
import header1Icon from '../../assets/pngicon/heading_1/2.png';
import header2Icon from '../../assets/pngicon/heading_2/2.png';
import header3Icon from '../../assets/pngicon/heading_3/2.png';
import header4Icon from '../../assets/pngicon/heading_4/2.png';
import header5Icon from '../../assets/pngicon/heading_5/2.png';
import header6Icon from '../../assets/pngicon/heading_6/2.png';
import newTableIcon from '../../assets/pngicon/new_table/2.png';
import bulletListIcon from '../../assets/pngicon/bullet_list/2.png';
import codeIcon from '../../assets/pngicon/code/2.png';
import quoteIcon from '../../assets/pngicon/quote_block/2.png';
import todoListIcon from '../../assets/pngicon/todolist/2.png';
import mathblockIcon from '../../assets/pngicon/math/2.png';
import orderListIcon from '../../assets/pngicon/order_list/2.png';
import flowchartIcon from '../../assets/pngicon/flowchart/2.png';
import sequenceIcon from '../../assets/pngicon/sequence/2.png';
import mermaidIcon from '../../assets/pngicon/mermaid/2.png';
import vegaIcon from '../../assets/pngicon/chart/2.png';
import imageIcon from '../../assets/pngicon/format_image/2.png';
import linkIcon from '../../assets/pngicon/format_link/2.png';
import { isOsx } from '../../config';

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl';
const OPTION_KEY = isOsx ? '⌥' : 'Alt';
const SHIFT_KEY = isOsx ? '⇧' : 'Shift';

// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn

export const quickInsertObj = {
  'basic block': [
    {
      title: 'Paragraph',
      subTitle: 'ParagraphInfo',
      label: 'paragraph',
      shortCut: `${COMMAND_KEY}+0`,
      icon: paragraphIcon
    },
    {
      title: 'Horizontal Line',
      subTitle: 'HorizontalLineInfo',
      label: 'hr',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+-`,
      icon: hrIcon
    },
    // {
    //   title: 'Front Matter',
    //   subTitle: '--- Lorem Ipsum ---',
    //   label: 'front-matter',
    //   shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Y`,
    //   icon: frontMatterIcon
    // }
  ],
  header: [
    {
      title: 'Header 1',
      subTitle: 'Header1Info',
      label: 'heading 1',
      shortCut: `${COMMAND_KEY}+1`,
      icon: header1Icon
    },
    {
      title: 'Header 2',
      subTitle: 'Header2Info',
      label: 'heading 2',
      shortCut: `${COMMAND_KEY}+2`,
      icon: header2Icon
    },
    {
      title: 'Header 3',
      subTitle: 'Header3Info',
      label: 'heading 3',
      shortCut: `${COMMAND_KEY}+3`,
      icon: header3Icon
    },
    {
      title: 'Header 4',
      subTitle: 'Header4Info',
      label: 'heading 4',
      shortCut: `${COMMAND_KEY}+4`,
      icon: header4Icon
    },
    {
      title: 'Header 5',
      subTitle: 'Header5Info',
      label: 'heading 5',
      shortCut: `${COMMAND_KEY}+5`,
      icon: header5Icon
    },
    {
      title: 'Header 6',
      subTitle: 'Header6Info',
      label: 'heading 6',
      shortCut: `${COMMAND_KEY}+6`,
      icon: header6Icon
    }
  ],
  'advanced block': [
    {
      title: 'Table Block',
      subTitle: 'TableInfo',
      label: 'table',
      shortCut: `${SHIFT_KEY}+${COMMAND_KEY}+T`,
      icon: newTableIcon
    },
    {
      title: 'Display Math',
      subTitle: 'MathInfo',
      label: 'mathblock',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+M`,
      icon: mathblockIcon
    },
    {
      title: 'HTML Block',
      subTitle: 'HtmlInfo',
      label: 'html',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+J`,
      icon: htmlIcon
    },
    {
      title: 'Code Block',
      subTitle: 'CodeBlockInfo',
      label: 'pre',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+C`,
      icon: codeIcon
    },
    {
      title: 'Quote Block',
      subTitle: 'QuoteInfo',
      label: 'blockquote',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Q`,
      icon: quoteIcon
    }
  ],
  'advanced inline': [
    {
      title: 'Link',
      subTitle: 'LinkInfo',
      label: 'link',
      icon: linkIcon
    },
    {
      title: 'Image',
      subTitle: 'ImageInfo',
      label: 'image',
      icon: imageIcon
    }
  ],
  'list block': [
    {
      title: 'Order List',
      subTitle: 'OrderInfo',
      label: 'ol-order',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+O`,
      icon: orderListIcon
    },
    {
      title: 'Bullet List',
      subTitle: 'BulletInfo',
      label: 'ul-bullet',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+U`,
      icon: bulletListIcon
    },
    {
      title: 'To-do List',
      subTitle: 'ToDoInfo',
      label: 'ul-task',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+X`,
      icon: todoListIcon
    }
  ],
  diagram: [
    {
      title: 'Vega Chart',
      subTitle: 'VegaInfo',
      label: 'vega-lite',
      icon: vegaIcon
    },
    {
      title: 'Flow Chart',
      subTitle: 'FlowInfo',
      label: 'flowchart',
      icon: flowchartIcon
    },
    {
      title: 'Sequence Diagram',
      subTitle: 'SequenceInfo',
      label: 'sequence',
      icon: sequenceIcon
    },
    {
      title: 'Mermaid',
      subTitle: 'MermaidInfo',
      label: 'mermaid',
      icon: mermaidIcon
    }
  ]
};
