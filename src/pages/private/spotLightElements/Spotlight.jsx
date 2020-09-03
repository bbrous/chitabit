import React, {Fragment, useState, useEffect} from 'react'

import SpotLightTasks from './SpotLightTasks'
import {UTCtoDate, DatetoUTC, convertMS} from '../../../app/helpers/dateHelper'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumLightGrey, chitBlueVeryLight, chitVeryLightYellow, mediumGrey, veryLightGrey} from '../../../styles/colors'

import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'
import MenuPopup from './MenuPopup'
import ClockPopup from './ClockPopup'
import NotePopup from './NotePopup'

// &&&&   TEMP Initial Store Import -- Get from Database
import InitialStore from '../../../app/redux/store/InitialStore'




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

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: chitOrangeLight,
  height: '100%',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

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
  
  margin: '1.5rem 0',
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
  
  overflowY: 'auto',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: 'white',


})

const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.25rem 0',
  color: 'red',
 
  width: '98%',
  padding: '0 .5rem',

  fontSize: '1rem',
  
backgroundColor: 'white',

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
   
  margin: '4px 0',
  color: 'red',

  flexWrap: 'wrap',

  fontSize: '1rem',
  


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
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
   
  // color: mediumGrey,


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
  backgroundColor: mediumLightGrey,


  


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
  margin: '.25rem 0',
  padding: '.25rem .25rem .1rem .25rem', 
    
  
  color: 'black',
  fontSize: '.8rem',


backgroundColor: veryLightGrey,


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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
            width: '98%',
            margin: '.25rem 0',
            
            
          backgroundColor: lightGrey,
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

  console.log('[SPOTLIGHT ] props id' , props.id)

  const {id, type, parent, completed, title, timeStamp, endEst, startClock, pausedClock, endClock, clockStatus, noteId, taskArray } = InitialStore.spotlightData.spotlights.spot1


  let targetDate  =  UTCtoDate(endEst)

  
  let currentDate = new Date()



  let currentUTCDate = DatetoUTC(currentDate)
  let UTCTimeRemaining = endEst - currentUTCDate

  let timeRemainingObject =  convertMS(UTCTimeRemaining)
  let days = Math.abs(timeRemainingObject.day)
  let hours = Math.abs(timeRemainingObject.hour)
  let mins = Math.abs(timeRemainingObject.minute)
  let secs = Math.abs(timeRemainingObject.seconds)

  console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs
  )


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




    <TitleWrapper>
      <div><CheckCircleWrapper> 
      {!completed && 
              <CheckCircle/>
              }
              {completed && 
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
          <DetailRowLeft>Target: </DetailRowLeft>
          <DetailRowRight> {targetDate} </DetailRowRight>
        </DetailRow>

        <DetailRowOrange>
          <DetailRowLeft>Remaining: </DetailRowLeft>
          <DetailRowRight>{days} days {hours} hrs {mins} min {secs} secs</DetailRowRight>
        </DetailRowOrange>

        <DetailRow>
          <DetailRowLeft>Elapsed: </DetailRowLeft>
          <DetailRowRight>2 wks 5 days 3 hrs 22 min</DetailRowRight>
        </DetailRow>
        
         <BottomWrapper> 
          <CheckBoxWrapper>   
            <SpotlightCheckbox   
            checked = {true}  
            // onClick = {(evt)=> handleDefault(evt)}
          /> 
          <div>   make default popup  </div>
          </CheckBoxWrapper>
          <IconsWrapper> 
              <NotePopup id = {id}/>
              <ClockPopup id = {id}/>
          </IconsWrapper> 
          </BottomWrapper>
          
      

      </DetailWrapper>


      <MenuWrapper>
       <MenuPopup  id = {id}/>
      </MenuWrapper>
    </DetailContainer>


    <FormContainer>
      <FormRow>
        <div> Form input here</div>
      </FormRow>
      <FormRow>
        <div>New Tasks</div>
        <div>New Child Spotlight</div>
      </FormRow>

    </FormContainer>

    <SpotLightTasks/>




    </Container>








    </Fragment>
  )
}


export default Spotlight
