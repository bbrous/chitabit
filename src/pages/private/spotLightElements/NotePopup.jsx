import React, {Fragment} from 'react'
import{chitOrange, mediumLightGrey} from '../../../styles/colors'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Popover from '@material-ui/core/Popover';

import NotesIcon from '@material-ui/icons/Notes';


 
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
  

  '&:hover': {
    backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const StyledPopover= styled('div')({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  border: '1px solid lightgrey',
  padding: '3px',
  fontSize: '.8rem',
  color: 'white',
  margin: '.25rem .5rem ',
  cursor: 'pointer',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ===========================================
const NotePopup = (props) => {
  let taskId = props.id
  let noteId = props.noteId
  let noteObject = props.spotlightData
  let note = noteId ? noteObject.notes[noteId].note:  ''


  // let note = props.spotlightData.notes 

  console.log('[NOTE POPUP ] -- inoteObjectd is ', note)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log('[NotePopup] id is : ', event.currentTarget.id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <NoteIcon 
        id = {taskId}
        aria-describedby={id} 
        variant="contained" 
        color="primary" 
        onClick={handleClick}/>
        
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <StyledPopover onMouseOut = {()=> handleClose()}>
        {note}
        
        </StyledPopover>
      </Popover>
    </Fragment>
  );

      }
export default NotePopup
