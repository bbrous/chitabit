import React, {Fragment} from 'react'
import { chitOrangeLight, chitOrange, chitBlueDull} from '../styles/colors';

// import {convertMS} from '../../../app/helpers/dateHelper'


import { styled, makeStyles, createMuiTheme } from "@material-ui/core/styles"

import InfoIcon from '@material-ui/icons/Info';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------
const InfoMessage= styled('div')({
  display: 'block',
  textAlign: 'left',
  // textJustify: 'inter-word',
  fontSize: '.7rem',
  padding: '.5rem',
  color: 'black',
  maxWidth: '10rem'
  })

  const Info= styled(InfoIcon)({
    display: 'block',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: chitOrange,
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  
  
  })

// =================================================

export function InfoPopperLeftBottom(msg) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopper = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return(
    <Fragment> 
      <Info onMouseOver={handlePopper}/>

      <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}

      anchorPosition={{
        vertical: 'bottom',
        horizontal: 'left',
        left: 200,
        top: 400
      }}

      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <InfoMessage className={classes.InfoMessage}>
       {msg}
        
        </InfoMessage>
    </Popover>

  </Fragment>
  )
}