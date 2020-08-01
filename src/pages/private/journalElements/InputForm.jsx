import React from 'react'
import{ chitOrangeLight, chitVeryLightYellow, darkGrey, lightGrey, mediumLightGrey, veryLightGrey, chitRedDark } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled(Paper)({
  display: 'block',

  margin: '.75rem 0',
  padding: '0',
  width: '100%',
  backgroundColor: 'white',
  fontSize: '.8rem',
  border: '1px solid #F58634',
  // paddingBottom: '1.5rem',

   
})
const InputFormHeader= styled('div')({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.2rem',
  backgroundColor: chitOrangeLight,
  color: chitRedDark,
  fontSize: '.8rem',
  

   
})

const InputFormContent= styled('div')({
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  // margin: '0 0 1.5rem 0',
  padding: '.7rem',
  width: '100%',

 

   
})

const FilterWrapper= styled('div')({
  display: 'flex',
  
  bottom: '0',
  justifyContent: 'space-between',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.5rem',
  backgroundColor: darkGrey,
  color: 'white',
  fontSize: '.7rem',
  

   
})

// =============================================

const InputForm = () => {
  return (
    <Wrapper> 
       <InputFormHeader>
        <div>
          Section Input
        </div>

      </InputFormHeader>

      <InputFormContent>
      <div>InputForms one</div> 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 
        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 



      </InputFormContent>
      <FilterWrapper> - Add Filter Terms </FilterWrapper>
    </Wrapper>
  )
}

export default InputForm
