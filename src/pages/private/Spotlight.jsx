import React from 'react'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow} from '../../styles/colors'

import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'


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

const Info= styled(InfoIcon)({
  display: 'block',
   
  position: 'absolute',
  top: '6px',
  right: '6px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const BreadCrumbs= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
   
  marginTop: '2vh',
  color: chitBlueDull,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Crumb= styled('a')({
   
   
  margin: '0 8px',
  color: chitBlueDull,
  textDecoration: 'underline',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CrumbLast= styled('span')({
   
   
  margin: '0 8px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Container= styled(Paper)({
   
   
  margin: '4rem auto',
  color: chitOrange,
  width: '22rem',

  minHeight: '10rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
   
  margin: '4px 0',
  color: 'red',
  width: '99%',


  fontSize: '1rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Title= styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '4px 0',
  color: 'red',

  flexWrap: 'wrap',

  fontSize: '1rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  width: '5rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '4px 0',
  color: 'red',
 
  flexWrap: 'wrap',

  fontSize: '1rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ====================================

export const Spotlight = () => {
  return (
    <Wrapper>
      <Info/>

      <BreadCrumbs>

        <Crumb>  Parent  </Crumb>
        <span> {'>'}  </span>
        <Crumb>  Child  </Crumb>
        <span> {'>'}  </span>
        <CrumbLast>  Child's Child  </CrumbLast>
         
      </BreadCrumbs>




    <Container>




    <TitleWrapper>
      <CheckCircle>() </CheckCircle>
      <Title>
        This is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a title

      </Title>
    </TitleWrapper>
      Tasks here





    </Container>








    </Wrapper>
  )
}


export default Spotlight
