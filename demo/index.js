import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
// import 'wiz-react-markdown-editor/index.min.css';
// eslint-disable-next-line import/no-unresolved
// import Editor from 'wiz-react-markdown-editor';
import Editor, { useEditor } from '../src/index';

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

const App = () => {
  const [theme, setTheme] = React.useState('default');
  const [focusMode, setFocusMode] = React.useState(false);
  const [typewriterMode, setTypewriterMode] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [readOnly, setReadOnly] = React.useState(false);
  const [wordList, setWordList] = React.useState([]);
  const editorFocus = React.useRef(null);
  const stopClickRef = React.useRef(false);
  const editorRef = React.useRef(null);

  const { isCursorInTable } = useEditor(editorRef);

  React.useEffect(() => {
    window.loadMarkdown = ({ markdown, resourceUrl, contentId }) => {
      setData({
        markdown,
        resourceUrl,
        contentId
      });
    };
    window.setWordList = setWordList;
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
        editorRef.current.insertTable();
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
        <button type="button" onClick={() => editorFocus.current()}>
          editor focus
        </button>
      </div>
      <div>
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
          </>
        )}
      </div>
      <div style={{ height: '70vh' }}>
        <Editor
          theme={data?.theme || theme}
          focus={focusMode}
          typewriter={typewriterMode}
          onSelectImages={chooseImage}
          markdown={data?.markdown}
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
        />
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
