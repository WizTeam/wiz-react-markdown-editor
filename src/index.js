import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Muya from './muya/lib';
import TablePicker from './muya/lib/ui/tablePicker';
import isOsx from './muya/lib/config';
import './muya/themes/default.css';

const useStyles = makeStyles({
  editorWrapper: {
    height: '100%',
    position: 'relative',
    flex: 1
    // color: var(--editorColor),
    // & .ag-dialog-table {
    //   & .el-button {
    //     font-size: 13px;
    //     width: 70px;
    //   }
    // }
  },
  editorComponent: {
    height: '100%',
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  source: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    overflow: 'hidden'
  }
});

function Editor() {
  const classes = useStyles();
  //
  const [typewriter] = useState(false);
  const [focus] = useState(false);
  const [sourceCode] = useState(false);
  //
  const editorRef = useRef();
  const editor = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // use muya UI plugins
      Muya.use(TablePicker);
      //
      const options = {
        autoCheck: true
      };
      //
      editor.current = new Muya(editorRef.current, options);
      //
      editor.current.on('change', () => {
        // if (typeof props.onChange === 'function') {
        //   props.onChange(changes, { id: 'muya' });
        // }
      });
      //
      editor.current.on('format-click', ({ event, formatType }) => {
        const ctrlOrMeta = (isOsx && event.metaKey) || (!isOsx && event.ctrlKey);
        if (formatType === 'link' && ctrlOrMeta) {
          // this.$store.dispatch('FORMAT_LINK_CLICK', { data, dirname: window.DIRNAME })
        } else if (formatType === 'image' && ctrlOrMeta) {
          // if (this.imageViewer) {
          //   this.imageViewer.destroy()
          // }
          // this.setImageViewerVisible(true)
        }
      });
      editor.current.on('selectionChange', () => {
        console.log('editor selectionChange');
      });
      editor.current.on('selectionFormats', () => {
        console.log('editor selectionFormats');
      });
      editor.current.on('contextmenu', () => {
        console.log('editor contextmenu');
      });
    }
  });

  return (
    <div
      className={classNames(
        classes.editorWrapper,
        typewriter && classes.typewriter,
        focus && classes.focus,
        sourceCode && classes.source
      )}
    >
      <div ref={editorRef} className={classes.editorComponent} />
    </div>
  );
}

export default Editor;
