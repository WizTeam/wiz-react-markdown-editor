import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import Editor from 'wiz_react_markdown_editor';

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

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div>
        <span>{`theme:${theme}|`}</span>
        <span>{`focus:${focusMode}|`}</span>
        <span>{`typewriter:${typewriterMode}`}</span>
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
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Editor
          focus={focusMode}
          typewriter={typewriterMode}
          theme={theme}
          onSelectImages={chooseImage}
          onChange={(content) => {
            console.log(content);
          }}
        />
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
