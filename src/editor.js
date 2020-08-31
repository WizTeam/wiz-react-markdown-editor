import React, { useRef, useEffect } from 'react';
import assert from 'assert';
import PropTypes from 'prop-types';

import EditorCore from './editor_core';
import { isDarkMode } from './utils/utils';

class SaveDataQueue {
  constructor(onSave) {
    this._last = null;
    this._onSave = onSave;
    setInterval(() => {
      this._autoSave();
    }, 1000);
  }

  push(data) {
    if (this._last) {
      const { contentId } = this._last;
      if (contentId !== data?.contentId) {
        this._saveNow(); // save old
        this._last = data;
        return;
      }
    }
    this._last = data;
  }

  _autoSave() {
    if (!this._last) return;
    //
    const { lastChange } = this._last;
    const now = new Date().valueOf();
    if (now - lastChange > 3000) {
      this._saveNow();
    }
  }

  _saveNow() {
    assert(this._last);
    this._onSave(this._last);
    this._last = null;
  }
}

export default function MarkdownEditor(props) {
  const { onSave, theme = 'lite', markdown = '', contentId, ...editorCoreProp } = props;
  //
  // eslint-disable-next-line no-shadow
  function doSaveData({ contentId, content }) {
    if (onSave) {
      onSave({ contentId, markdown: content.markdown });
    }
  }

  const saveDataQueueRef = useRef(new SaveDataQueue(doSaveData));
  const lastDataRef = useRef({});
  //

  function handleChange(content) {
    //
    if (!contentId) {
      return;
    }
    //
    if (
      lastDataRef.current.contentId === contentId &&
      lastDataRef.current.markdown.trim() === content.markdown.trim()
    ) {
      return;
    }
    lastDataRef.current = {
      contentId,
      markdown: content.markdown
    };
    //
    saveDataQueueRef.current.push({
      content,
      contentId,
      lastChange: new Date().valueOf()
    });
  }

  useEffect(() => {
    // content changed
    saveDataQueueRef.current.push(null);
    lastDataRef.current = {
      markdown,
      contentId
    };
  }, [contentId, markdown]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <EditorCore theme={theme} onChange={handleChange} markdown={markdown} {...editorCoreProp} />
  );
}

MarkdownEditor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['dark', 'light', 'material-dark', 'ulysses', 'graphite', 'one-dark']),
  onSelectImages: PropTypes.func,
  onSave: PropTypes.func,
  sourceCode: PropTypes.bool,
  typewriter: PropTypes.bool,
  focus: PropTypes.bool,
  markdown: PropTypes.string,
  resourceUrl: PropTypes.string,
  readOnly: PropTypes.bool
};

MarkdownEditor.defaultProps = {
  width: '100%',
  theme: isDarkMode() ? 'dark' : 'light',
  onSelectImages: null,
  onSave: null,
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: '',
  resourceUrl: '',
  readOnly: false
};
