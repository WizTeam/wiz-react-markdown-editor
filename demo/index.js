import React from 'react';
import { render } from 'react-dom';
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

  return (
    <div>
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
      <Editor
        theme={theme}
        onSelectImages={chooseImage}
        onChange={(content) => {
          console.log(content);
        }}
      />
    </div>
  );
};
render(<App />, document.getElementById('root'));
