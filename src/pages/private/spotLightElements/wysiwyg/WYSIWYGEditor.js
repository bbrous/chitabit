import React, { useState, useEffect } from "react";

// Components
import { EditorState, convertToRaw } from "draft-js";
import {ContentState, convertFromHTML }from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./WYSIWYG.scss";

const WYSIWYGEditor = props => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(
    ContentState.createFromBlockArray(




      
      convertFromHTML('<p>My initial content.</p>')






    )
  ),);


  
  const onEditorStateChange = editorState => {
    setEditorState(editorState);
    console.log("PROPS ==> ", props);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <React.Fragment>
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
          
          // toolbar={{
          //   inline: { inDropdown: true },
          //   list: { inDropdown: true },
          //   textAlign: { inDropdown: true },
          //   link: { inDropdown: true },
          //   history: { inDropdown: true },
          // }}

          toolbar ={
            {
            options:['inline','colorPicker', 'link', 'list',  ], // This is where you can specify what options you need in
            //the toolbar and appears in the same order as specified
            inline:
            {
            options:['bold', 'italic', 'underline'] // this can be specified as well, toolbar wont have
            //strikethrough, 'monospace', 'superscript', 'subscript'
            },
   
            }
            }





        />
      </div>
    </React.Fragment>
  );
};

export default WYSIWYGEditor;
