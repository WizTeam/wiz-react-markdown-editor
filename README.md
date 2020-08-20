# Wiz React Markdown Editor

### Config:

如果使用[Unsplash](https://unsplash.com/)图库,需要把 Unsplash 的 Access Key 设置进 UNSPLASH_ACCESS_KEY 环境变量中

### Usage:

```jsx
import 'wiz-react-markdown-editor/lib/index.min.css';
import Editor from 'wiz-react-markdown-editor';

<Editor />;
```

### Props:

|      属性      |                                类型                                 |           默认值            | 必填 |                                描述                                 |
| :------------: | :-----------------------------------------------------------------: | :-------------------------: | :--: | :-----------------------------------------------------------------: |
|     width      |                            string\number                            |           '100%'            |  ✗   |                       编辑器可编辑的最大宽度                        |
|     theme      | 'dark'\\'light'\\'material-dark'\\'ulysses'\\'graphite'\\'one-dark' | 跟随系统判断 ‘dark’/‘light’ |  ✗   |                             编辑器主题                              |
| onSelectImages |                       function: () => string                        |              -              |  ✗   |                     选择图片函数, 返回资源路径                      |
|    markdown    |                               string                                |             ''              |  ✗   |                      初始化时的 markdown 源码                       |
|     focus      |                               boolean                               |            false            |  ✗   |                         是否打开 focus 模式                         |
|   typewriter   |                               boolean                               |            false            |  ✗   |                      是否打开 typewriter 模式                       |
|    onChange    |  function ({ markdown, wordCount, cursor, history, toc }) => void   |              -              |  ✗   |                            内容改变事件                             |
|  resourceUrl   |                               string                                |              -              |  ✗   | 图片资源路,在添加路径为`index_files/`开头图片资源前面添加的资源路径 |

### Edit Grammar:

- 表情 => :<关键词>:
