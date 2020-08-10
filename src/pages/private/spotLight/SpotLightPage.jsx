import React from 'react'

import SpotLightPopup from './SpotLightPopup'

/* Read me

SpotLight page contains all spotlights

*/



import { styled, createMuiTheme } from "@material-ui/core/styles"
import { chitOrangeLight, chitOrange} from '../../../styles/colors';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'
const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', 
  height: '100%',

  backgroundColor: chitOrangeLight



})

const SpotLightsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '50%', 
  height: '80%',
overflowX: 'hidden',
overflowY: 'auto', 

backgroundColor: 'white',


})

const SingleWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%', 
  height: '15rem',
  marginBottom: '4px',


  backgroundColor: 'yellow',


})

const Delete= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const DeleteIcon= styled(DeleteForeverIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},
})


const Edit= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const IconEdit= styled(EditIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},
})


// ======================================

const SpotLightPage = () => {
  return (
    <Wrapper>

      <SpotLightsWrapper>

        <SingleWrapper>
          <div> First Wrapper </div>
          <div> duh </div>
          <div> duh </div>
        </SingleWrapper>

        <SingleWrapper>
          <div> 2nd Wrapper </div>
          <div> duh </div>
          <div> duh </div>
        </SingleWrapper>

      </SpotLightsWrapper>
      
      
    </Wrapper>
  )
}

export default  SpotLightPage
