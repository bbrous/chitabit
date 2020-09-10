import React from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"

import { TextField } from "@material-ui/core";

// ----------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const SubmitWrapper= styled('div')({
  color: 'blue',

  '& input' : {
    height: '1.4rem',
    width: '8rem' ,
    backgroundColor: 'orange',
    border: '1px solid red',
    borderRadius: '5px',
    color: 'white',
    marginBottom: '5px',
    cursor: 'pointer',

    '&:hover' :{
      color: 'blue'
    }
  }

})

const FormSegmentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '.5rem 0',


  // backgroundColor: 'yellow',
  width: '100%',


})

const SegmentHeader= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '4px',
  fontSize: '.85rem',
  width: '100%',
  padding: '2px 4px',
  backgroundColor: 'lightGrey'

})

const ErrorWrapper= styled('div')({
  color: 'red'

})

const StyledMultiline= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  padding: '0',
  width: '26rem',
 
  
  '& textarea' : {
     
     fontSize: '.85rem'
  }


})



// =====================================

const RHFMuiTextArea = () => {
 
  const {handleSubmit, errors, control} = useForm({
              defaultValues: {
                // firstName: "bill",

              }
         })


  const onSubmit = data => alert(JSON.stringify(data))



  return (
    <Wrapper>
     
      <div>  RHF MUI Multiline Text Area</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  Goal  ----------- */}

    <FormSegmentWrapper>

{/*  Note  ------------------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                Spotlight note
              </SegmentHeader>

    
                
              <Controller as={StyledMultiline} name="note" 
                  InputProps={{ disableUnderline: true }}
                  control={control} 
                  defaultValue="" 
                  multiline
                  variant="outlined"
                  />

            
            </FormSegmentWrapper>
          
    </FormSegmentWrapper>

 


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiTextArea
