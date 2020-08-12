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


const Wrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  margin: '4px',


  backgroundColor: 'yellow',


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
  color: chitOrangeLight,
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
  color: chitOrangeLight,
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
  color: chitOrangeLight,
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
  color: chitOrangeLight,
  cursor: 'pointer',

 
},
})
//===============================================================

const SpotLight = (props) => {

  const {id, type, popupShow, goal, startDay, endEst, endEstModified, author} = props


  


  return (
    <Wrapper key = {id}>

        <div> {goal} </div>
        <div> {author} </div>
       
    </Wrapper>
  )

}



// const actions = {
//   showSpotLight,
//   closeSpotLight
// }

const mapState = state => ({
  view: state,
  data: state.private.data.spotlights
});

export default connect(mapState)(SpotLight)

// export default connect(mapState, actions)(SpotLight)