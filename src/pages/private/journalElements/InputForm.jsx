import React from 'react'
import{ chitOrangeLight, chitOrange, darkGrey, lightGrey, mediumLightGrey, veryLightGrey, chitRedDark } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"


/*READ ME

  The template for accordion is in Chit_Pro
     specifically in Notice Row

     src > pages > private > noticeElements > NoticeRow

     Note:  Look at the delete ref - needs to reflect Redux Id
     for whehter expand or not.

*/






import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  fontWeight: 'bold'

   
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
  justifyContent: 'flex-start',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.5rem',
  backgroundColor: darkGrey,
  color: 'white',
  fontSize: '.7rem',
  
   
})


const IconWrapper= styled('span')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  // margin: 'center',
  margin: '0 .7rem',
  color: 'white'

 

   
})

const ChevronWrapper = styled('div')({
  width: '5%',
 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const ChevronClosed= styled(ExpandMoreIcon)({
 
  fontSize: '1.2rem',
  cursor:'pointer',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const ChevronOpen =  styled(ExpandMoreIcon)({
 
  fontSize: '1.2rem',
  cursor:'pointer',
  transform: 'rotate(180deg)',
  color: chitOrange,



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

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

      <FilterWrapper> 
        <ChevronWrapper data-ref= 'Mikey'>

          <ChevronClosed/>
          

          {/* {stateReferenceId !=='Brad' && 
              <ChevronClosed
                onClick = {handleExpandPanelChevron}
                id = 'Brad'
                data-ref= 'Brad'
              />        
          }

          { stateReferenceId ==='Brad' && 
              <ChevronOpen
                onClick = {handleExpandPanelChevron}
                id = 'Brad'
                data-ref= 'Brad'
              />        
          } */}



        </ChevronWrapper>
          
          <span> Add Topic for Search   </span>

      </FilterWrapper>



      <InputFormContent>
      <div>InputForms one</div> 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 

        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 
        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 



      </InputFormContent>

      <FilterWrapper> 
        <ChevronWrapper data-ref= 'Shelby'>

          <ChevronClosed/>


          {/* {stateReferenceId !=='Brad' && 
              <ChevronClosed
                onClick = {handleExpandPanelChevron}
                id = 'Brad'
                data-ref= 'Brad'
              />        
          }

          { stateReferenceId ==='Brad' && 
              <ChevronOpen
                onClick = {handleExpandPanelChevron}
                id = 'Brad'
                data-ref= 'Brad'
              />        
          } */}



        </ChevronWrapper>
          
          <span> Add Key Words for Search  </span>

      </FilterWrapper>


    </Wrapper>
  )
}

export default InputForm
