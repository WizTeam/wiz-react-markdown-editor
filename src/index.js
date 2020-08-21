import React, { useRef, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMuya } from './hooks/editor';
// import isOsx from './muya/lib/config';
import { setEditorWidth, addThemeStyle } from './theme';
import { animatedScrollTo, formatUrl, isDarkMode } from './utils/utils';
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
  },
  typewriter: {
    '& $editorComponent': {
      paddingTop: 'calc(50vh - 136px)',
      paddingBottom: 'calc(50vh - 54px)'
    }
  }
});

const STANDAR_Y = 320;

function Editor(props) {
  const classes = useStyles();
  //
  const {
    typewriter,
    focus,
    sourceCode,
    theme,
    onSelectImages,
    markdown,
    width,
    resourceUrl
  } = props;
  //
  const editorRef = useRef();

  const MuyaOptions = useMemo(
    () => ({
      focusMode: focus,
      theme,
      imagePathPicker: onSelectImages,
      markdown,
      transformImageUrl: (src) => {
        return resourceUrl && src.startsWith('index_files/') ? formatUrl(resourceUrl) + src : src;
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focus, onSelectImages, theme, resourceUrl]
  );

  const editor = useMuya(editorRef, MuyaOptions);

  useEffect(() => {
    function scrollToCursor(duration = 300) {
      if (!editor) return;
      setTimeout(() => {
        const { container } = editor;
        const { y } = editor.getSelection().cursorCoords;
        animatedScrollTo(container, container.scrollTop + y - STANDAR_Y, duration);
      }, 0);
    }
    if (typewriter) {
      scrollToCursor();
    }
  }, [editor, typewriter]);

  useEffect(() => {
    editor?.setMarkdown(markdown, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdown]);

  useEffect(() => {
    editor?.setFocusMode(focus);
  }, [editor, focus]);

  // 先添加theme的<style>标签，防止切换主题时覆盖属性
  useEffect(() => {
    addThemeStyle(theme);
  }, [theme]);

  // 后生成的属性，具有更高的优先级
  useEffect(() => {
    setEditorWidth(width);
  }, [width]);

  useEffect(() => {
    editor?.setOptions(MuyaOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MuyaOptions]);

  useEffect(() => {
    function handleSelectionChange(changes) {
      const { y } = changes.cursorCoords;
      const container = editor.container;
      //
      if (typewriter) {
        animatedScrollTo(container, container.scrollTop + y - STANDAR_Y, 100);
      }

      // 快到底部时，向下滚动
      if (container.clientHeight - y < 100) {
        const editableHeight = container.clientHeight - 100;
        animatedScrollTo(container, container.scrollTop + (y - editableHeight), 0);
      }
    }

    if (editor) {
      editor.on('change', props.onChange);
      editor.on('selectionChange', handleSelectionChange);
    }
    return () => {
      if (editor) {
        editor.off('change', props.onChange);
        editor.off('selectionChange', handleSelectionChange);
      }
    };
  }, [editor, props.onChange, typewriter]);

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
  markdown: PropTypes.string,
  resourceUrl: PropTypes.string
};

Editor.defaultProps = {
  width: '100%',
  theme: isDarkMode() ? 'dark' : 'light',
  onSelectImages: null,
  onChange: null,
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: '',
  resourceUrl: ''
};

export default Editor;
