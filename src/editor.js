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
  //
  function doSaveData({ contentId, content }) {
    if (props.onSave) {
      props.onSave({ contentId, markdown: content.markdown });
    }
  }

  const saveDataQueueRef = useRef(new SaveDataQueue(doSaveData));
  const lastDataRef = useRef({});
  //

  function handleChange(content) {
    //
    if (!props.contentId) {
      return;
    }
    //
    if (
      lastDataRef.current.contentId === props.contentId &&
      lastDataRef.current.markdown.trim() === content.markdown.trim()
    ) {
      return;
    }
    lastDataRef.current = {
      contentId: props.contentId,
      markdown: content.markdown,
    };
    //
    saveDataQueueRef.current.push({
      content,
      contentId: props.contentId,
      lastChange: new Date().valueOf(),
    });
  }

  useEffect(() => {
    // content changed
    saveDataQueueRef.current.push(null);
    lastDataRef.current = {
      markdown: props.markdown,
      contentId: props.contentId,
    };
  }, [props.contentId, props.markdown]);

  //
  const theme = props.theme || 'lite';
  const markdown = props.markdown || '';

  return (
    <EditorCore
      theme={theme}
      onChange={handleChange}
      markdown={markdown}
      resourceUrl={props.resourceUrl}
      width={props.width}
      onSelectImages={props.onSelectImages}
      sourceCode={props.sourceCode}
      typewriter={props.typewriter}
      focus={props.focus}
    />
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
  resourceUrl: PropTypes.string
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
  resourceUrl: ''
};
