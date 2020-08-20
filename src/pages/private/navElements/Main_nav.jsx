import React, {Fragment, useEffect} from "react"
import { styled, createMuiTheme } from "@material-ui/core/styles"

import { NavLink, withRouter, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
// import{changeDisplay} from '../../../app/redux/actions/mainActions'

// import {getPage} from '../../../app/helpers/locationHelper'

 
const theme = createMuiTheme(); // allows use of mui theme in styled component



const NavButton= styled('div')({

  

  // background: testColors.testRed,
  border: 'none',
  color: 'black',
  textTransform: 'none',
  fontWeight: '300',
  height: '1.4rem',
  margin: '.3rem 0 0 0',

  padding: '1px 1rem',

  [theme.breakpoints.down('sm')] : {
    fontWeight: '300',
    fontSize: '.85rem',
    
    
  },
  [theme.breakpoints.down('xs')] : {
    fontWeight: '300',
    fontSize: '.75rem',
    padding: '1px',
    
  }

})

const NavButtonDisabled= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  // background: testColors.testRed,
  border: 'none',
  
  textTransform: 'none',
  
  backgroundColor: '#727376',
  color: 'white',
  fontWeight: 'normal',
 borderRadius: '5px 5px 0 0',
  padding: '0 .75rem',

  // height: '2rem',
  height: '1.4rem',
  margin: '.3rem 0 0 0',

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



const StyledLink= styled(NavLink)({

  
 

    textDecoration: 'none',
 
  

})


// ================================================

function MainNav(props) {
  
  const handleViewChange = (evt)=>{
    evt.persist()
    // console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    // props.changeView( evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // console.log('Current Page is: ', props.chits.view.viewDisplayed)
  }


// let display = props.display.private.display



// let location = useLocation()
//   let page = getPage(location)

//---works ---
    // useEffect(
    //   ()=>{props.changeDisplay(page)},[page] 
    //   )
  
  // console.log('[Main Nav]... props --- ', page)

  let display = 'spotlight'

  return (


    
    <Fragment>

      <StyledLink to="/main/journal" >

        {display !== 'journal' && 
          <NavButton
            id = 'journal' 
            
          
          >Journal </NavButton>
        }

        {display === 'journal' && 
          <NavButtonDisabled
            id = 'journal' 
            
          
          >2 party </NavButtonDisabled>
        }

      </StyledLink>

      <StyledLink to="/main/spotlight" >

        {display !== 'spotlight' && 
          <NavButton
            id = 'spotlight' 
            
          
          >spotlight </NavButton>
        }

        {display === 'spotlight' && 
          <NavButtonDisabled
            id = 'spotlight' 
            
          
          >Spotlights </NavButtonDisabled>
        }


        </StyledLink>


      








   
  </Fragment>
  );
}

const actions = {
  // changeDisplay 
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(withRouter(MainNav))