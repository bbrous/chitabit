import React from 'react'

import {useForm} from 'react-hook-form'




// Material UI -----------------------------
import { styled, createMuiTheme } from "@material-ui/core/styles"



// ----------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component


const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'yellow',
  width: '100%',
  height: '100%',

  '& div': {marginBottom: '8px' }

})

const ErrorWrapper= styled('div')({
  color: 'aqua'

})


// =====================================

const RHFMui = () => {

  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => alert(JSON.stringify(data))


  return (
    <Wrapper>
     
      <div>  RHF MUI here </div>


    <form onSubmit = {handleSubmit(onSubmit)}>

      <div>
        <input type="text" name ='example' defaultValue = 'test' ref ={register}/>
      </div>

      <div>
        <input type="text" 
          name ='exampleRequired' 
           
          ref ={register({
            required: true,
            minLength: 5
          
          })}
        />
          {/* {errors.exampleRequired && <ErrorWrapper>This field Required boy </ErrorWrapper>} */}
          {errors.exampleRequired && errors.exampleRequired.type === "required" && <ErrorWrapper>This is required</ErrorWrapper>}
          {errors.exampleRequired && errors.exampleRequired.type === "minLength" && <ErrorWrapper>TMust be greater than 5</ErrorWrapper>}
       
      </div>

      <div>
        <input type="submit"/>
      </div>

    </form>

    </Wrapper>
  )
}


  export default RHFMui
