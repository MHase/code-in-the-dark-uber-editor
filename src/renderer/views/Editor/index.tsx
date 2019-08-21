import React from 'react';

import Editor from '../../components/Editor/index';
import Button from '../../components/Button/index';

import ExampleReference from '../../assets/page.png';

import './style.scss';

const onChange = (newValue: string) => {
  window.localStorage.setItem('editorContent', newValue);
};

const EditorView = () => {
  const url = window.localStorage.getItem('url');
  const referenceSource = url ? `${url}/assets/page.png` : ExampleReference;
  const editorDefaultValue = window.localStorage.getItem('editorContent');

  return (
    <div className="EditorView">
      <Editor onChange={onChange} defaultValue={editorDefaultValue} />

      <div className="EditorView__nametag">Admin</div>

      <div className="EditorView__controls">
        <div className="EditorView__reference">
          Reference
          <div className="EditorView__reference-image" style={{ backgroundImage: `url(${referenceSource}` }}></div>
        </div>

        <div className="EditorView__buttons">
          <Button className="EditorView__button EditorView__buttons-instructions">Instructions</Button>
          <Button className="EditorView__button EditorView__buttons-finish">Finish</Button>
        </div>
      </div>
    </div>
  );
};

export default EditorView;
