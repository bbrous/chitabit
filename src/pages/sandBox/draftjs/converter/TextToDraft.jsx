import React, {useState} from 'react'

import { EditorState, ContentState, convertFromRaw } from "draft-js";
import DraftEditor from "./components/DraftEditor";
import DraftToHtml from './components/DraftToHtml'
import stringToDraftState from "./components/utils/stringToDraftState";
import MySwitch from "./components/MySwitch";
import unEscape from 'unescape-js'

import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles"


// --- Styles--------------------------------
const DraftContainer = styled('div')({
  backgroundColor: 'pink',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  width: '100%'
})

const Header = styled('div')({
  backgroundColor: 'lightgrey',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  height: '2rem',
  margin: '4px, 0',
  width: '100%',
  fontWeight: 'bold',
  color: 'blue'
})


const SwitchContainer = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  height: '2rem',
  margin: '4px, 0',
  width: '100%',
  border: '1px solid lightgrey',
  padding: '0 5px',

  '& div': {
   
    fontSize: '1rem',
    marginRight: '1.25rem'
  }


})

const TextContainer = styled(TextField)({
  backgroundColor: 'white',
  // display: 'block',
  padding: '0',
  margin: '1.2rem 0'
  
 


})


const OuterBox = styled('div')({
  backgroundColor: 'yellow',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center',
  height: '9rem',

 


})
const WYSIWGContainer = styled(DraftEditor)({
  backgroundColor: 'white',
  display: 'block',



})

const HTMLContainer = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center',
 
  width: '100%',
   border: '1px solid lightgrey',

   '& div' : {
     fontSize: '1rem',
    color: 'blue'
   }

 


})

// ================================================

export default function TextToDraft() {

  let databaseSavedText = {"blocks":[{"key":"6ifmk","text":"Hello Shelby","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":5,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}},{"key":"hqfo","text":"Good Girl","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":4,"length":5,"style":"color-rgb(41,105,176)"}],"entityRanges":[],"data":{}}],"entityMap":{}}

  let initialText = stringToDraftState(databaseSavedText)

  const [text, setText] = useState("");
  const [safe, setSafe] = useState(true);
  const editorState = stringToDraftState(safe ? unEscape(text) : text);

  return (


    <DraftContainer>
      <Header> 
      Text  - to -    Draft
      </Header>

      <SwitchContainer>

        <div> Text </div>
        <MySwitch value={safe} onChange={setSafe} />

      </SwitchContainer>

      <TextContainer
          value={text}
          variant="outlined"
          style={{ width: "100%" }}
          fullWidth
          multiline
          rows="6"
          onChange={e => setText(e.target.value)}
        />

        <OuterBox>
        <div>Draft JS </div>
        <WYSIWGContainer
          key={new Date().toISOString()}
          value={initialText}
          onChange={() => {}}
        />
        </OuterBox>
        
        <HTMLContainer>
        <div>HTML</div>
        <DraftToHtml draft={editorState} />
      </HTMLContainer>
 


    </DraftContainer>
  )
}
