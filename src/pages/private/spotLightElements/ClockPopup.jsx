import React, {Fragment} from 'react'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../../styles/colors'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Popover from '@material-ui/core/Popover';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


 
import Button from '@material-ui/core/Button';
// -----------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component


// ------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeComponent= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Time= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeLabel= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

  


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
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ------------------------

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1rem',
  margin: '0 .5rem .3rem 0',
 cursor: 'pointer',
   

  


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

// ===========================================
const ClockPopup = (props) => {
  let taskId = props.id
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, taskId) => {
    setAnchorEl(event.currentTarget);
    console.log('[ClockPopup] id is : ', event.currentTarget.id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          <TimeWrapper>
<TimeRow>

<TimeComponent>
              <Time>1</Time>
              <TimeLabel>days</TimeLabel>

            </TimeComponent>

            <TimeComponent>
              <Time>1</Time>
              <TimeLabel>hrs</TimeLabel>

            </TimeComponent>

            <TimeComponent>
              <Time>1</Time>
              <TimeLabel>min</TimeLabel>

            </TimeComponent>

            <TimeComponent>
              <Time>1</Time>
              <TimeLabel>secs</TimeLabel>

            </TimeComponent>
</TimeRow>




          </TimeWrapper>

          <ControlsWrapper>
            <button> Stop </button>
            <button> Reset </button>
          </ControlsWrapper>



        </Wrapper>
        </StyledPopover>
      </Popover>
    </Fragment>
  );

      }
export default ClockPopup
