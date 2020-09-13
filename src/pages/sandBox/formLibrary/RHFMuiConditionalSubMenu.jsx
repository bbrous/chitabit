
/*
from YouTube tutorial
https://www.youtube.com/watch?v=vNrUPktDT7o

*/


import React, { useRef } from 'react'

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
  
  }


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

// =====================================

const RHFMuiPasswordMatch = () => {
 
  const {register, handleSubmit, watch, errors, control} = useForm({
    defaultValues: {
      // firstName: "bill",
      
    }
})


  const onSubmit = data => alert(JSON.stringify(data))

//  ##################################################
//  ###   watch -  key to showing sub menu ###########

    const viewSubmenu = watch("subMenuShow");


//  ##################################################


  return (
    <Wrapper>
     
      <div>  RHF MUI Password Match</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  Password Match  ----------- */}

    <FormSegmentWrapper>

    <SegmentHeader>
      first name
    </SegmentHeader>


      <FormInput> 
        <input
            name="firstName"
            type="text"
            ref={register}
           
          />


        </FormInput>   
    </FormSegmentWrapper>



    <FormSegmentWrapper>

        <SegmentHeader>
          Conditional Submenu
        </SegmentHeader>

  
        <FormInput> 
<label htmlFor = 'submenu'>Show submenu</label>
        <input
            name="subMenuShow"
            placeholder = 'submenu here'
            type="checkbox"
            ref={register}
           
          />

{viewSubmenu && 
        <input
            name="subMenu"
            placeholder = 'submenu here'
            type="text"
            ref={register}
           
          />
}
        </FormInput>
      
</FormSegmentWrapper>


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiPasswordMatch
