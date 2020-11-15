import React, {Fragment} from 'react'
import{chitOrange, mediumGrey} from '../../../styles/colors'
import {connect} from 'react-redux'
import{ openModal, deleteSpotlight} from '../../../app/redux/actions/mainActions'
import { styled, createMuiTheme, useTheme } from "@material-ui/core/styles"


import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';

// Dialog Box imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    /*
      Deleting a spotlight requires 3 steps
        1. checking for parent in spotlight to be deleted
           if yes - reducer will require parent spotlight's 
           taskArray to be updated with spotlight to be deleted removed
        2. checking for children spotlights in spotlight to be deleted
           if yes - reducer will require child Id's to reset their
           parentId's to null
        3.  passing the spotlight Id to be deleted

        Passed argument to action is: 
        {spotlightId:  'spot id',
          parentTaskArray: {parentId: [new task array]}
          childrenSpotlightArray: [children Id's]
        }
        
    */


    // props.deleteSpotlight( props.id  )

    
    // console.log('[Menu Spotlight Popup handleDeleteSpotlight] --- type are : ', props.id)
    // console.log('[Menu Popup] |||||||||||||||||||  ')
    // }

  // 1. get parent of Spotlight to be delted
 

// &&&&&&&&&&&&&&  Delete Task from parentTaskArrayInitial   &&&&&&&&&&&&&&&&&&

// -----create modified parent task array without spot id
        let filteredParentTaskArray, filteredChildTaskArray // array to be returned with deleted spotlight

        let parentId = props.display.private.data.spotlightData.spotlights[props.id].parent

        let parentTaskArrayInitial = props.display.private.data.spotlightData.spotlights[parentId].taskArray


        filteredParentTaskArray = parentTaskArrayInitial.filter(function(spotlight){

          return spotlight.taskItem !== 'spot_2'
        })

// ------create array of children spotlights--------------------

 
      let spotlightTaskArray = props.display.private.data.spotlightData.spotlights[props.id].taskArray

      filteredChildTaskArray = spotlightTaskArray.filter(function(spotlight){

        return spotlight.type === 'spotlight'
      })

      let childSpotlightArray = []
      filteredChildTaskArray.map((child) => {

        
        childSpotlightArray.push(child.taskItem)
        return childSpotlightArray

      })

          // console.log('[Menu Popup] |||||||||||||||||||  ')

          // console.log('[Menu Spotlight Popup AFTER Filter] --- spotlightTaskArray are : ', spotlightTaskArray)

          // console.log('[Menu Spotlight Popup handleDeleteSpotlight] --- filteredChildTaskArray are : ', filteredChildTaskArray)

          // console.log('[Menu Spotlight Popup handleDeleteSpotlight] --- childSpotlights are : ', childSpotlightArray)

          // // console.log('[Menu Spotlight Popup AFTER Filter] --- parentTaskArray are : ', filteredParentTaskArray)

          // console.log('[Menu Popup] |||||||||||||||||||  ')

// &&&&&&&&&&&&&&  Delete Task from parentTaskArrayInitial   &&&&&&&&&&&&&&&&&&




    props.deleteSpotlight( 
      {
          spotlightId:  props.id,
          parentId: parentId,
          parentTaskArray: filteredParentTaskArray,
          childrenSpotlightArray: childSpotlightArray 
        }
      )
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



    // ----Dialog Functions -----------------------------------

    
      const [dialogOpen, setDialogOpen] = React.useState(false);
      const theme = useTheme();
      const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
      const handleClickDialogOpen = () => {
        setDialogOpen(true);
      };
    
      const handleDialogClose = () => {
        setDialogOpen(false);
      };
    
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
                   
                    // onClick={()=> handleDeleteSpotlight()}
                    onClick={handleClickDialogOpen}

                    >Delete Spotlight</MenuItemStyled>
                    <MenuItemStyled onClick={handleClose}>Reset Begin Date</MenuItemStyled>
                    <MenuItemStyled onClick={handleClose}>Create a chit</MenuItemStyled>
                    <MenuItemStyled onClick={handleClose}> Create Note </MenuItemStyled>
                  


                  </MenuList>
                </ClickAwayListener>
              </Paper>
              
            </Grow>
          )}
        </Popper>



        <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Are you sure you wish to delete this spotlight?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
            All child tasks and their notes will be lost.

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogClose} color="primary">
            Cancel 
          </Button>
          <Button onClick={()=> handleDeleteSpotlight()} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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