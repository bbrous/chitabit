import React from 'react'

import SpotLightPopup from './SpotLightPopup'

/* Read me

SpotLight page contains all spotlights

*/



import { styled, createMuiTheme } from "@material-ui/core/styles"
import { chitOrangeLight, chitOrange, chitBlueDull} from '../../../styles/colors';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'
const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%', 
  height: '96vh',
  padding: '4vh 1% 0 1%',

  backgroundColor: chitOrangeLight



})

const CloseSpotlightPage= styled('div')({
  display: 'block',
  position: 'absolute',
  top: '6px',
  left: '6px',
  color: chitBlueDull,
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer'


})


const SpotLightsWrapper= styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '95%',
  overflow: 'auto',
 


backgroundColor: 'white',


})

const SingleWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  margin: '4px',


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

      <CloseSpotlightPage>X  Close Spotlight Page</CloseSpotlightPage>

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
