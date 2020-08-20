import React from 'react'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow} from '../../styles/colors'

import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component

// ---------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: chitOrangeLight,
  height: '100%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ====================================

export const Spotlight = () => {
  return (
    <Wrapper>
      Spotlight here
    </Wrapper>
  )
}


export default Spotlight
