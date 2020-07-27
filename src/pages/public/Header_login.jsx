import React, {Fragment} from 'react'
import {NavLink, withRouter, useLocation} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import {styled, createMuiTheme} from '@material-ui/core/styles';
import{chitOrangeLight,  chitOrange} from '../../styles/colors'

const theme = createMuiTheme(); // allows use of mui theme in styled component

const StyledForm= styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
  [theme.breakpoints.down('sm')] : {

 
    }

  // background: testColors.testRed,
})

const StyledText= styled('input')({

  width: '35%',
  height: '1.4rem',
  fontSize: '.85rem' ,
  marginRight: '3px', 
  // background: testColors.testRed,

  fontWeight: 'normal',

  border: '1px solid white',
  borderRadius: '4px'
  

})



const SubmitButton= styled(NavLink)({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
  width: '28%',
  height: '1.4rem',
  fontSize: '1rem'  ,
    
  backgroundColor: chitOrange,
  boxShadow: 'none',
  color: 'white',
  padding: '0 0 1px 0',
borderRadius: '5px',
textDecoration: 'none',
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    textDecoration: 'none',
    color: 'black'
  }

})

// =================================================
const Header_login = () => {
  return (
    <Fragment>
      <StyledForm>
        
      <StyledText
         
        placeholder="User Name"
        variant="outlined"
        
      />

      <StyledText
         
         placeholder="Password"
         variant="outlined"
         
       />

       <SubmitButton to="/main">Login </SubmitButton>
      </StyledForm>
      
    </Fragment>
  )
}

export default Header_login
