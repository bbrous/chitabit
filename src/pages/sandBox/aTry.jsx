import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'

import Tasks from './aTryTasks'
 
import RHFMui from './formTest/RHFMui'

import RHFMuiPasswordMatch from './formTest/RHFMuiPasswordMatch'


import { veryLightGrey } from '../../styles/colors'
// import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'
// import InitialStore from '../../app/redux/store/InitialStore'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

 



// ----------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component





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
  display: 'flex',
  justifyContent: 'center',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})

const ContentAreaSmall = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  backgroundColor: veryLightGrey
})



// =============================================

const ATry = (props) => {


  return (
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>


<ContentAreaSmall>
    
  {/* <Tasks/> */}
  {/* <MUIForm/> */}
  <RHFMuiPasswordMatch/>

</ContentAreaSmall>
        
       







        </ContentArea>
      </Wrapper>
    </BodyWrapper>

  )
}

const actions = {
  // showSpotLight,
  // closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(ATry)



