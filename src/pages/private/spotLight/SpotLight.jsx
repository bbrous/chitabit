import React, {Fragment} from 'react'
 
import {connect} from 'react-redux'
import{chitOrange, chitLightYellow, chitOrangeLight, chitBlueDull, chitRedDark, mediumGrey, chitBlueVeryVeryLight} from '../../../styles/colors'

import { makeStyles,styled, createMuiTheme } from "@material-ui/core/styles"
 

import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx'// for checkbox

// ##############################################

  import InitialStore from '../../../app/redux/store/InitialStore'

//###############################################

import RemainingTime from './RemainingTime'


import { NavLink, withRouter, useLocation} from 'react-router-dom'

// import{openCloseSidePanel, showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import Paper from '@material-ui/core/Paper'




const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------


const Wrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  paddingTop: '3rem',
  margin: '4px',


  backgroundColor: chitBlueVeryVeryLight,


})


const Goal= styled('div')({
  display: 'block',
  textAlign: 'center',
   
  
  // height: '100%',
  width: '100%',
  fontSize: '1.2rem',
  color: chitRedDark,

 
})

// ------------------------------------

const LinksWrapper= styled('div')({
  display: 'flex',
  width: '90%',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '8px',
  '& div' : {
    color: chitBlueDull,
    textDecoration: 'underline',
    cursor: 'pointer'
  }

})

const DefaultWrapper= styled('div')({
  display: 'flex',
  width: '90%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',
  top: '3px',
  left: '3px',
  '& div' : {
    color: mediumGrey,
    fontSize: '.7rem',
    lineHeight: '1rem',
     
  }

})

const Delete= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const DeleteIcon= styled(DeleteForeverIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},
})


const Edit= styled('div')({
  display: 'block', 
  // position: 'absolute',
  bottom: '5px',
  right: '5px',
  height: '1rem',
  width: '1rem',
  color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},

  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


const IconEdit= styled(EditIcon)({
fontSize: '1.3rem',
color: chitOrange,

'&:hover' : {
  color: chitOrangeLight,
  cursor: 'pointer',

 
},
})

const useStyles = makeStyles({
  root: {
    padding: 0,
    marginRight: 8,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(39,34,88,.3)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },

    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: chitOrange,
    boxShadow: 'inset 0 0 0 1px #F58634',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },

  },
})

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}

 
//===============================================================

const SpotLight = (props) => {
  const [checked, setChecked] = React.useState(true);
  const {id, type, popupShow, goal, startDay, endEst, endEstModified, author} = props
 
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Wrapper key = {id}>

<DefaultWrapper>


<StyledCheckbox />


 
          <div> default Popup  </div>
        </DefaultWrapper>

        <Goal> {goal} </Goal>
        <div> {author} </div>


      <LinksWrapper>
        <Edit
                // onClick = {handleEdit}
          > 
            <IconEdit/>
        </Edit>

        <Delete
                // onClick = {handleDelete}
          > 
            <DeleteIcon/>
        </Delete>

      </LinksWrapper>
       
    </Wrapper>
  )

}



// const actions = {
//   showSpotLight,
//   closeSpotLight
// }

const mapState = state => ({
  view: state,
  data: state.private.data.spotlights
});

export default connect(mapState)(SpotLight)

// export default connect(mapState, actions)(SpotLight)