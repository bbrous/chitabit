import React from 'react'

import SpotLight from './SpotLight'

/* Read me

SpotLight page contains all spotlights

*/



import { styled, createMuiTheme } from "@material-ui/core/styles"
import { chitOrangeLight } from '../../../styles/colors';


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
