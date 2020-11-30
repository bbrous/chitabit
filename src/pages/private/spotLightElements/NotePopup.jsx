import React, {Fragment, useState, useEffect, useRef} from 'react'
import { useForm, Controller } from "react-hook-form";
import WYSIWYGEditor from "./wysiwyg/WYSIWYGEditor";
import{chitOrange, mediumLightGrey} from '../../../styles/colors'
import {connect} from 'react-redux'
import{updateNote, addNote} from '../../../app/redux/actions/mainActions'

import safeJson from "js-string-escape"

import stringToDraftState from './wysiwyg/utils/stringToDraftState'

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

const DialogContainer= styled('div')({
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'flex-start',
 alignItems: 'flex-start',

  fontSize: '.9rem',
  color: 'black',

 
  padding: '0',

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


const FormWrapper= styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  // display: 'block',
 
 height: '100%',
  width: '100%',
  
 margin: '0',
 padding: '0',
})


const DialogWrapper= styled('div')({
 

  fontSize: '.9rem',
  color: 'black',
  // backgroundColor: 'aqua',
  margin: '0',
  padding: '0',
  minWidth: '30rem',
  width: '100%',

  '&:focused': {
    borderColor: 'white',
  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

 
})

const StyledMultiline= styled(TextField)({
 
  
  // width: '80%', 
  
  padding: '0',
  width: '100%',
  fontSize: '.5rem',
  borderColor: 'white',
 
  


  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
 

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&:active fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },


})


const ButtonContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignSelf : 'end',
 width: '100%',
  // backgroundColor: 'red',
 
   [theme.breakpoints.down('sm')] : {
     // height: '1.25rem',
     // backgroundColor: 'red'
   },
 })





// ===========================================
const NotePopup = (props) => {
 


  const {noteId, type, spotlightData, spotlightId, taskId} = props

  console.log('[NOTE POPUP - ===========================================')

  console.log('[Note Popup]-- passed noteId: ' , noteId)
  console.log('[Note Popup]-- passed type: ' , type)
  console.log('[Note Popup]-- passed spotlightData: ' , spotlightData)
  console.log('[Note Popup]-- passed spotlightId: ' , spotlightId)
  console.log('[Note Popup]-- passed taskId: ' , taskId)

  console.log('[NOTE POPUP - ===========================================')

  

  let databaseSavedText = '{"blocks":[{"key":"6ifmk","text":"Hello Shelby","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":5,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}},{"key":"hqfo","text":"Good Girl","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":4,"length":5,"style":"color-rgb(41,105,176)"}],"entityRanges":[],"data":{}}],"entityMap":{}}'

  
  // let initialText = ''

 










  // ------React-hook-form functions --------------

  let initialText

  // if no previous note exists 
  if(!noteId) {
    // console.log('NotePopup - is note ? -- no ', noteId)
    initialText = ''

  }
 
  let passedNoteId 
  // a previous note exists
  if(noteId) {
    
    passedNoteId = noteId
    // console.log('NotePopup - is note ? -- YES ', passedNoteId)
    initialText = stringToDraftState(passedNoteId)
  }

  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
    
    defaultValues: ''
})

const onSubmit = data => {


    if(!noteId && data.note) {

      // console.log('[Note POPUP ]-- NO noteId + note = **  addNote with : ', data.note)

      let noteObject = {
        note: data.note, 
        // type: type, 
        // spotlightId: spotlightId, 
        // taskId: taskId, 
        // spotlightData: spotlightData
      }
      
      alert(data.note)
  
      props.addNote(noteObject) 


    }

    if(noteId && data.note) {
      // console.log('[Note POPUP ]-- noteId + note = updateNote with : ', data.note)

      let noteObject = {
        note: data.note, 
        // type: type, 
        // spotlightId: spotlightId, 
        // taskId: taskId, 
        // spotlightData: spotlightData
      }
      
      alert(data.note)
  
      props.updateNote(noteObject) 



    }


    if(!noteId && !data.note) {
      // console.log('[Note POPUP ]-- NO noteId + No note = Forgetta bout it : ')
   }

    if(noteId && !data.note) {
      // console.log('[Note POPUP ]-- YES noteId + but No note = Will not happen... because empty object created by WYSIWG : ')
    }




  
  
  
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
  props.updateNote( 
    {
      
        note: noteId,
         
        
      }
    )
    setOpen(false)
  }

 

  return (
    <Fragment>
     
      {!noteId && 
        <NoteIcon 
          id = {taskId}
           
          onClick={handleClickOpen('paper')}
          
          />
        
      }
      {noteId && 
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

        <DialogContainer>  
        <p>Task3 /</p> <p><span style={{color: "red"}}><ins>Spot 22 note</ins></span></p>
        <HeaderTitle id="scroll-dialog-title">note for Title 1</HeaderTitle>
        
        <FormWrapper onSubmit = {handleSubmit(onSubmit) }>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogWrapper
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            

            {/* <Controller as={StyledMultiline} name="note" 
                  InputProps={{style: { 
                     
                    fontSize: '.9rem',
                    margin: '0', 
                    padding: '3px'
                  
                  }}}
                  
                  control={control} 
                  defaultValue="" 
                  multiline
                  variant="outlined"
                   
                  />  */}

<Controller
          as={<WYSIWYGEditor />}
          name="note"
          control={control}
          initialNote = {initialText}
        />

          </DialogWrapper>
        </DialogContent>
        <ButtonContainer>
        <Button type ="submit" color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

        </ButtonContainer>
        </FormWrapper>
        </DialogContainer>
      </Dialog>
    </Fragment>
  );

      }
      const actions = {
        updateNote,
        addNote
      }
      
      const mapState = state => ({
        display: state
      })
      
      export default connect(mapState, actions)(NotePopup)
