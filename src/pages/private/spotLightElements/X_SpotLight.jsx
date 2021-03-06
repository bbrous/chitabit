import React, {Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'

import SpotLightTasks from './SpotLightTasks'
import SpotLightTaskForm from '../../../forms/SpotLightTaskForm'
import {UTCtoDate, DatetoUTC, convertMS} from '../../../app/helpers/dateHelper'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../styles/colors'
import{ changeSpotlightCompletedStatus} from '../../../app/redux/actions/mainActions'

import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'
import MenuPopup from './MenuPopup'
import ClockPopup from './timer/TimerPopup'
import NotePopup from './NotePopup'

import CountDownDisplay from './timer/CountDownDisplay'

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

const BreadCrumbs= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3.5%',
  
  margin: '1rem 0',
  color: chitBlueDull,


// backgroundColor: 'aqua',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Crumb= styled('a')({
   
   
  margin: '0 8px',
  color: chitBlueDull,
  textDecoration: 'underline',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
 
  },
})

const CrumbLast= styled('span')({
   
   
  margin: '0 8px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
 
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
  marginBottom: '5%',
  
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: veryLightGrey,


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




const DetailRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '2.5rem',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowOrange= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitOrange,
  marginLeft: '2.5rem',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '6rem',

  // backgroundColor: 'aqua',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // backgroundColor: 'green',
  


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
   marginRight: '5px',

  


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

  const {id, type, parent, completed, spotlightStatus, title, timeStamp, endEst, startClock, pausedClock, endClock, clockStatus, note, taskArray } = spotLightDisplayed


    const[spotlightState, setSpotlightState] = useState('')

    useEffect(()=>{

      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      setSpotlightState(spotlightStatus)
  
      // console.log(' useEffect Timer Status '  , timerStatus)
  
   
  
  
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
    
    }, [ spotlightStatus]) 


  console.log('[SPOTLIGHT $$$$$ ID is ] --- ' , id)
  
  // convert target Date in ISO to UTC for addition/subtraction etc
  let targetDate, beginDate
  if(endEst) {
    let targetDateInMilliseconds = DatetoUTC(endEst)
    // format target Date in milliseconds for display
    targetDate  =  UTCtoDate(targetDateInMilliseconds)
  
    // console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }
  if(timeStamp) {
    let beginDateInMilliseconds = DatetoUTC(timeStamp)
    // format target Date in milliseconds for display
    beginDate  =  UTCtoDate(beginDateInMilliseconds)
  
    // console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }

  const handleSpotlightCompletedStatus = () => {

    // 1. get current Spotlight completed status

    console.log('[SPOTLIGHT] handleSpotlightCompletedStatus, id : ', id)
    
    let currentSpotlightStatus = spotlightData.spotlights[id].spotlightStatus

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%






    let newSpotlightCompletedStatus, newSpotlightCompletedTime 

    if(spotlightState === 'inactive'){
      newSpotlightCompletedStatus = 'completed'
      newSpotlightCompletedTime = ''
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

  return (
    <Fragment>
      <Info/>


      <BreadCrumbs>

<Crumb>  Parent  </Crumb>
<span> {'>'}  </span>
<Crumb>  Child  </Crumb>
<span> {'>'}  </span>
<CrumbLast>  Child's Child  </CrumbLast>

</BreadCrumbs>



    <Container elevation = {3}>



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

      <DetailRow>
          <DetailRowLeft>Status: </DetailRowLeft>
 
          <DetailRowRight> {spotlightState}</DetailRowRight>
          
          
      </DetailRow>


      {endEst && 
        <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>
 
          <DetailRowRight> {targetDate} </DetailRowRight>
          
          
        </DetailRow>
      }
      {!endEst && 
        <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>
 
          <DetailRowRight> No Targeted End Date </DetailRowRight>
          
          
        </DetailRow>
      }
      {timeStamp && spotlightState !== 'inactive' &&
        <DetailRow>
          <DetailRowLeft>Begin Date: </DetailRowLeft>
 
          <DetailRowRight> {beginDate} </DetailRowRight>
          
          
        </DetailRow>
      }

      {/* {!timeStamp && 
        <DetailRow>
          <DetailRowLeft>Begin Date: </DetailRowLeft>
 
          <DetailRowRight> Not Started </DetailRowRight>
          
          
        </DetailRow>
      } */}
        {/* If there is an estimated end date ... display  */}
        
        {endEst && 
            <DetailRow>
                 <CountDownDisplay
                 spotlightId = {id}
                 /> 
            </DetailRow>
              
        }
        


 
         <BottomWrapper> 
          <CheckBoxWrapper>   
            {/* <SpotlightCheckbox   
            checked = {true}  
            // onClick = {(evt)=> handleDefault(evt)}
          /> 
          <div>   make default popup  </div> */}
          </CheckBoxWrapper>
          
          <IconsWrapper> 
          {note && 
              <NotePopup 
              note = {note} 
              spotlightData = {spotlightData}
              
              />
          }
          
          </IconsWrapper> 
          </BottomWrapper>
          
      

      </DetailWrapper>

  
      <MenuWrapper>
       <MenuPopup  id = {id}/>
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
  changeSpotlightCompletedStatus
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(Spotlight)
