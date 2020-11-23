import React, {useState} from 'react'

import { EditorState, ContentState, convertFromRaw } from "draft-js";
import DraftEditor from "./components/DraftEditor";
import DraftToHtml from './components/DraftToHtml'
import stringToDraftState from "./components/utils/stringToDraftState";
import MySwitch from "./components/MySwitch";
import unEscape from 'unescape-js'

import { styled } from "@material-ui/core/styles"


// --- Styles--------------------------------
const DraftContainer = styled('div')({
  backgroundColor: 'grey',
  display: 'flex',
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
  color: 'blue'
})

// ================================================

export default function TextFromDraft() {
  return (


    <DraftContainer>
      <Header> 
      Text  - from -    Draft
      </Header>
    </DraftContainer>
  )
}
