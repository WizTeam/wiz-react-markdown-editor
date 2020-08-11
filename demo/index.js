import React from 'react';
import { render } from 'react-dom';
import Editor from '../src/index';
const App = () => <Editor contentId="gg" />;
render(<App />, document.getElementById('root'));