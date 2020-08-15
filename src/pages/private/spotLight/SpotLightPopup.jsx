import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import{chitOrange, chitVeryLightYellow, chitOrangeLight, chitBlueDull, chitRedDark, mediumGrey} from '../../../styles/colors'


// ##############################################

  import InitialStore from '../../../app/redux/store/InitialStore'

//###############################################

import RemainingTime from './RemainingTime'


import { NavLink, withRouter, useLocation} from 'react-router-dom'

// import{openCloseSidePanel, showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'
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
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '60rem',
  width: '100%',
 
  fontSize: '1.4rem',
  color: chitBlueDull,
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
  margin: '7rem 0 .8rem 0'
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
  margin: '0 0 .5rem 0',
  
  fontSize: '1.5rem',
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  width: '90%',
  margin: '0 .8rem .4rem 0',
  
  // backgroundColor: 'indigo'


})

const TimerTop= styled('div')({
 
 
  color: mediumGrey,
  // backgroundColor: 'green'
})

const TimerBottom = styled('div')({
  width: '12rem',
  fontSize: '.9rem',
  
  color: mediumGrey
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
  bottom: '8px',
  '& div' : {
    color: chitBlueDull,
    textDecoration: 'underline',
    cursor: 'pointer'
  }

})


const Delete= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitBlueDull,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const DeleteIcon= styled(DeleteForeverIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitBlueDull,
  cursor: 'pointer',

 
},
})

const Edit= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitBlueDull,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const IconEdit= styled(EditIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitBlueDull,
  cursor: 'pointer',

 
},
})

const Header = styled('div')({

  color: mediumGrey,
  fontSize: '.8rem'

})
//===============================================================

const SpotLightPopup = (props) => {

  // ########### TEMPORARY   ######################

    // let spotlight = InitialStore

   

    let displayedSpotlight = props.view.private.displayedSpotLightId

  
    let spotlightDataObject = props.view.private.data.spotlights

    let spotlightData = spotlightDataObject[displayedSpotlight] 
    
    const {id, type, popupShow, goal, startDay, endEst, endEstModified, author} = spotlightData
    // console.log('[Spotlight] - props spotlightData : ',  spotlightData )
    // console.log('[Spotlight] - props type : ',startDay  )
    

    // let displayedSpotlightData = props.data.displayedSpotlight
  
  // ##############################################################

  
  // let displayType = type
  let revised = true

  let startDate = startDay  //Aug 7, 2020 5:46 - Friday
  let endDate = endEst   // Aug 15, 2020 10:31 AM ? - Saturday


  console.log('[SPOTLIGHT POPUP] start Date: ', props)
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
          {goal}
        </Goal>
        <TimerWrapper>
      

          <TimerRow> 
            <TimerTop>  End Date Est </TimerTop>
            <TimerBottom> Aug 31 2020 7:32AM  </TimerBottom>

          </TimerRow>


 
        </TimerWrapper>
     
  

          <Remaining>

          <Header> Time Remaining: </Header> 
          <RemainingTime startDate = {startDate} endDate = {endDate}/>
          
        </Remaining>

      </GoalWrapper>

    }


<LinksWrapper>
      <Edit
              // onClick = {handleEdit}
        > 
          <IconEdit/>
      </Edit>

      <Delete
              // onClick = {handleDelete}
        > 
          <DeleteIcon/>
      </Delete>

    </LinksWrapper>
       
    </Wrapper>
  )
}

// export default  SpotLightPopup

// const actions = {
//   showSpotLight,
//   closeSpotLight
// }

const mapState = state => ({
  view: state,
  data: state.private.data.spotlights
});

export default connect(mapState)(SpotLightPopup)

// export default connect(mapState, actions)(SpotLightPopup)