/*
Main Container for all Draft - JS Experiments

*/

import React, {Fragment, useState} from 'react'

// import DraftBasic from './DraftBasic'
import ConverterMain from './converter/ConverterMain'
import MyDraftDraftMain from './myDraftDraft/MyDraftDraftMain'


 
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styled, createMuiTheme } from "@material-ui/core/styles"


// --- Styles--------------------------------

const DraftContainer = styled('div')({
  display: 'block',
  justifyContent: 'center',
  position: 'relative',
  width: '90%',
  backgroundColor: 'white'
  
})

const TabWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center' , 
  position: 'relative',
  width: '90%',
  backgroundColor: 'white'
  
})

// ================================================



export default function DraftMain() {
  const [state, setState]= useState('draftToText')
  // function getPage() {

//   switch(state){
//     case 'converter' :
//       return <ConverterMain/>;
//     case 'myDraftDraft' :
//       return  <MyDraftDraftMain/>;
//     default: 
//       return <ConverterMain/>

//   }
// }

  return (
    <DraftContainer>
      <TabWrapper>
      <Tabs
          value={state}
          onChange={(e, value) => {
            setState(value);
          }}
        >
          <Tab value="converter" label="Converter" />
          <Tab value="myDraftDraft" label="My draft Draft" />
        </Tabs>
      </TabWrapper>

      <ConverterMain/>

    </DraftContainer>
  )
}
