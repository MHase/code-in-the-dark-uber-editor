import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';

import Editor from '../../components/Editor/index';
import Button from '../../components/Button/index';

import ExampleReference from '../../assets/page.png';

import { StorageContext } from '../../context/storage';

import './style.scss';

const EditorView: React.SFC<RouteComponentProps> = () => {
  const { state, dispatch } = useContext(StorageContext);
  const { content, name, url } = state;

  const referenceSource = url ? `${url}/assets/page.png` : ExampleReference;

  const onChange = (newValue: string) => {
    dispatch({ type: 'updateContent', payload: newValue });
  };

  return (
    <div className="EditorView">
      <Editor onChange={onChange} defaultValue={content} />

      <div className="EditorView__nametag">{name}</div>

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
