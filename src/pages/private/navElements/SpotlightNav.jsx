import React from 'react'
import {connect} from 'react-redux'
import{closeSpotLight, openSpotLightPage} from '../../../app/redux/actions/mainActions'




import {  makeStyles, styled, createMuiTheme } from "@material-ui/core/styles"

import { chitBlueDull, chitRedDark, chitOrangeLight, darkGrey, lightGrey } from '../../../styles/colors';
import Paper from '@material-ui/core/Paper'; 


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------


const Wrapper= styled('div')({

  display: 'block',
  backgroundColor: lightGrey,

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const HeaderWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',

  
  height: '3rem',
  backgroundColor: '#F6F7F8',
 
  borderRadius: '0',
  marginBottom: '2px',
  

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const Header= styled('div')({

  display: 'block',
  fontSize: '1.2rem',
  
  color: chitRedDark,

  



})
// =========================================

const SpotlightNav = (props) => {

 


  return (
    <Wrapper>
         <HeaderWrapper elevation={3}>
         <Header> Spotlights   </Header>
          
        </HeaderWrapper>
      Journal Nav here

    </Wrapper>
  )
}

 

const actions = {
  openSpotLightPage,
  closeSpotLight 
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(SpotlightNav)
