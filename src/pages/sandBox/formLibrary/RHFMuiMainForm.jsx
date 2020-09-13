import React from 'react'


// import { useForm } from "react-hook-form";


// import MuiTextBox from './muiComponents/MuiTextBox'


import TextBoxMui from "./muiComponents/TextBoxMui";
import { useForm, Controller } from "react-hook-form";


 


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"
 

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
 
 
})




// const RHFMuiMainForm = () => {
 
//   const {register, handleSubmit, watch, errors, control} = useForm({
//     defaultValues: {
//       completed: false
      
//     }
// })


//   const onSubmit = data => alert(JSON.stringify(data))



//   return (
//     <Wrapper>
     


//     <Form onSubmit = {handleSubmit(onSubmit)}>


//         <FormSegmentWrapper>

//           <SegmentHeader>
//             RHFMuiMainForm MAIN FORM
//           </SegmentHeader>


//           <FormInput>





// <MuiTextBox/>

//           </FormInput>


//         </FormSegmentWrapper>



//       <SubmitWrapper>
//         <input type="submit"/>
//       </SubmitWrapper>

//     </Form>

//     </Wrapper>
//   )
// }
// =====================================
const Form = ({ defaultValues, children, errors, control, onSubmit }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
}
function Input({ register, name, ...rest }) {
  return <input name={name} ref={register} {...rest} />;
}


// =====================================

export default function RHFMuiMainForm() {
  const onSubmit = data =>  alert(JSON.stringify(data))

  return (
    <Form onSubmit={onSubmit}>
      <TextBoxMui name="firstName" />
      <TextBoxMui name="lastName" />
       

      <Input type="submit" value = 'submit'/>
    </Form>
  );
}


 
