/*
Draft JS - convert to JSON and Back
https://codesandbox.io/s/9zyn9r6j3p

*/


import React, {Fragment, useState} from 'react'

import TextToDraft from './TextToDraft'
import DraftToText from './DraftToText'

import { styled} from "@material-ui/core/styles"


import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


// --- Styles--------------------------------

const DraftContainer = styled('div')({
  backgroundColor: 'orange',
  display: 'block',
  height: '30rem',
  
})
const PageContainer = styled('div')({
  backgroundColor: 'grey',

  
})
const AppBarContainer = styled('div')({
  backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems:'center',
  color: 'blue'
  
  
})

// ================================================

export default function ConverterMain() {

  const [state, setState]= useState('draftToText')

  function getPage() {

    switch(state){
      case 'draftToText' :
        return <DraftToText/>;
      case 'textToDraft' :
        return  <TextToDraft/>;
      default: 
        return <DraftToText/>

    }
  }

  return (
    <Fragment>  

      <AppBarContainer>
          <Tabs
            value={state}
            onChange={(e, value) => {
              setState(value);
            }}
          >
            <Tab value="draftToText" label="Draft to text" />
            <Tab value="textToDraft" label="Text to draft" />
          </Tabs>
        </AppBarContainer>

        <PageContainer>{getPage()}</PageContainer>

    </Fragment>
  )
}
