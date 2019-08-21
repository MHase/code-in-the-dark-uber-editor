import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/theme/vibrant_ink';
import 'brace/ext/language_tools';

interface EditorProps {
  onChange?: (value: string) => void;
  defaultValue?: string | null;
}

const Editor = ({ onChange, defaultValue, ...props }: EditorProps) => {
  const [editorValue, setEditorValue] = useState(defaultValue || '');

  const update = (value: string) => {
    setEditorValue(value);
    onChange && onChange(value);
  };

  return (
    <AceEditor
      className="Editor"
      mode="html"
      theme="vibrant_ink"
      onChange={update}
      height="100vh"
      width="100%"
      value={editorValue}
      editorProps={{ $blockScrolling: Infinity }}
      enableBasicAutocompletion
      enableLiveAutocompletion
      tabSize={2}
      {...props}
    />
  );
};

export default Editor;
