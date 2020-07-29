import React, {Fragment} from 'react'

import{headerGrey} from '../../../styles/colors'

import {styled, createMuiTheme}  from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'



import Logo from '../../../images/logoChitabit_small.svg'
// import MainNav from '../navElements/Main_nav'

const theme = createMuiTheme(); // allows use of mui theme in styled component

const HeaderWrapper = styled(AppBar)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:  'flex-start',
  alignItems: 'flex-start',
  position :'fixed',
 


})

const HeaderUpper= styled('div')({

  height: '2.5rem', 
  background: headerGrey,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#363738',
  width: '100vw',

  [theme.breakpoints.down('sm')] : {
    // height: '2.5rem'
    
  }
 

})

//  ----- Upper Appbar  ------------------------

const LogoBox= styled('div')({

  height: '1.6rem', 
  display: 'block',
  width: '32%',
  marginLeft: '1%',

  [theme.breakpoints.down('sm')] : {
     
    width: '24%',
     
  }

})

 

const LogoStyle= styled('img')({

  height: '100%'


})


//  ----- Lower Appbar  ------------------------

const HeaderLower= styled('div')({

  height: '1.7rem', 
  background: 'white',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100vw',
  [theme.breakpoints.down('sm')] : {
    // position :'relative'
    display: 'none'
  }
 

})

// const MenuWrapper= styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '5%',
//   color: 'white',
//   // backgroundColor: 'red'

// })

const Greeting = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '13.5%',
  paddingLeft: '1.5%',
  color: 'black',
  // backgroundColor: 'aqua',

  [theme.breakpoints.down('sm')] : {
    fontWeight: 'normal',
    fontSize: '.85rem',
    
    
  },
  [theme.breakpoints.down('xs')] : {
    fontWeight: 'normal',
    fontSize: '.75rem',
    padding: '1px',
    
  }

})

const NavWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: '100%',
  // backgroundColor: 'yellow'

})

const Question= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5%',
  color: 'white',
  // backgroundColor: 'pink'

})






// -------------------------

const Header_main = (props) => {

 


  return (
    <Fragment>
        <HeaderWrapper>
          <HeaderUpper>
        <LogoBox> 
          <LogoStyle src= {Logo}   alt="Chit Git Logo" />
        </LogoBox>

 

        

          </HeaderUpper>

          <HeaderLower>

            
            <Greeting>Hi Brad</Greeting>
            <NavWrapper> 


            </NavWrapper>
            <Question> ? </Question>
          </HeaderLower>


        </HeaderWrapper>

   

    </Fragment>
  )
}


export default Header_main
