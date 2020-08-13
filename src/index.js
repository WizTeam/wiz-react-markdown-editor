import React, { useRef, useEffect } from 'react';
import Muya from './muya/lib';
import './muya/themes/default.css';
// import '@/assets/themes/codemirror/one-dark.css'
// import TablePicker from './muya/lib/ui/tablePicker'

function Editor() {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      const muya = new Muya(editorRef.current, {
        hideQuickInsertHint: true
      });
      // Muya.use(QuickInsert)
      // Muya.use(CodePicker)
      // Muya.use(EmojiPicker)
      // Muya.use(ImagePathPicker)
      // Muya.use(ImageSelector, {
      //   unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
      //   photoCreatorClick: this.photoCreatorClick
      // })
      // Muya.use(Transformer)
      // Muya.use(ImageToolbar)
      // Muya.use(FormatPicker)
      // Muya.use(FrontMenu)
      // Muya.use(LinkTools, {
      //   jumpClick: this.jumpClick
      // })
      // Muya.use(FootnoteTool)
      // Muya.use(TableBarTools)
    }
  });

  return <div ref={editorRef} style={{ width: '100%', height: '800px' }} />;
}

export default Editor;
