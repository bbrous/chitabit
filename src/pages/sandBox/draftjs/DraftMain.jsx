/*
Main Container for all Draft - JS Experiments

*/

import React, {Fragment} from 'react'

// import DraftBasic from './DraftBasic'
import ConverterMain from './converter/ConverterMain'



 

import { styled, createMuiTheme } from "@material-ui/core/styles"


// --- Styles--------------------------------

const DraftContainer = styled('div')({
  display: 'block',
  justifyContent: 'center',
  position: 'relative',
  width: '90%',
  backgroundColor: 'white'
  
})

// ================================================



export default function DraftMain() {

  return (
    <DraftContainer>

      <ConverterMain/>

    </DraftContainer>
  )
}
