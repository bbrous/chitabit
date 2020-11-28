import React from 'react'
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { styled} from "@material-ui/core/styles"


 


// --- Styles--------------------------------

const EditorContainer = styled('div')({

  border: "1px solid black", minHeight: "300px"

  
})

const WYSIWYGContainer = styled(Editor)({

  backgroundColor: 'white',
  minHeight: '500px'

  
})



// ================================================
export default function DraftEditor({value = null, onChange}) {

  const [editorState, setEditorState] = useState(value);

  useEffect(() => {});
  return (
  <EditorContainer>
      <WYSIWYGContainer
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        stripPastedStyles={true}
        onEditorStateChange={text => {
          setEditorState(text);
          onChange(text);
        }}
      />
  </EditorContainer>
  )
}
