import React, {Fragment} from 'react'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../../styles/colors'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Popover from '@material-ui/core/Popover';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


 
import Button from '@material-ui/core/Button';
// -----------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1rem',
  margin: '.25rem .5rem',
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
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <ClockIcon aria-describedby={id} variant="contained" color="primary" onClick={handleClick}/>
        
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

        
        <div>Clock icon popup here - id - {props.id} </div>
        <div>The content of the Popover.</div><div>The content of the Popover.</div><div>The content of the Popover.</div><div>The content of the Popover.</div>
        </StyledPopover>
      </Popover>
    </Fragment>
  );

      }
export default ClockPopup
