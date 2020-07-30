import React from 'react'
import {darkGrey} from '../../styles/colors'
import {NavLink, withRouter, useLocation} from 'react-router-dom'

import { styled} from '@material-ui/core/styles'
import Logo from '../../images/logoChitabit.svg'
import Login from './Header_login'


const BodyWrapper= styled('div')({
  display: 'block',
  
  backgroundColor: '#363738',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  color: 'white'
})

const ContentWrapper= styled('div')({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

})

const LogoWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem',
  height: '7.5rem', 
})

const LoginWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

})

const LogoStyle= styled('img')({

  height: '100%'
  


})

const TryIt= styled(NavLink)({
  display: 'block',
  position: 'absolute',
  top: '1rem',
  right: '1rem',

  height: '2rem',
  width: '2rem',
  backgroundImage: 'radial-gradient(#FF6347, #DC143C)',
  borderRadius: '50px',

  '&:hover': {
    backgroundImage: 'radial-gradient(#FF6347, orange)',
  }

})

// ================================

const Landing = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <TryIt to="/Try">  </TryIt>
        <LogoWrapper>
        <LogoStyle src= {Logo}   alt="Chit Git Logo" />
          
          
        </LogoWrapper>

        <LoginWrapper>
          <Login/>
        </LoginWrapper>
      </ContentWrapper>
      
    </BodyWrapper>
  )
}

export default Landing
