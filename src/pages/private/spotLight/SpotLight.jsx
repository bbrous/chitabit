import React, {Fragment} from 'react'
 
import {connect} from 'react-redux'
import{chitOrange, chitLightYellow, chitOrangeLight, chitBlueDull, chitRedDark, mediumGrey, chitBlueVeryVeryLight, mediumLightGrey} from '../../../styles/colors'

import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'
import {RemainingTimeSmall} from './RemainingTime'
 
import {convertMS} from '../../../app/helpers/dateHelper'

// import Checkbox from '@material-ui/core/Checkbox';
// import clsx from 'clsx'// for checkbox

// ##############################################

  import InitialStore from '../../../app/redux/store/InitialStore'

//###############################################

 


import { NavLink, withRouter, useLocation} from 'react-router-dom'

// import{openCloseSidePanel, showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

import { makeStyles,styled, createMuiTheme } from "@material-ui/core/styles"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import Paper from '@material-ui/core/Paper'




const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------


const BlueWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  paddingTop: '3rem',
  margin: '4px',


  backgroundColor: chitBlueVeryVeryLight,


})

const YellowWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  paddingTop: '2rem',
  margin: '4px',
  lineHeight: '1',

  backgroundColor: chitLightYellow,


})


const Goal= styled('div')({
  display: 'block',
  textAlign: 'center',
   
  
  // height: '100%',
  width: '100%',
  fontSize: '1.1rem',
  color: 'red',
  fontWeight: 'bold'
  // marginBottom: '.5rem'

 
})

const Author= styled('div')({
  display: 'block',
  textAlign: 'center',
   
  
  // height: '100%',
  width: '100%',
  fontSize: '.7rem',
  color: chitBlueDull,
  // marginBottom: '.5rem'

 
})

const TimeLeft= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
   
  
  // height: '100%',
  width: '100%',
  fontSize: '1.2rem',
  color: chitRedDark,

 
})

const ElapsedTime = styled('div')({
  display: 'block',
  textAlign: 'center',
   
  
  // height: '100%',
  width: '100%',
  color: mediumGrey,
  fontSize: '.7rem',
  lineHeight: '1rem',
  marginBottom: '.75rem'

 
})


const RemainingTimeWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
   
    
    height: '3rem',
    width: '90%',

    padding: '0 auto .75rem auto',

 

 
})


// ------------------------------------

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

const DefaultWrapper= styled('div')({
  display: 'flex',
  width: '90%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',
  top: '3px',
  left: '3px',
  '& div' : {
    color: mediumGrey,
    fontSize: '.7rem',
    lineHeight: '1rem',
     
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



const Header = styled('div')({

  color: mediumGrey,
  fontSize: '.8rem'

})
//===============================================================

const SpotLight = (props) => {
  const [checked, setChecked] = React.useState(true);
  const {id, type, popupShow, goal, startDay, endEst, endEstModified, author} = props
 
  // console.log('SpotLight] id: ', id)


// --------------------------------
  let startDate = startDay //Aug 7, 2020 5:46 - Friday
  let endDate = endEst   // Aug 15, 2020 10:31 AM ? - Saturday

  let msElapsed =   startDate - endDate

  let timeElapsedObject =  convertMS(msElapsed)
  let days = Math.abs(timeElapsedObject.day)
  let hours = Math.abs(timeElapsedObject.hour)
  let mins = Math.abs(timeElapsedObject.minute)
  let secs = Math.abs(timeElapsedObject.seconds)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDefault = (evt) => {
    let spotlightId = evt.currentTarget.parentElement.parentElement.id

    console.log('[SPOTLIGHt] - evt parent : ', spotlightId)

  };

  return (

    <Fragment>
      {type === 'goal' && 
        <YellowWrapper  id = {id}>

          <DefaultWrapper  >


          <SpotlightCheckbox   
            checked = {true}  
            onClick = {(evt)=> handleDefault(evt)}
          />
            <div> default Popup  </div>
          </DefaultWrapper>

            <Goal> {goal} </Goal>
            <ElapsedTime>Elapsed: {days} days {hours} hrs {mins} min</ElapsedTime>
            <TimeLeft>
              <Header> Time Remaining: </Header> 

              <RemainingTimeWrapper>

                <RemainingTimeSmall 
                  startDate = {startDate} 
                  endDate = {endDate}
                />
    
              </RemainingTimeWrapper>

            </TimeLeft>

            
            
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
          
      </YellowWrapper>


      }

      {type === 'inspiration' && 
        <BlueWrapper  id = {id}>

          <DefaultWrapper>


          <SpotlightCheckbox  
            checked = {true}  
            onClick = {(evt)=> handleDefault(evt)}
          />
            <div> default Popup  </div>
          </DefaultWrapper>

            <Goal> {goal} </Goal>
            <Author> {author} </Author>


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
          
      </BlueWrapper>


      }

    </Fragment>

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