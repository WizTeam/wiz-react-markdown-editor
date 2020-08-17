import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMuya } from './hooks/editor';
// import isOsx from './muya/lib/config';
import { setEditorWidth, addThemeStyle } from './theme';
import './style/index.css';
import './style/printService.css';
import './muya/themes/default.css';
// import './style/one-dark.css';

const useStyles = makeStyles({
  editorWrapper: {
    height: '100%',
    position: 'relative',
    flex: 1,
    backgroundColor: 'var(--editorBgColor)',
    color: 'var(--editorColor)'
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

function Editor(props) {
  const classes = useStyles();
  //
  const { typewriter, focus, sourceCode, theme, onSelectImages, markdown, width } = props;
  //
  const editorRef = useRef();

  const MuyaOptions = {
    focusMode: focus,
    theme,
    imagePathPicker: onSelectImages,
    markdown
  };

  const editor = useMuya(editorRef, MuyaOptions);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     // use muya UI plugins
  //     Muya.use(TablePicker);
  //     //
  //     const options = {
  //       autoCheck: true
  //     };
  //     //
  //     editor.current = new Muya(editorRef.current, options);
  //     //
  //     editor.current.on('change', () => {
  //       // if (typeof props.onChange === 'function') {
  //       //   props.onChange(changes, { id: 'muya' });
  //       // }
  //     });
  //     //
  //     editor.current.on('format-click', ({ event, formatType }) => {
  //       const ctrlOrMeta = (isOsx && event.metaKey) || (!isOsx && event.ctrlKey);
  //       if (formatType === 'link' && ctrlOrMeta) {
  //         // this.$store.dispatch('FORMAT_LINK_CLICK', { data, dirname: window.DIRNAME })
  //       } else if (formatType === 'image' && ctrlOrMeta) {
  //         // if (this.imageViewer) {
  //         //   this.imageViewer.destroy()
  //         // }
  //         // this.setImageViewerVisible(true)
  //       }
  //     });
  //     editor.current.on('selectionChange', () => {
  //       console.log('editor selectionChange');
  //     });
  //     editor.current.on('selectionFormats', () => {
  //       console.log('editor selectionFormats');
  //     });
  //     editor.current.on('contextmenu', () => {
  //       console.log('editor contextmenu');
  //     });
  //   }
  // });

  useEffect(() => {
    editor?.setFocusMode(focus);
  }, [focus]);

  // 先添加theme的<style>标签，防止切换主题时覆盖属性
  useEffect(() => {
    addThemeStyle(theme);
  }, [theme]);

  // 后生成的属性，具有更高的优先级
  useEffect(() => {
    setEditorWidth(width);
  }, [width]);

  useEffect(() => {
    editor?.setOptionsWithTheme(MuyaOptions);
  }, [MuyaOptions]);

  useEffect(() => {
    function handleChange(contentObj) {
      props?.onChange(contentObj);
    }

    if (editor) {
      editor.on('change', handleChange);
    }
    return () => {
      if (editor) {
        editor.off('change', handleChange);
      }
    };
  }, [editor]);

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

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['dark', 'light', 'material-dark', 'ulysses', 'graphite', 'one-dark']),
  onSelectImages: PropTypes.func,
  onChange: PropTypes.func,
  sourceCode: PropTypes.bool,
  typewriter: PropTypes.bool,
  focus: PropTypes.bool,
  markdown: PropTypes.string
};

Editor.defaultProps = {
  width: '100%',
  theme: 'light',
  onSelectImages: null,
  onChange: null,
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: ''
};

export default Editor;
