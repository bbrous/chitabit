import React from "react";
import { Editor, EditorState, CompositeDecorator } from "draft-js";

const words = ["hello", "world"];

const Decorated = ({ children }) => {
  return <span style={{ background: "red" }}>{children}</span>;
};

function findWithRegex(words, contentBlock, callback) {
  const text = contentBlock.getText();

  words.forEach(word => {
    const matches = [...text.matchAll(word)];
    matches.forEach(match =>
      callback(match.index, match.index + match[0].length)
    );
  });
}

const styles = {
  editor: {
    border: "1px solid gray",
    minHeight: "6em"
  }
};

function handleStrategy(contentBlock, callback) {
  findWithRegex(words, contentBlock, callback);
}

const createDecorator = () =>
  new CompositeDecorator([
    {
      strategy: handleStrategy,
      component: Decorated
    }
  ]);

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(createDecorator())
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor} style={styles.editor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  );
}
