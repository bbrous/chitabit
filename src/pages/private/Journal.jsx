import React from 'react'
import {connect} from 'react-redux'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow} from '../../styles/colors'

 
import JournalButtons from './navElements/JournalButtons'
import InitialMessage from './journalElements/InitialMessage'
import Day from './journalElements/Day'

import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  // backgroundColor: 'red',
  height: '100%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const MainContentWrapper= styled('div')({

  display: 'block',
  height: '95%',
  // paddingTop: '3rem',
  // paddingLeft: '3rem',
  // '&::-webkit-scrollbar': {
  //   width: '0.75em' 
  // },
  // '&::-webkit-scrollbar-track': {
  //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
  //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   backgroundColor: 'rgba(0,0,0,.3)',
  //   border: '2px solid rgba(0,0,0,.1)',
  //   borderRadius: '5px'
  // },
  // overflow: 'auto',


  [theme.breakpoints.down('sm')] : {
    paddingTop: '1.5rem',
    paddingLeft: '0',
    height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    paddingLeft: '3rem',

  }

})

  const Content= styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
    width: '100%',
    height: '100%',
    marginBottom: '3px',
    backgroundColor: 'white',
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey',
    // backgroundColor: 'green',
    '&::-webkit-scrollbar': {
      width: '0.75em' 
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.3)',
      border: '2px solid rgba(0,0,0,.1)',
      borderRadius: '5px'
    },
    overflow: 'auto',
  })
  



// =============================

const Journal = () => {
  return (
    <Wrapper>
      <JournalButtons/>
      <MainContentWrapper>
    <Content>
    <Day/>
              <Day/>
 </Content>
 </MainContentWrapper>
 </Wrapper>
     
  )
}

const actions = {
  // openCloseSidePanel,
  // showSpotLight,
  // closeSpotLight 
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(Journal)
