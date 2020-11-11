import React, {Fragment} from 'react'
import{chitOrange, mediumGrey} from '../../../styles/colors'
import {connect} from 'react-redux'
import{ openModal, deleteSpotlight} from '../../../app/redux/actions/mainActions'
import { styled, createMuiTheme } from "@material-ui/core/styles"


import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';

const theme = createMuiTheme(); // allows use of mui theme in styled component
const MenuItemStyled = styled(MenuItem)({
  color: 'black',
  fontSize: '.8rem'

  
})


const Hamburger= styled(MenuIcon)({
  
  color:chitOrange,
  fontSize: '1.2rem',
  margin: '0 .5rem',
 cursor: 'pointer',
   

 '&:hover': {
  color: mediumGrey
},
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



const MenuPopupSpotlight = (props) => {

  const {id, type} = props

  // console.log('[Menu Popup] --- id are : ', id)
  // console.log('[Menu Popup] --- type are : ', type)
  // console.log('[Menu Popup] |||||||||||||||||||  ')

  const openSpotlightForm = ()=>{
    props.openModal('spotLightForm', props.id  )

    }


   const handleDeleteSpotlight = ()=>{
    props.deleteSpotlight( props.id  )
    console.log('[Menu Spotlight Popup handleDeleteSpotlight] --- type are : ', props.id)
    console.log('[Menu Popup] |||||||||||||||||||  ')
    }
   
  // ----- Popup Menu actions  -------------------------
 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    
  return (
    <Fragment>
            <Hamburger
       ref={anchorRef}
       aria-controls={open ? 'menu-list-grow' : undefined}
       aria-haspopup="true"
       onClick={handleToggle}
      
      
      
      />


<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    
                  <MenuItemStyled onClick={handleClose}> Cancel </MenuItemStyled>
                    
                    <MenuItemStyled 
                    onClick={()=> openSpotlightForm()}
                    
                    >Edit Spotlight  </MenuItemStyled>
                    <MenuItemStyled 
                   
                    onClick={()=> handleDeleteSpotlight()}

                    >Delete Spotlight</MenuItemStyled>
                    <MenuItemStyled onClick={handleClose}>Create a chit</MenuItemStyled>
                    <MenuItemStyled onClick={handleClose}> Create Note </MenuItemStyled>
                  


                  </MenuList>
                </ClickAwayListener>
              </Paper>
              
            </Grow>
          )}
        </Popper>



    </Fragment>
  )
}


 
const actions = {
 
  openModal,
  deleteSpotlight
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(MenuPopupSpotlight)