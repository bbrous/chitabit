// LedgerView.jsx ...  in sandbox/reselectSort

import React from 'react'
import {connect} from 'react-redux'
// import{ mediumGrey} from '../../../styles/colors'

import {chitFilter} from '../../../app/helpers/commonHelpers'

import LedgerRow from './LedgerRow'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'


const theme = createMuiTheme(); // allows use of mui theme in styled component

// ----------------------------


// ----------------------------


const Wrapper= styled('div')({
  display: 'block',
  width: '100%',
  backgroundColor: 'red'
})

// -------------------------

const HeaderWrapper= styled(Paper)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 2px 8px 2px',
  width: '100%',
  height: '1.2rem',
  fontSize: '.8rem',
  backgroundColor: '#727376',
  
  // background: 'yellow',
  [theme.breakpoints.down('xs')] : {
    fontSize: '.65rem',
    
  },

})

const HeaderDate= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '17%',
  color: 'white',

  [theme.breakpoints.down('xs')] : {
    fontSize: '.6rem',
    
  },
})

const HeaderOwe= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: '2px solid #E6E7E8',
  
  width: '6%',
  color: 'white',

})

const HeaderName= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: '2px solid #E6E7E8',
  width: '25%',
  color: 'white',

})

const HeaderTitle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: '2px solid #E6E7E8',
  width: '38%',

  color: 'white',

})

const HeaderWork= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: '2px solid #E6E7E8',
  width: '8%',

  color: 'white',

})



const HeaderFeedback= styled('div')({
  display: 'block', 
  justifyContent: 'center',
  alignItems: 'center',
   
  borderLeft: '2px solid #E6E7E8',
  
  width: '5%',

  color: 'white',

})

const Message= styled('div')({
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
   marginTop: '2rem',
  color: 'red',

})
 
// ======================================


const LedgerView_TP = (props) => {
  // let chits = props.chits.twoParty
  // // let chits = null
  // let personId = props.viewFilter.displayId
  


    // let filteredChits = chitFilter(Object.values(chits), personId)
    //   // convert the object of objects to an array so it can use array functions
    //   let unsortedAllChitsAsArray = Object.values(chits)
  
    //   // sort the array by date
    //   const allChitsAsArray = unsortedAllChitsAsArray.sort((a, b) => (a.chitDate > b.chitDate) ? -1 : 1)
  

  
    // let chitsDisplayed

  // display all TP chits or just certain (filtered) chits
  // personId === 'all' ? chitsDisplayed = allChitsAsArray: chitsDisplayed = filteredChits


  // main function to be displayed in Render ---------------------


  //   function displayChitRows(chits){

  // // map through the chitsArray to display the individual ones
  //   const allRows =chitsDisplayed.map((chit, index) => {

  //   const {chitId, chitDate, title, type, chitColor, deedPerformedBy, otherParty, workRelated, attachment }  = chit

    
  //   return(

  //     <LedgerRow  
  //       key = {index} 
  //       chitId= {chitId} 
  //       chitDate = {chitDate}
  //       title = {title}
  //       type = {type} 
  //       chitColor = {chitColor}
  //       deedPerformedBy = {deedPerformedBy}
  //       otherParty ={otherParty}
  //       workRelated = {workRelated} 
  //       attachment = {attachment}
  
  //     />


  //   )}) // end allRows map

   



  // }//end function displayChitRows ----------------------------



  return (
    <Wrapper>

      <HeaderWrapper elevation = {2}>
       
       <HeaderDate>Date</HeaderDate>
       <HeaderOwe>Owe</HeaderOwe>
       <HeaderName>Name</HeaderName>
       <HeaderTitle>Title</HeaderTitle>
       <HeaderWork>Work</HeaderWork>
       <HeaderFeedback>&nbsp;</HeaderFeedback>

      
      </HeaderWrapper>
    
    {/* {displayChitRows(chits)} */}
chit rows here


    </Wrapper>
  )





}//end function LedgerViewTP



const mapState = state => ({
   
  viewFilter: state.private

});


export default connect(mapState)(LedgerView_TP)