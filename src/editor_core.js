/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMuya } from './hooks/editor';
// import isOsx from './muya/lib/config';
import { setEditorWidth, addThemeStyle } from './theme';
import { animatedScrollTo, formatUrl, isDarkMode } from './utils/utils';
import { matchHotKey } from './utils/eventUtils';
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

let oldMd = '';

function Editor(props) {
  const classes = useStyles();

  //
  const {
    typewriter,
    focus,
    sourceCode,
    theme: initTheme,
    onSelectImages,
    markdown,
    width,
    resourceUrl,
    readOnly,
    wordList
  } = props;
  //
  const editorRef = useRef();

  const [theme, setTheme] = useState(isDarkMode() ? 'dark' : 'light');

  const transformImageUrl = useCallback(
    (src) => (resourceUrl && src.startsWith('index_files/') ? formatUrl(resourceUrl) + src : src),
    [resourceUrl]
  );

  useEffect(() => {
    if (initTheme === 'default') {
      setTheme(isDarkMode() ? 'dark' : 'light');
    } else {
      setTheme(initTheme);
    }
  }, [initTheme]);

  const MuyaOptions = useMemo(
    () => ({
      focusMode: focus,
      theme,
      imagePathPicker: onSelectImages,
      markdown,
      transformImageUrl
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
    editor?.setOptions(MuyaOptions, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MuyaOptions]);

  useEffect(() => {
    if (oldMd !== markdown) {
      editor?.setOptions({
        transformImageUrl
      });
      editor?.setMarkdown(markdown, 0);
      oldMd = markdown;
    } else {
      editor?.setOptions(
        {
          transformImageUrl
        },
        true
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transformImageUrl, markdown]);

  useEffect(() => {
    if (editor && editor.container) {
      editor.container.setAttribute('contenteditable', !readOnly);
    }
  }, [editor, readOnly]);

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
    function handleSystemThemeChange(e) {
      if (initTheme === 'default') {
        if (e.matches && theme !== 'dark') {
          setTheme('dark');
        } else if (!e.matches && theme !== 'light') {
          setTheme('light');
        }
      }
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleSystemThemeChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(handleSystemThemeChange);
    }
    if (editor) {
      editor.on('change', props.onChange);
      editor.on('selectionChange', handleSelectionChange);
    }
    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', handleSystemThemeChange);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(handleSystemThemeChange);
      }
      if (editor) {
        editor.off('change', props.onChange);
        editor.off('selectionChange', handleSelectionChange);
      }
    };
  }, [editor, initTheme, props.onChange, theme, typewriter]);

  useEffect(() => {
    editor?.tagInsert?.setWordList(wordList);
  }, [editor, wordList]);

  function handleKeyDown(e) {
    let res = true;
    if (matchHotKey('⌘-z', e)) {
      editor?.undo();
    } else if (matchHotKey('⇧-⌘-z', e)) {
      editor?.redo();
    } else if (matchHotKey('⌘-1', e)) {
      editor?.updateParagraph('heading 1');
    } else if (matchHotKey('⌘-2', e)) {
      editor?.updateParagraph('heading 2');
    } else if (matchHotKey('⌘-3', e)) {
      editor?.updateParagraph('heading 3');
    } else if (matchHotKey('⌘-4', e)) {
      editor?.updateParagraph('heading 4');
    } else if (matchHotKey('⌘-5', e)) {
      editor?.updateParagraph('heading 5');
    } else if (matchHotKey('⌘-6', e)) {
      editor?.updateParagraph('heading 6');
    } else {
      res = false;
    }
    if (res) {
      e.preventDefault();
    }
  }

  return (
    <div
      className={classNames(
        classes.editorWrapper,
        typewriter && classes.typewriter,
        focus && classes.focus,
        sourceCode && classes.source,
        props.editorWrapperClassName
      )}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={editorRef}
        className={classNames(classes.editorComponent, props.editorComponentClassName)}
      />
    </div>
  );
}

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf([
    'dark',
    'light',
    'material-dark',
    'ulysses',
    'graphite',
    'one-dark',
    'default'
  ]),
  onSelectImages: PropTypes.func,
  onChange: PropTypes.func,
  sourceCode: PropTypes.bool,
  typewriter: PropTypes.bool,
  focus: PropTypes.bool,
  markdown: PropTypes.string,
  resourceUrl: PropTypes.string,
  readOnly: PropTypes.bool,
  wordList: PropTypes.array
};

Editor.defaultProps = {
  width: '100%',
  theme: 'default',
  onSelectImages: null,
  onChange: () => {},
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: '',
  resourceUrl: '',
  readOnly: false,
  wordList: []
};

export default Editor;
