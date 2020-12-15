import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
// import 'wiz-react-markdown-editor/index.min.css';
// eslint-disable-next-line import/no-unresolved
// import Editor from 'wiz-react-markdown-editor';
import { useEditor, MarkdownEditor } from '../src/index';

function chooseImage() {
  return new Promise((res, rej) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.addEventListener('change', () => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        inputElement.remove();
        res(evt.target.result);
      };
      reader.onerror = (err) => {
        inputElement.remove();
        rej(err);
      };
      reader.readAsDataURL(inputElement.files[0]);
    });
    inputElement.dispatchEvent(
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      })
    );
  });
}

const noteLinks = [
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink1'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink4'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink5'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink6'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink7'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink8'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink9'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink10'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink11'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink12'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink13'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink14'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink15'
  },
  {
    title: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
    id: 'testLink16'
  },
  {
    title: 'test2',
    id: 'testLink2'
  },
  {
    title: 'test3',
    id: 'testLink3'
  }
];

const App = () => {
  const [theme, setTheme] = React.useState('default');
  const [focusMode, setFocusMode] = React.useState(false);
  const [typewriterMode, setTypewriterMode] = React.useState(false);
  const [data] = React.useState(null);
  const [readOnly, setReadOnly] = React.useState(false);
  const [wordList, setWordList] = React.useState([]);
  const [markdown, setMarkdown] = React.useState('');
  const [lang, setLang] = React.useState('zh-cn');
  const editorFocus = React.useRef(null);
  const stopClickRef = React.useRef(false);
  const editorRef = React.useRef(null);

  const { isCursorInTable } = useEditor(editorRef);

  React.useEffect(() => {
    // window.loadMarkdown = ({ markdown, resourceUrl, contentId }) => {
    //   setData({
    //     markdown,
    //     resourceUrl,
    //     contentId
    //   });
    // };
    window.setMarkdown = setMarkdown;
    window.setWordList = setWordList;
    window.saveCursor = () => editorRef.current.saveCursor();
    window.resetCursor = () => editorRef.current.resetCursor();
    window.htmlToMarkdown = (...param) => editorRef.current.htmlToMarkdown(...param);
    document.addEventListener(
      'click',
      (e) => {
        if (stopClickRef.current) {
          stopClickRef.current = false;
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );
    editorRef.current.on('muya-note-link', (param) => {
      console.log('note link: ', param);
    });
    editorRef.current.on('muya-note-link-change', ({ content, render: renderFn }) => {
      console.log('content', content);
      renderFn(noteLinks);
    });
  }, []);

  function handleInsert(type, e) {
    switch (type) {
      case 'tag':
        editorRef.current.insertTag();
        break;
      case 'bold':
        editorRef.current.insertBold();
        break;
      case 'italic':
        editorRef.current.insertItalic();
        break;
      case 'deletedLine':
        editorRef.current.insertDeletedLine();
        break;
      case 'orderList':
        editorRef.current.insertOrderList();
        break;
      case 'bulletList':
        editorRef.current.insertBulletList();
        break;
      case 'link':
        editorRef.current.insertLink();
        break;
      case 'checkedBox':
        editorRef.current.insertToDoList();
        break;
      case 'table':
        stopClickRef.current = true;
        editorRef.current.insertTable({ rows: 5, columns: 5 });
        break;
      case 'image':
        stopClickRef.current = true;
        editorRef.current.insertImage({
          src:
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2278525f1db4bebb3da97aa3c9cbe26~tplv-k3u1fbpfcp-zoom-1.image'
        });
        break;
      case 'dividingLine':
        editorRef.current.insertHorizontalLine();
        break;
      case 'code':
        editorRef.current.insertInlineCode();
        break;
      case 'codeBlock':
        editorRef.current.insertCodeBlock();
        break;
      case 'quote':
        editorRef.current.insertQuote();
        break;
      case 'formula':
        editorRef.current.insertMathFormula();
        break;
      case 'alignLeft':
        editorRef.current.tableColAlignLeft();
        break;
      case 'alignCenter':
        editorRef.current.tableColAlignCenter();
        break;
      case 'alignRight':
        editorRef.current.tableColAlignRight();
        break;
      case 'insertRowBefore':
        editorRef.current.insertRowAbove();
        break;
      case 'insertRowAfter':
        editorRef.current.insertRowBelow();
        break;
      case 'insertColBefore':
        editorRef.current.insertColLeft();
        break;
      case 'insertColAfter':
        editorRef.current.insertColRight();
        break;
      case 'deleteRow':
        editorRef.current.removeTableCol();
        break;
      case 'deleteCol':
        editorRef.current.removeTableRow();
        break;
      case 'deleteTable':
        editorRef.current.removeTable();
        break;
      case 'saveCursor':
        editorRef.current.saveCursor();
        break;
      case 'resetCursor':
        editorRef.current.resetCursor();
        break;
      case 'indent':
        editorRef.current.indent();
        break;
      case 'unindent':
        editorRef.current.unindent();
        break;
      case 'header':
        editorRef.current.insertHeader();
        break;
      case 'undo':
        editorRef.current.undo();
        break;
      case 'redo':
        editorRef.current.redo();
        break;
      default:
        break;
    }
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <span>{`theme:${theme}|`}</span>
        <span>{`focus:${focusMode}|`}</span>
        <span>{`typewriter:${typewriterMode}|`}</span>
        <span>{`readOnly:${readOnly}`}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setTheme('light');
          }}
          type="button"
        >
          light
        </button>
        <button
          onClick={() => {
            setTheme('dark');
          }}
          type="button"
        >
          dark
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setFocusMode(!focusMode);
          }}
          type="button"
        >
          focus toggle
        </button>
        <button
          onClick={() => {
            setTypewriterMode(!typewriterMode);
          }}
          type="button"
        >
          typewriter toggle
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setReadOnly(!readOnly)}>
          readOnly
        </button>
        <button type="button" onClick={() => editorRef.current.focus()}>
          editor focus
        </button>
        <button type="button" onClick={() => editorRef.current.selectFirstTitle()}>
          select title
        </button>
        <button type="button" onClick={() => setLang('en')}>
          en
        </button>
        <button type="button" onClick={() => setLang('zh-cn')}>
          zh-cn
        </button>
        <button type="button" onClick={() => setLang('zh-tw')}>
          zh-tw
        </button>
      </div>
      <div>
        <button type="button" onMouseDown={(e) => handleInsert('header', e)}>
          header
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('tag', e)}>
          tag
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('bold', e)}>
          bold
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('italic', e)}>
          italic
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('deletedLine', e)}>
          deletedLine
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('orderList', e)}>
          orderList
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('bulletList', e)}>
          bulletList
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('link', e)}>
          link
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('checkedBox', e)}>
          checkedBox
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('indent', e)}>
          indent
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('unindent', e)}>
          unindent
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('undo', e)}>
          undo
        </button>
        <button type="button" onMouseDown={(e) => handleInsert('redo', e)}>
          redo
        </button>
        {isCursorInTable ? (
          <>
            <button type="button" onMouseDown={(e) => handleInsert('alignLeft', e)}>
              align left
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('alignCenter', e)}>
              align center
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('alignRight', e)}>
              align right
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('insertRowBefore', e)}>
              insertRowBefore
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('insertRowAfter', e)}>
              insertRowAfter
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('insertColBefore', e)}>
              insertColBefore
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('insertColAfter', e)}>
              insertColAfter
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('deleteRow', e)}>
              deleteRow
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('deleteCol', e)}>
              deleteCol
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('deleteTable', e)}>
              deleteTable
            </button>
          </>
        ) : (
          <>
            <button type="button" onMouseDown={(e) => handleInsert('table', e)}>
              table
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('image', e)}>
              image
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('dividingLine', e)}>
              dividingLine
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('code', e)}>
              code
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('codeBlock', e)}>
              codeBlock
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('quote', e)}>
              quote
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('formula', e)}>
              formula
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('saveCursor', e)}>
              saveCursor
            </button>
            <button type="button" onMouseDown={(e) => handleInsert('resetCursor', e)}>
              resetCursor
            </button>
          </>
        )}
      </div>
      <div style={{ minHeight: '110vh' }}>
        <MarkdownEditor
          noteLinks={noteLinks}
          theme={data?.theme || theme}
          focusMode={focusMode}
          typewriterMode={typewriterMode}
          onSelectImages={chooseImage}
          markdown={markdown}
          resourceUrl={data?.resourceUrl}
          readOnly={readOnly}
          contentId={data?.contentId}
          onSave={({ contentId }) => {
            console.log(`save data: ${contentId}`);
          }}
          wordList={wordList}
          editorFocus={(fn) => {
            if (fn) {
              editorFocus.current = fn;
            }
          }}
          ref={editorRef}
          lang={lang}
        />
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
