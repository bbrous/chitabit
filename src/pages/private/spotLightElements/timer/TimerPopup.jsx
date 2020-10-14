import React, {Fragment, useState, useEffect, useRef} from 'react'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, } from '../../../../styles/colors'


import TimerDisplay from './TimerDisplay'
 
// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"

import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RefreshIcon from '@material-ui/icons/Refresh';

// ---------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

// ------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  backgroundColor: mediumGrey,
  padding: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ControlsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4px',
  backgroundColor: 'white',
  borderRadius: '3px',
  width: '100%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ------------------------

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1rem',
  margin: '0 .75rem .3rem 0',
 cursor: 'pointer',
   

 '&:hover': {
  color: mediumLightGrey
},



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledPopover= styled('div')({
  backgroundColor: mediumGrey,
  borderRadius: '5px',
  border: '1px solid lightgrey',
  
  fontSize: '.8rem',
  color: 'white',
 
  cursor: 'pointer',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledButton= styled(Button)({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  height: '1rem',
  fontSize: '.8rem',
  verticalAlign: 'middle',
  backgroundColor: 'orange',
  textTransform: 'none',
  cursor: 'pointer',
  padding: '8px 5px 6px 5px',
  margin: '3px',
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    color: mediumGrey
  },
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

 

// ===========================================
const ClockPopup = (props) => {
  let taskId = props.id
  console.log('[ClockPopup] taskId is : ', taskId )

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, taskId) => {
    setAnchorEl(event.currentTarget);
    // console.log('[ClockPopup] id is : ', event.currentTarget.id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // --- timer controls-------------------------



  const [isActive, setIsActive] = useState(null)
  const [isPaused, setIsPaused] = useState(null)
  const countRef = useRef(null)

  const handleStart = () => {
    // start button logic here
  }

  const handlePause = () => {
    // start button logic here
  }

  
  const handleResume = () => {
    // start button logic here
  }
  


// %%%%%%%%%%%%  TEMP  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const clockStatus = 'inactive'  // inactive, running, paused
// %%%%%%%%%%%%  TEMP  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 


// ---- main ClockPoPup return JSX  -----------------------------
  return (
    <Fragment>
      <ClockIcon 
        id = {taskId}
        aria-describedby={id} 
        variant="contained" 
        color="primary" 
        onClick={(evt)=>handleClick(evt)}/>
        
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
        <StyledPopover 
        // onClick = {()=> handleClose()}

        >

        
        <Wrapper>

        <TimerDisplay/>
        

          <ControlsWrapper>
            {clockStatus === 'inactive'  &&  
            <StyledButton
              variant="contained"
               
               
              endIcon={<PlayArrowIcon />}
            >
                Start
            </StyledButton>
          }
            {clockStatus === 'running'  &&  
            <StyledButton
            variant="contained"
             
             
            endIcon={<PauseIcon />}
          >
              Pause
          </StyledButton>
            
            
            }
            {clockStatus === 'paused'  &&  
            <StyledButton
            variant="contained"
             
             
            endIcon={<PlayArrowIcon />}
          >
              Resume
          </StyledButton> 
            
            }
            <StyledButton
            variant="contained"
             
            //  fontSize = 'large'
            endIcon={<RefreshIcon />}
          >
              Reset
          </StyledButton> 
            
            
            
            
            
          </ControlsWrapper>



        </Wrapper>
        </StyledPopover>
      </Popover>
    </Fragment>
  );

      }
export default ClockPopup
