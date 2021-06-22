import React from 'react'

import LedgerView from './LedgerView'



import { styled, createMuiTheme } from "@material-ui/core/styles"



const theme = createMuiTheme(); // allows use of mui theme in styled component


 

// ----------------------------


// ----------------------------
const BodyWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '90%',
 

  [theme.breakpoints.down('xs')] : {
    fontSize: '.65rem',
    
  },

})

// =======================================


 const ReselectMain = () => {
  return (
    <BodyWrapper>
      ReslectMain here
      <LedgerView/>
    </BodyWrapper>
  )
}

export default ReselectMain
