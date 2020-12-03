import React, {Fragment, useState, useEffect, useRef} from 'react'
import { useForm, Controller } from "react-hook-form";
import WYSIWYGEditor from "./wysiwyg/WYSIWYGEditor";
import{chitOrange, mediumLightGrey} from '../../../styles/colors'
import {connect} from 'react-redux'
import{updateNote, addNote} from '../../../app/redux/actions/mainActions'
import { EditorState, convertToRaw } from 'draft-js'
import safeJson from "js-string-escape"
import unEscape from 'unescape-js'

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
  display: 'flex',
 
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '1.5rem',
  fontSize: '.8rem',
  color: 'grey',
  backgroundColor: 'white',
  width: '80%',
  margin: '4px',


  '& .left' :{
    fontStyle: 'italic',
    fontSize: '.65rem',
  
    margin: '0 8px 0 8px',
  
  },

  '& .right' :{
    overflow: 'hidden',
    width: '70%',
    minWidth: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
     
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const FormWrapper= styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 borderTop: '1px solid lightgrey',
  // display: 'block',

 height: '100%',
  width: '100%',
  
 margin: '4px 0',
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

const DialogContentWrapper= styled(DialogContent)({
 
  
  // width: '80%', 
 
border: 'none'

})


const ButtonContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf : 'end',
 width: '100%',
 textDecoration: 'underline',
 textDecorationColor: 'orange',
 fontSize: '1rem',
 
  
   [theme.breakpoints.down('sm')] : {
     // height: '1.25rem',
     // backgroundColor: 'red'
   },
 })

 const CancelButton= styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 position: 'absolute',
 right: '8px',
  fontSize: '.85rem',
  height: '2rem',
 textDecoration: 'underline',
 textDecorationColor: 'orange',

  // backgroundColor: 'red',
  textTransform: 'none',
   [theme.breakpoints.down('sm')] : {
     // height: '1.25rem',
     // backgroundColor: 'red'
   },
 })

 const SaveButton= styled(Button)({
  display: 'flex',
 
  justifyContent: 'center',
  alignItems: 'center',
 
 

 textDecoration: 'underline',
 textDecorationColor: 'orange',
 textTransform: 'none',
  // backgroundColor: 'red',
 
   [theme.breakpoints.down('sm')] : {
     // height: '1.25rem',
     // backgroundColor: 'red'
   },
 })





// ===========================================
const NotePopup = (props) => {
 


  const {noteId, type, spotlightData, spotlightId, taskId, noteHolderId} = props

  let headerTitle
    if(type === 'spotlight' ){
      headerTitle = spotlightData.spotlights[spotlightId].title
    }
    if(type === 'task' ){
      headerTitle = spotlightData.spotlights[spotlightId].tasks[noteHolderId].title
    }

  console.log('[NOTE POPUP -^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

  console.log('[Note Popup]-- passed noteId: ' , noteId)
  console.log('[Note Popup]-- passed type: ' , type)
  console.log('[Note Popup]-- passed spotlightData: ' , spotlightData)
  console.log('[Note Popup]-- passed spotlightId: ' , spotlightId)
  console.log('[Note Popup]-- passed taskId: ' , taskId)
  console.log('[Note Popup]-- passed noteHolderId: ' , noteHolderId)

  console.log('[NOTE POPUP -^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

  
// THIS WORKS
  // let databaseSavedText = '{"blocks":[{"key":"6ifmk","text":"Hello Shelby","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":5,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}},{"key":"hqfo","text":"Good Girl","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":4,"length":5,"style":"color-rgb(41,105,176)"}],"entityRanges":[],"data":{}}],"entityMap":{}}'

  let databaseSavedText = "{\"blocks\":[{\"key\":\"fg5pu\",\"text\":\"A new note\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":6,\"length\":4,\"style\":\"color-rgb(184,49,47)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"

  
  // let initialText = ''

 










  // ------React-hook-form functions --------------

  let initialText

  // if no previous note exists 
  if(!noteId) {
    // console.log('NotePopup - is note ? -- no ', noteId)
    initialText = ''


  }
 

  // a previous note exists - get initial text from notes

  if(noteId) {

    /* ++++++++++++++++++++++++++++++++++++++++++++++++
      ++++++++++++++++++++++++++++++++++++++++++++++++



    1. noteId is passed from Spotlight (ONLY) at this moment
    2. but it may be ""  or a value_note
    3. to make this work - I had to reconstruct the noteId with myNoteId
       using spotlightId + '_note'

    SO - DOES NOT WORK WITH TASK HERE ******
    SO - DOES NOT WORK WITH TASK HERE ******
    SO - DOES NOT WORK WITH TASK HERE ******
    SO - DOES NOT WORK WITH TASK HERE ******
    SO - DOES NOT WORK WITH TASK HERE ******
    SO - DOES NOT WORK WITH TASK HERE ******




      ++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++*/
  
   let myNoteId = noteHolderId + '_note'


    console.log('NotePopup - Yes there is a note Id -- displayNoteId ', noteId)
    console.log('NotePopup - Yes there is a tasId in if -- displayNoteId ', taskId)


    let myNoteHolderId = noteHolderId + '_note'
    console.log('NotePopup - Yes there is a note Id -- myNoteHolderId ', myNoteHolderId)
    /*   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
          Error -cant find note
    */
   let RAWBoolah = props.display.private.notes[myNoteId].note
    let boolah = props.display.private.notes[myNoteId].note 
    let boolahParsed=   JSON.stringify(boolah)
    
    console.log('NotePopup -  Redux initialText noteHolderId   ',   noteHolderId  )
    console.log('NotePopup -  Redux initialText RAWBoolah   ',   RAWBoolah  )
    console.log('NotePopup -  Redux initialText boolah   ',   boolah  )
    console.log('NotePopup -  Redux initialText boolah boolahParsed   ',   boolahParsed  )
    
     
 
 
    initialText = stringToDraftState(RAWBoolah)
  }

  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
    
    defaultValues: ''
})

const onSubmit = data => {


    if(!noteId && data.note) {

      // No note exists, but form filled out --- > Create a new note

      // console.log('[Note POPUP ]-- NO noteId + note = **  addNote with : ', data.note)



      let noteObject = {
        note:  data.note, 
        type: type, 
        spotlightId: spotlightId, 
        taskId: taskId, 
        noteHolderId: noteHolderId

      }
      
  
      props.addNote(noteObject) 


    }

    if(noteId && data.note) {
      // console.log('[Note POPUP ]-- noteId + note = updateNote with : ', data.note)

      let noteObject = {
        note: data.note, 
        noteHolderId: noteHolderId,
        type: type

        // type: type, 
        // spotlightId: spotlightId, 
        // taskId: taskId, 
        // spotlightData: spotlightData
      }
      
      // alert(data.note)
  
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
        <CancelButton onClick={handleClose} color="primary">
            Cancel
          </CancelButton>
        
        <HeaderTitle id="scroll-dialog-title">
          <div className = 'left'>note for 
            {type === 'spotlight' && <span> spotlight: </span>}
            {type === 'task' && <span> task : </span>}
          </div>
          <div className = 'right'>{headerTitle}</div>
          
        </HeaderTitle>
        
        <FormWrapper onSubmit = {handleSubmit(onSubmit) }>
        <DialogContentWrapper dividers={scroll === 'paper'}>
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
        </DialogContentWrapper>
        <ButtonContainer>
        <SaveButton type ="submit" color="primary">
            Save and continue
          </SaveButton>
          <SaveButton type ="submit" color="primary" onClick = {handleClose}>
            Save and exit
          </SaveButton>


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
