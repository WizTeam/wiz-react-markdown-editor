import React, {useRef, useEffect} from 'react';
import Muya from './muya/lib'

function Editor(props) {

  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      new Muya(editorRef.current, {});
    }
  });

  return (<div ref={editorRef} style={{width: '100%', height: '100vh'}}></div>)
}

export default Editor;