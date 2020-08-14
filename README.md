# Wiz React Markdown Editor

### Usage:

```jsx
import Editor from 'wiz_react_markdown_editor';

<Editor />;
```

### Props:

|      属性      |                              类型                              | 默认值  | 必填 |            描述            |
| :------------: | :------------------------------------------------------------: | :-----: | :--: | :------------------------: |
|     width      |                         string\number                          | '100%'  |  ✗   |   编辑器可编辑的最大宽度   |
|     theme      | 'dark'\'light'\'material-dark'\'ulysses'\'graphite'\'one-dark' | 'light' |  ✗   |         编辑器主题         |
| onSelectImages |                     function: () => string                     |    -    |  ✗   | 选择图片函数, 返回资源路径 |
