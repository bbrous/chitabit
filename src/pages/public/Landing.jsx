import React from 'react'
import {darkGrey} from '../../styles/colors'

import { styled} from '@material-ui/core/styles'
import Logo from '../../images/logoChitabit.svg'
import Login from './Header_login'


const BodyWrapper= styled('div')({
  display: 'block',
  
  backgroundColor: darkGrey,
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


// ================================

const Landing = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
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
