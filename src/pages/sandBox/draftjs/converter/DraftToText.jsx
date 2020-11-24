import React from 'react'
import { useState } from "react";

import { EditorState, convertToRaw } from 'draft-js'

import DraftEditor from "./components/DraftEditor";
import DraftToHtml from './components/DraftToHtml'
import MySwitch from "./components/MySwitch";
import safeJson from "js-string-escape"


import { Grid, TextField } from "@material-ui/core";

import { styled } from "@material-ui/core/styles"


// --- Styles--------------------------------

const DraftContainer = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '20rem',
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
  color: 'red'
})

const EditorContainer = styled('div')({
  // backgroundColor: 'grey',
  display: 'block',
  width: '100%'
})

// ================================================

export default function DraftToText() {

  const [draft, setDraft] = useState(EditorState.createEmpty())
  const [safe, setSafe] = useState(true);
  const text = JSON.stringify(convertToRaw(draft.getCurrentContent()));


  return (
    <DraftContainer>
      <Header> 
        Draft  - to -    Text 
      </Header>
      <EditorContainer>
        <DraftEditor onChange = {setDraft} />
      </EditorContainer>

      <div >
        <MySwitch value={safe} onChange={setSafe} />
      </div>
      <TextField
          value={safe ? safeJson(text) : text}
          variant="outlined"
          style={{ width: "100%" }}
          fullWidth
          onClick={e => {
            e.target.select();
          }}
        />

<div  >
        <h2>HTML</h2>
        <DraftToHtml draft={draft} />
      </div>

    </DraftContainer>
  )
}
