# Wiz React Markdown Editor

### Config:

如果使用[Unsplash](https://unsplash.com/)图库,需要把 Unsplash 的 Access Key 设置进 UNSPLASH_ACCESS_KEY 环境变量中

### Usage:

```jsx
import 'wiz-react-markdown-editor/index.min.css';
import Editor from 'wiz-react-markdown-editor';

<Editor />;
```

### Props:

|      属性      |                              类型                              | 默认值  | 必填 |            描述            |
| :------------: | :------------------------------------------------------------: | :-----: | :--: | :------------------------: |
|     width      |                         string\number                          | '100%'  |  ✗   |   编辑器可编辑的最大宽度   |
|     theme      | 'dark'\'light'\'material-dark'\'ulysses'\'graphite'\'one-dark' | 'light' |  ✗   |         编辑器主题         |
| onSelectImages |                     function: () => string                     |    -    |  ✗   | 选择图片函数, 返回资源路径 |
|    markdown    |                             string                             |   ''    |  ✗   |       markdown 源码        |
|     focus      |                            boolean                             |  false  |  ✗   |    是否打开 focus 模式     |
|    onChange    |                 function (contentObj) => void                  |    -    |  ✗   |        内容改变事件        |

### Edit Grammar:

- 表情 => :<关键词>:
