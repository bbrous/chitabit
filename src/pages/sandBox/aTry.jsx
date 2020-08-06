import React, {useEffect} from 'react'
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

function convertMS( milliseconds ) {

  // from Remino / msconvert.js
  
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
  };
}

export const aTry = (props) => {

    let spotLightStatus = props.view.private.displaySpotLight

    console.log('[aTry] - displaySpotLight status BEFORE :  ' , spotLightStatus )

    if(spotLightStatus === 'unseen') {
      props.showSpotLight()

      console.log('[aTry] - displaySpotLight status on IF :  ' , spotLightStatus )

      setTimeout(() => props.closeSpotLight() , 2000)
    }
    console.log('[aTry] - displaySpotLight status AFTER IF :  ' , spotLightStatus )


 
    let start = 1596721784000
    let end =  1597997591000
    let msRemaining = end - start
    let timeRemainingObject =  convertMS(msRemaining)

    console.log('[aTry] ms remaining: ', msRemaining)
    console.log('[aTry] timeRemainingObject: ', timeRemainingObject)

   

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
