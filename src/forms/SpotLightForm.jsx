import React from 'react'
import { useForm, Controller } from "react-hook-form";



// Material UI -----------------------------
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import { TextField, Checkbox } from "@material-ui/core";
import { chitBlueDull } from '../styles/colors';

// ----------------------------------------
const theme = createMuiTheme(); // allows use of mui theme in styled component


const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'pink',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormContainer= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'white',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormHeader= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  margin: '4px 0 8px 0',
  fontSize: '1.1rem',
  color: chitBlueDull,

})

const FormWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'yellow',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormSegmentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'yellow',
  width: '100%',


})

const SegmentHeader= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',


})

const FormInput= styled('div')({
   display: 'block'


})

// ===========================================
const SpotLightForm = () => {
  return (
    <Wrapper>
      <div>       SpotLight Form - reducer main currently = true    </div>
      <FormContainer elevation = {2}>

        <FormHeader> New Spotlight</FormHeader>

        <FormWrapper>
          <form>

            <FormSegmentWrapper>
              <SegmentHeader>
                Goal or Objective
              </SegmentHeader>

              <FormInput>
                <input/>  
              </FormInput>
            </FormSegmentWrapper>

            <FormSegmentWrapper>
              <SegmentHeader>
                Target date to complete
              </SegmentHeader>

              <FormInput>
                <input/>  
              </FormInput>            
            </FormSegmentWrapper>

            <FormSegmentWrapper>
              <SegmentHeader>
                Estimated time to complete
              </SegmentHeader>

              <FormInput>
                <input/>  
              </FormInput>            
            </FormSegmentWrapper>


            <FormSegmentWrapper>
              <SegmentHeader>
                Spotlight note
              </SegmentHeader>

              <FormInput>
                <input/>  
              </FormInput>            
            </FormSegmentWrapper>


            <FormSegmentWrapper>
              <SegmentHeader>
                Make default popup
              </SegmentHeader>

              <FormInput>
                <input type = 'checkbox' />  
              </FormInput>            
            </FormSegmentWrapper>


            <button>Submit</button>

          </form>
        </FormWrapper>

      </FormContainer>

    </Wrapper>
  )
}

export default SpotLightForm
