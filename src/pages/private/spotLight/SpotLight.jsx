import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import{chitOrange, chitVeryLightYellow, chitOrangeLight, chitBlueDull, chitRedDark} from '../../../styles/colors'

import {convertMS} from '../../../app/helpers/dateHelper'

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

const InspirationWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
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

const Inspiration = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

})

const Author = styled('div')({
  fontSize: '.7rem',
  color: 'grey'
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

const LinksWrapper= styled('div')({
  display: 'flex',
  width: '90%',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '3px',
  '& div' : {
    color: chitBlueDull,
    textDecoration: 'underline',
    cursor: 'pointer'
  }

})




//===============================================================

const SpotLight = (props) => {

  // let type = 'inspiration'
  let type = 'goal'
  let revised = true

  let startDate = 1596807987000  //Aug 7, 2020 5:46 - Friday
  let endDate = 1597516287000   // Aug 15, 2020 10:31 AM ? - Saturday

  let msRemaining = endDate - startDate
  let timeRemainingObject =  convertMS(msRemaining)
  console.log('[SPOTLIGHT] timeRemainingObject: ', timeRemainingObject)
  return (
    <Wrapper>

      {type === 'inspiration' &&
      <InspirationWrapper>
        <Inspiration>
          It's a great day to be me and It's always great to be Shelby
        </Inspiration>
        <Author>Brad the sage </Author>
      </InspirationWrapper>
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
          <span> Time Remaining: </span> 
          {timeRemainingObject.day} days - {timeRemainingObject.hour} hours
          
        </Remaining>

      </GoalWrapper>

    }


<LinksWrapper>
      <div> edit </div>
      <div> delete </div>
    </LinksWrapper>
       
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