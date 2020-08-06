import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import{chitOrange, chitVeryLightYellow, chitOrangeLight, chitBlueDull, chitRedDark} from '../../../styles/colors'

import { NavLink, withRouter, useLocation} from 'react-router-dom'

// import{openCloseSidePanel, showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

import Paper from '@material-ui/core/Paper'
import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',


  

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const Inspiration = styled('div')({

  display: 'flex',
 
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
 
  fontSize: '1.4rem',
  color: 'blue',
  fontWeight: 'bold',
  textAlign: 'center',
 
  backgroundColor: 'yellow',

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const GoalWrapper = styled(Paper)({

  display: 'flex',
 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
 
  fontSize: '1.4rem',
  color: chitBlueDull,
  fontWeight: 'bold',
  textAlign: 'center',
 
 backgroundColor: 'white',

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const Goal = styled('div')({

 
  display: 'block',
  width: '100%',
  justifyContent: 'center',
  margin: '0 0 1.5rem 0',
  
  fontSize: '1.4rem',
  color: chitRedDark,
  fontWeight: 'bold',
  textAlign: 'center',
 

})

const TimerWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  // backgroundColor: 'aqua',
  fontSize: '.75rem'
})

const TimerRow = styled('div')({
 
  width: '90%',
  margin: '0 .8rem .4rem 0',
  textAlign: 'left',
  paddingLeft: '3rem'
  // backgroundColor: 'indigo'


})

const TimerLeft= styled('div')({
 
  width: '6rem',
  marginRight: '2.5rem',
  color: 'black',
  // backgroundColor: 'green'
})

const TimerRight= styled('div')({
  width: '12rem',
  
  color: 'black'
  // backgroundColor: 'white'

})

const Remaining= styled('div')({

    
  display: 'block',
  width: '100%',
  justifyContent: 'center',
  margin: '0 0 1.5rem 0',
  
  fontSize: '1.2rem',
  marginTop: '2rem',
  color: 'red',
  fontWeight: 'bold',
  textAlign: 'center',

  '& span': {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginRight: '1.5rem'
  }

})


//===============================================================

const SpotLight = (props) => {

  // let type = 'inspiration'
  let type = 'goal'
  let revised = true

  return (
    <Wrapper>

      {type === 'inspiration' &&
      
        <Inspiration>
          It's a great day to be me and It's always great to be Shelby
        </Inspiration>

      }

    {type === 'goal' &&
      
      <GoalWrapper elevation = {3}>

<Goal>
          SpotLight CRUD from Firestore
        </Goal>
        <TimerWrapper>
      
          <TimerRow> 
            <TimerLeft>  Start Time </TimerLeft>
            <TimerRight> Aug 5 2020 7:32AM </TimerRight>

          </TimerRow>

          <TimerRow> 
            <TimerLeft>  End Date Est </TimerLeft>
            <TimerRight> Aug 31 2020 7:32AM  </TimerRight>

          </TimerRow>

          {revised && 
          <TimerRow> 
            <TimerLeft>  Original Est </TimerLeft>
            <TimerRight> May 21 2020 9:44PM </TimerRight>

          </TimerRow>
          }

 
        </TimerWrapper>
     
  

          <Remaining>
          <span> Time Remaining: </span> 25 days 11 hours
        </Remaining>

      </GoalWrapper>

    }
       
    </Wrapper>
  )
}

export default  SpotLight

// const actions = {
//   showSpotLight,
//   closeSpotLight
// }

// const mapState = state => ({
//   view: state
// });

// export default connect(mapState, actions)(SpotLight)