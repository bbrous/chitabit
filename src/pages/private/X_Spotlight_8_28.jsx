import React from 'react'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../styles/colors'

import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const theme = createMuiTheme(); // allows use of mui theme in styled component

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

const TitleWrapper= styled(Paper)({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.25rem 0',
  color: 'red',
 
  width: '98%',
  padding: '.25rem .5rem',

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

const CheckCircle= styled('div')({
  
  width: '1.1rem',
  height: '1.1rem',
  border: '1px solid grey',
  borderRadius: '200px',
  marginRight: '1rem',
  // color: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -----------------------------------

const DetailContainer= styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  
  width: '98%',
  margin: '.25rem 0',
  padding: '.25rem .25rem .1rem .25rem', 
    
  
  color: 'black',
  fontSize: '.8rem',


// backgroundColor: 'yellow',


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
  
  width: '90%',
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


const IconsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   

  


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

export const Spotlight = () => {
  return (
    <Wrapper>
      <Info/>


      <BreadCrumbs>

<Crumb>  Parent  </Crumb>
<span> {'>'}  </span>
<Crumb>  Child  </Crumb>
<span> {'>'}  </span>
<CrumbLast>  Child's Child  </CrumbLast>

</BreadCrumbs>



    <Container>




    <TitleWrapper>
      <div><CheckCircle>&nbsp; </CheckCircle></div>
      
      <Title>
        This is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a titleThis is a title

      </Title>
    </TitleWrapper>


    <DetailContainer>

      <DetailWrapper>

        <DetailRow>
          <DetailRowLeft>Target: </DetailRowLeft>
          <DetailRowRight>Wed Aug 19 2020</DetailRowRight>
        </DetailRow>

        <DetailRowOrange>
          <DetailRowLeft>Remaining: </DetailRowLeft>
          <DetailRowRight>2 wks 5 days 3 hrs 22 min</DetailRowRight>
        </DetailRowOrange>

        <DetailRow>
          <DetailRowLeft>Elapsed: </DetailRowLeft>
          <DetailRowRight>2 wks 5 days 3 hrs 22 min</DetailRowRight>
        </DetailRow>

      </DetailWrapper>


      <IconsWrapper>
       <NoteIcon/>
       <ClockIcon/>
      </IconsWrapper>
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
     <TaskContainer>


        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task21</Task>
        </TaskRow>



        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircle> </CheckCircle>
          <Task>This is Task28</Task>
        </TaskRow>









     </TaskContainer>





    </Container>








    </Wrapper>
  )
}


export default Spotlight
