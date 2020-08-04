import React, {useeffect} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled} from '@material-ui/core/styles'


const BodyWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '100vw',
  height: '100vh',

})

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '99vw',
  height: '99vh',
  border: '1px solid orange'
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

const PageHeader= styled('div')({
  fontSize: '1.2rem',
  color: 'orange',
  marginBottom: '2rem',
})

const ContentArea = styled('div')({
  display: 'block',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})


// ============================

export const aTry = (props) => {

    let spotLightStatus = props.view.private.displaySpotLight

    console.log('[aTry] - displaySpotLight status BEFORE :  ' , spotLightStatus )

    if(spotLightStatus === 'unseen') {
      props.showSpotLight()

      console.log('[aTry] - displaySpotLight status on IF :  ' , spotLightStatus )

      setTimeout(() => props.closeSpotLight() , 2000)
    }
    console.log('[aTry] - displaySpotLight status AFTER IF :  ' , spotLightStatus )


 

   

  return (
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>
        <div> Put Content Here </div>
        {spotLightStatus === 'show' && <div> SHOW ME THE SPOTLIGHT</div>}







        </ContentArea>
      </Wrapper>
    </BodyWrapper>

  )
}

const actions = {
  showSpotLight,
  closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(aTry)
