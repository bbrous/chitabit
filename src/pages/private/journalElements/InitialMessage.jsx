import React from 'react'
import{ chitOrangeLight, chitRedDark } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '1.75rem 0',
  padding: '1rem',
  width: '50%',
  backgroundColor: chitOrangeLight,
 fontSize: '.8rem',
 
 '& li' :{
   marginBottom: '4px',

 },
   
})

const Begin= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontWeight: 'bold',
  color: chitRedDark,

 
   
})



// =============================================

const InitialMessage = () => {
  return (
    <Wrapper elevation = {3}>
    <ul>
      <li>
        To start your journal - click on "New Day"
      </li>
      <li> After creating "New Day" - click on "Add Section" to 
        begin adding content to your journal
      </li>
      <li>
        Create an optional inspirational message or 
          goal to be shown whenever you start working
          on your  journal  -- click on  "Spotlight" in side panel
      </li>
      <li>
        Add search terms and a category for each section when
        you've completed the section. 
        <span>(note: you can also add keywords
        to your section by highlighting the word and right-clicking) </span>
      </li>
      <li>
        Clicking on any completed section will make it active
        again - BUT any unsaved changes in current active area 
        will be lost
      </li>
    </ul>

    <Begin>
      <div>Begin</div>
      <ArrowDownwardIcon/>
       </Begin>
  </Wrapper>
  )
}


export default InitialMessage