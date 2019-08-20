import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/theme/vibrant_ink';
import 'brace/ext/language_tools';

interface EditorProps {
  onChange: (value: string) => void;
  defaultValue: string;
}

const Editor = ({ onChange, defaultValue, ...props }: EditorProps) => (
  <AceEditor
    className="Editor"
    mode="html"
    theme="vibrant_ink"
    onChange={onChange}
    height="100vh"
    width="100%"
    defaultValue={defaultValue}
    editorProps={{ $blockScrolling: Infinity }}
    enableBasicAutocompletion
    enableLiveAutocompletion
    tabSize={2}
    {...props}
  />
);

export default Editor;
