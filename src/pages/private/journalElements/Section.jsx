import React from 'react'
import{ chitOrangeLight, chitOrange, darkGrey, lightGrey, mediumLightGrey, veryLightGrey } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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

  justifyContent: 'center',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.2rem',
  backgroundColor: 'white',
  color: mediumLightGrey,
  borderBottom: '1px solid #CFD0D1',
  fontSize: '.8rem',

  

   
})

const Spacer= styled('div')({
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  padding: '0 1%',
  width: '26%',
 

})

const CategoryWrapper= styled('div')({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1%',
  width: '41%',
     
})

const DateWrapper= styled('div')({
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 1%',
  width: '26%',

})


const SectionContent= styled('div')({
  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  // margin: '1.75rem 0',
  padding: '.7rem',
  width: '100%',

 

   
})


  const Delete= styled('div')({
    display: 'block', 
    position: 'absolute',
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
   
})


// =============================================

const Section = () => {
  return (
    <Wrapper> 
       <SectionHeader>
         <Spacer> {''} </Spacer>
        <CategoryWrapper>
          Exercise (Category) 
        </CategoryWrapper>
        <DateWrapper>
          June 10 2020
        </DateWrapper>
      </SectionHeader>

      <SectionContent>
      <Delete
              // onClick = {handleDelete}
            > 
              <DeleteIcon/>
            </Delete>

      <div>Sections one</div> 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 

         


      </SectionContent>

    </Wrapper>
  )
}

export default Section
