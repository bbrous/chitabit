import React, {Fragment, useState, useEffect, useRef} from 'react'
import { useForm, Controller } from "react-hook-form";

import{chitOrange, mediumLightGrey} from '../../../styles/colors'
import {connect} from 'react-redux'
import{setNote} from '../../../app/redux/actions/mainActions'


import { styled, createMuiTheme } from "@material-ui/core/styles"


import NotesIcon from '@material-ui/icons/Notes';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField  } from "@material-ui/core";

 
// import Button from '@material-ui/core/Button';
// -----------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

const NoteIcon= styled(NotesIcon)({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
  margin: '0 .5rem .3rem 0',
  cursor: 'pointer',
  
  '&.green': {
    backgroundColor: 'green',
  },

  '&:hover': {
    backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const HeaderTitle= styled('div')({
 

  fontSize: '.8rem',
  color: 'grey',
  backgroundColor: 'white',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DialogWrapper= styled(DialogContentText)({
 

  fontSize: '.9rem',
  color: 'black',
  backgroundColor: 'white',
  

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
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

const FormWrapper= styled('form')({
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'flex-start',

  display: 'block',
  
  backgroundColor: 'yellow',
  minWidth: '30rem',
  minHeight: '15rem',
  


})



// ===========================================
const NotePopup = (props) => {
  let taskId = props.id

  let note = props.note
  console.log('[NOTE POPUP - note', note)


  // ------React-hook-form functions --------------

  let initialValues
  if(!note) {
    initialValues = {
      note: ''
    }
  }
 
  if(note) {
    initialValues = {
      note: note
    }
  }

  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
    
    defaultValues: initialValues
})

const onSubmit = data => {

  alert(data.note)
    // console.log(' [SpotlightForm] , no Id so add new ', passedId)
    // // no Id so create new ID and add spotlight
    // let newSpotlightId = spotlightIdGenerator(allSpotlights)
    
    
    

    // props.addSpotLight(data, newSpotlightId) 
  
  
  
  }
  // -------Dialog functions ------------

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleSetNote= ()=>{
  props.setNote( 
    {
      
        note: note,
         
        
      }
    )
    setOpen(false)
  }

  return (
    <Fragment>
      {!note && 
        <NoteIcon 
          id = {taskId}
           
          onClick={handleClickOpen('paper')}
          
          />
        
      }
      {note && 
        <NoteIcon 
         
          onClick={handleClickOpen('paper')}
          className = 'green' 
          />
        
      }

<Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <HeaderTitle id="scroll-dialog-title">note for Title 1</HeaderTitle>
        <FormWrapper onSubmit = {handleSubmit(onSubmit) }>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogWrapper
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            

            <Controller as={StyledMultiline} name="note" 
                  InputProps={{ outline: 'none' }}
                  
                  control={control} 
                  defaultValue="" 
                  multiline
                  variant="outlined"
                   
                  /> 

            
          </DialogWrapper>
        </DialogContent>
        <DialogActions>
        <Button type ="submit" color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

        </DialogActions>
        </FormWrapper>
      </Dialog>
    </Fragment>
  );

      }
      const actions = {
        setNote
      }
      
      const mapState = state => ({
        display: state
      })
      
      export default connect(mapState, actions)(NotePopup)
