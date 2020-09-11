import React from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled, createMuiTheme } from "@material-ui/core/styles"

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

const FormInput= styled('div')({
 

  '& input' : 
  {
    border: '1px solid orange',
    borderRadius: '5px',
    // width: '80%', 
    margin: '0 0 0 8px',
    width: '26rem',
    height: '2rem',
    outline: 'none' ,
  },
 
})

const StyledTextField= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '26rem',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  outline: 'none' ,
  border: 'none'
  }


})



// =====================================



const RHFMuiSelect = () => {
 
  const {handleSubmit, errors, control, register} = useForm({
              defaultValues: {
                // firstName: "bill",

              }
         })


  const onSubmit = data => alert(JSON.stringify(data))



  return (
    <Wrapper>
     
      <div>  RHF Select  </div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  RHF  StraightInputBox   --------------------------------- */}

    <FormSegmentWrapper>

    <SegmentHeader>
      Straight Select Box
    </SegmentHeader>

    <FormInput> 
 

      <select ref={register} name="ageGroup">
        <option value="child">0 - 19</option>
        <option value="young adult">20 - 29</option>
        <option value="worker bee">30 - 59</option>
        <option value="happy">60 - 120</option>
      </select>
  

          
    </FormInput> 
          

     
</FormSegmentWrapper>


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiSelect
