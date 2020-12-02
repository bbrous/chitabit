import React, {Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'

import SpotLightTasks from './SpotLightTasks'
import SpotLightTaskForm from '../../../forms/SpotLightTaskForm'
import {UTCtoDate, DatetoUTC, convertMS} from '../../../app/helpers/dateHelper'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey, chitOrangeVeryLight} from '../../../styles/colors'
import{ changeSpotlightCompletedStatus, changeDisplaySpotlight} from '../../../app/redux/actions/mainActions'

import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'
import MenuPopupSpotlight from './MenuPopupSpotlight'
import ClockPopup from './timer/TimerPopup'
import NotePopup from './NotePopup'

import SpotlightDetail from './SpotlightDetail'
import CountDownDisplay from './timer/CountDownDisplay'
import ForwardIcon from '@material-ui/icons/Forward';

// &&&&   TEMP Initial Store Import -- Get from Database
// import InitialStore from '../../../app/redux/store/InitialStore'




//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper'
const theme = createMuiTheme(); // allows use of mui theme in styled component


//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




// ---------------------------------

// const Wrapper= styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
//   position: 'relative',
//   backgroundColor: chitOrangeLight,
//   height: '100%',



//   [theme.breakpoints.down('sm')] : {
//     // height: '1.25rem',
   
//   },
  
// })

const Info= styled(InfoIcon)({
  display: 'block',
   
  position: 'absolute',
  top: '6px',
  right: '6px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})






const Container= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: chitOrange,
  width: '80%',

  // minHeight: '10rem',
  height: '90%',
  margin: '2rem 0 5% 0',
  
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: veryLightGrey,


})

const ParentContainer = styled(Paper)({
  display: 'block',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: 'grey',
  width: '98%',

  minHeight: '1rem',
 
  
  marginTop: '6px',
   padding: '0 .5rem',

  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const ParentDetail= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',

  color: chitBlueDull,
  fontSize: '.8rem',

// backgroundColor: 'aqua',

'& .parentTitle' : {
  color: 'red',
  marginRight: '4px'

},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ParentLinkWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  margin: '4px .5rem 4px 0',
  border: '1px solid orange',
  borderRadius: '200px',

  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ParentLink= styled(ForwardIcon)({
  display: 'inline-block',
  width: '1.1rem',
  height: '1.1rem',
   
  transform:'rotate(-90deg)',
    
  color: chitOrange,

  '&:hover' : {
     
    color: chitOrangeLight
  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TopWrapper= styled('div')({
  display: 'flex',
   flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.5rem 0 0 0',
  color: 'red',
 
  width: '98%',
  padding: '0 .5rem',

  fontSize: '1rem',
  
backgroundColor: 'white',
border: '1px solid #727376',
borderRadius: '5px',


'&.backgroundCompleted' : {
  backgroundColor: mediumLightGrey,
  color: 'white', 
   

},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.5rem 0 0 0',
  color: 'red',
 
  width: '98%',
  padding: '0 .5rem',

  fontSize: '1rem',
  
  '&.backgroundCompleted' : {
     
    color: 'white', 
     
  
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Title= styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '8px 0',
  

  flexWrap: 'wrap',

  fontSize: '1.2rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumGrey,

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
  '&:hover' : {
     
    border: '1px solid orange'
  },
  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -----------------------------------

const DetailContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  
  width: '98%',
  margin: '0 0 .25rem 0',
  padding: '.5rem .25rem .1rem .25rem', 
    
  
  // color: 'black',
  fontSize: '.8rem',

 
borderTop: '1px solid lightgrey',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '95%',
  height: '100%',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



const BottomWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '8px',
  color: 'grey',
 width: '100%',
// backgroundColor: 'pink',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckBoxWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
const IconsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
  zIndex: '95',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
const MenuWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   marginLeft: '5px',
   width: '1.5rem',
   zIndex: '95',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const NoteIcon= styled(NotesIcon)({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  fontSize: '1.3rem',
  color: 'white',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1.6rem',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




          // ----------------------
          const TaskContainer= styled('div')({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
            width: '98%',
             
            padding: '.25rem .5rem',
            margin: '.25rem 0',

          // backgroundColor: lightGrey,

            fontSize: '.8rem',


            [theme.breakpoints.down('sm')] : {
              // height: '1.25rem',
              // backgroundColor: 'red'
            },
          })

          // ----------------------
          const FormContainer= styled('div')({
            display: 'flex',
            
            justifyContent: 'center',
            alignItems: 'center',
            
            width: '98%',
            margin: '.25rem 0 0 0',
            
            
          backgroundColor: veryLightGrey,
            fontSize: '.8rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const FormRow= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '90%',
  
  // backgroundColor: lightGrey,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskRow= styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '98%',
  margin: '2px 0',
  padding: '.25rem .5rem',
  // backgroundColor: 'red',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Task= styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // margin: '6px 0',
  

  flexWrap: 'wrap',

  fontSize: '.9rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ====================================

export const Spotlight = (props) => {
  // console.log('[SPOTLIGHT ] &&&& spotLightDisplay : ' ,  props.display.private.data.spotlightData.spotlights[props.id]) 

  // console.log('[SPOTLIGHT] id is: , ', props)

  let spotlightData = props.display.private.data.spotlightData
  
 

  let spotLightDisplayed = props.display.private.data.spotlightData.spotlights[props.id]

  const {id,  parent, completedTimeStamp, spotlightStatus, title, timeStamp, endEst, timeEst, type,  note } = spotLightDisplayed

  let parentId = props.display.private.data.spotlightData.spotlights[parent]
  let parentTitle 
  if(parent){
  parentTitle = props.display.private.data.spotlightData.spotlights[parent].title
  }
    const[spotlightState, setSpotlightState] = useState('')

    useEffect(()=>{

      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      setSpotlightState(spotlightStatus)
  
      // console.log(' useEffect Timer Status '  , timerStatus)
  
   
  
  
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
    
    }, [ spotlightStatus]) 


  console.log('[SPOTLIGHT $$$$$ ID is ] --- ' , id)
  let noteId = props.display.private.data.spotlightData.spotlights[id].note
  console.log('[SPOTLIGHT $$$$$ ID is ] --- ' , noteId)

  const handleSpotlightCompletedStatus = () => {

    // 1. get current Spotlight completed status

    console.log('[SPOTLIGHT] handleSpotlightCompletedStatus, id : ', id)
    
    let currentSpotlightStatus = spotlightData.spotlights[id].spotlightStatus

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%






    let newSpotlightCompletedStatus, newSpotlightCompletedTime 

    if(spotlightState === 'inactive'){
      newSpotlightCompletedStatus = 'completed'
      newSpotlightCompletedTime = new Date()
    }
    if(spotlightState === 'completed'){
      newSpotlightCompletedStatus = 'begun'
      newSpotlightCompletedTime = ''
    }
    if(spotlightState === 'begun'){
      newSpotlightCompletedStatus = 'completed'
      newSpotlightCompletedTime = new Date()
      
    }
  
    props.changeSpotlightCompletedStatus(id, newSpotlightCompletedStatus, newSpotlightCompletedTime )
   
  
  
    console.log('[SPOTLIGHT TASKS] -- -------------------------' )
  
  }

  const handleChangeSpotlight= (spotlightId)=>{
    //  console.log('[SpotlightNav] - evt.target is' , evt.currentTarget.id)
      props.changeDisplaySpotlight(spotlightId)
      // props.openCloseSidePanel('hide')
      }

  return (
    <Fragment>
      <Info/>






    <Container elevation = {3}>

    <ParentContainer>

      {parent && 
      <ParentDetail> 

        <ParentLinkWrapper onClick = {(evt)=>{
            handleChangeSpotlight(parent)
          }}>
          <ParentLink/>

        </ParentLinkWrapper>
     
      <div className = 'parentTitle' > Parent :  </div>
      <div> {parentTitle}  </div>
      </ParentDetail>
}
      </ParentContainer>

  <TopWrapper 
    className =  {spotlightState ===  'completed' ? "backgroundCompleted" : ""}
    > 


    <TitleWrapper 
    className =  {spotlightState ===  'completed' ? "backgroundCompleted" : ""}
    > 
      <div><CheckCircleWrapper onClick={()=> handleSpotlightCompletedStatus( id)}> 
      
      {spotlightState !== 'completed' && 
              <CheckCircle/>
              }
              {spotlightState === 'completed' && 
              <CheckCircleCompleted><CheckIcon fontSize = {'small'} /> </CheckCircleCompleted> 
              }
        </CheckCircleWrapper></div>
      
      <Title>
        {title}

      </Title>
    </TitleWrapper>




    <DetailContainer>


    

      <DetailWrapper>



  {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}


  <SpotlightDetail
    spotlightId = {id}
    endEst = {endEst}
    timeEst = {timeEst}
    timeStamp = {timeStamp}
    completedTimeStamp = {completedTimeStamp}
    spotlightStatus = {spotlightStatus}
    
  
  />




  {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
         <BottomWrapper> 
          <CheckBoxWrapper>   
            {/* <SpotlightCheckbox   
            checked = {true}  
            // onClick = {(evt)=> handleDefault(evt)}
          /> 
          <div>   make default popup  </div> */}
          </CheckBoxWrapper>
          
          <IconsWrapper> 
          
              <NotePopup 
              noteId = {noteId} 
              type = 'spotlight'
              spotlightData = {spotlightData}
              spotlightId = {id}
              taskId = ''
              noteHolderId = {id}
              
              />
          
          
          </IconsWrapper> 
          </BottomWrapper>
          
      

      </DetailWrapper>

  
      <MenuWrapper>
       <MenuPopupSpotlight  id = {id} type = {type}/>
      </MenuWrapper>




    </DetailContainer>







    </TopWrapper>

    <FormContainer>
       
        <SpotLightTaskForm/>
      
    

    </FormContainer>

    <SpotLightTasks id = {id} key = {id}/>




    </Container>








    </Fragment>
  )
}


const actions = {
  // changeDisplaySpotlight,
  changeSpotlightCompletedStatus,
  changeDisplaySpotlight
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(Spotlight)
