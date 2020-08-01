import React from 'react'
import{ chitOrangeLight, chitVeryLightYellow, darkGrey, lightGrey, mediumLightGrey, veryLightGrey } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled(Paper)({
  display: 'block',

  marginBottom: '5px',
  padding: '0',
  width: '100%',
  backgroundColor: 'white',
  fontSize: '.8rem',
 

   
})
const SectionHeader= styled('div')({
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.2rem',
  backgroundColor: mediumLightGrey,
  color: 'white',
  fontSize: '.8rem',
  

   
})

const SectionContent= styled('div')({
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  // margin: '1.75rem 0',
  padding: '.7rem',
  width: '100%',

 

   
})

// =============================================

const Section = () => {
  return (
    <Wrapper> 
       <SectionHeader>
        <div>
          Category Placeholder
        </div>
        <div>
          June 10 2020
        </div>
      </SectionHeader>

      <SectionContent>
      <div>Sections one</div> 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 

         


      </SectionContent>

    </Wrapper>
  )
}

export default Section
