import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
// import 'wiz-react-markdown-editor/index.min.css';
// eslint-disable-next-line import/no-unresolved
// import Editor from 'wiz-react-markdown-editor';
import Editor from '../src/index';

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
  const [theme, setTheme] = React.useState('light');
  const [focusMode, setFocusMode] = React.useState(false);
  const [typewriterMode, setTypewriterMode] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [readOnly, setReadOnly] = React.useState(false);

  React.useEffect(() => {
    window.loadMarkdown = ({ markdown, resourceUrl, contentId }) => {
      setData({
        markdown,
        resourceUrl,
        contentId
      });
    };
  }, []);

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
      </div>
      <div style={{ height: '100vh' }}>
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
        />
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
