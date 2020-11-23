
import React, {useState} from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

import { styled, createMuiTheme } from "@material-ui/core/styles"

const DraftContainer = styled('div')({
  backgroundColor: 'orange',
  display: 'block',
  height: '30rem',
  width: '90%'
  
})


// ==================================

export default function DraftBasic() {

const [editorState, setEditorState] = useState(EditorState.createEmpty())
 
let onChange = (editorState) => {
  setEditorState(editorState)
}

let handleKeyCommand = (command) => {
  const newState = 
    RichUtils.handleKeyCommand(editorState, command)

  if (newState){
    onChange(newState)
    return 'handled'
  }
  return 'not-handled'
}

let onUnderLineClick = () =>{
  onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
}

let onBoldLineClick = () =>{
  onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
}


// onItalicClick = () => {
//   this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
// }

// ----DraftBasic return ---------------------------------------------- 

  return (
    <div>
      Draft Hooks here
      <div>  
        <button onClick={onBoldLineClick}>B</button>  
        <button onClick={onUnderLineClick}>U</button>
        
      </div>
      
    <DraftContainer>

      <Editor 
          editorState = {editorState}
          handleKeyCommand = {handleKeyCommand}
          onChange = {onChange}
        />

    </DraftContainer>
   
    </div>
  )
}
