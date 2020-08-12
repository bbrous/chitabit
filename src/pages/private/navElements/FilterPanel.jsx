import React from 'react'
import {connect} from 'react-redux'
// import{openModal} from '../../../app/redux/actions/mainActions'

import Paper from '@material-ui/core/Paper'


import {  makeStyles, styled, createMuiTheme } from "@material-ui/core/styles"

import { chitBlueDull, chitOrange, chitOrangeLight, darkGrey } from '../../../styles/colors';

import AddCircleIcon from '@material-ui/icons/AddCircle'
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx'// for checkbox

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'white',
  backgroundColor: 'white',
  height: '100vh',
  width: '98%',
  margin: '0 auto',
 
overflow: 'hidden',


})

const ToolbarSpacer= styled('div')({

  display: 'block',

  height: '2.25rem',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    height: '1.25rem',
    backgroundColor: 'red'
  }

})

const SpotLightWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '96%',
  height: '4.25rem',
  margin: '1.25rem 0 .3rem 0',
  marginLeft: '0',
  backgroundColor: 'white',

  [theme.breakpoints.down('sm')] : {
    margin: '.25rem 0 .3rem 0',
    // backgroundColor: 'red'
  }

})

const SpotLightLink= styled('div')({
  display: 'block',
  marginTop: '.7rem',
  fontSize: '.9rem',
  color: 'red',
  textDecoration: 'underline',
  fontWeight: 'bold',
  cursor: 'pointer',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }

})

const SpotLightLinksWrapper = styled('div')({

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'absolute',

  bottom: '5px',

  width: '90%',
  color: 'black',
  

  fontSize: '.8rem',



})



const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: chitOrange,
  fontSize : '1.5rem',
  
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    borderRadius: '50px',
  },

})

const DisableWrapper = styled('div')({

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',
  left: '5px',
  bottom: '5px',

  width: '70%',
  color: darkGrey,
 

  fontSize: '.85rem',



})



const FilterWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '96%',
  height: '75%',
   
  marginLeft: '0',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }

})

const Header= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  

   color: 'black',
   fontSize: '1rem',
   fontWeight: 'bold',
  margin: '.5rem 0 .5rem 0',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }

})


const YearFilter= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

   color: 'blue',
   fontSize: '1rem',
   
  margin: '0 0 1rem 0',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }

})


const TopicWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '96%',
  height: '49%',
  // margin: '1.25rem 0 .3rem 0',
  marginLeft: '0',
  backgroundColor: 'white',
  overflowX: 'hidden',
  overflowY: 'auto',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }



})

const KeyWordWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '96%',
  height: '49%',
  margin: '4px 0 4px 0',
  marginLeft: '0',
  backgroundColor: 'white',
  overflowX: 'hidden',
  overflowY: 'auto',
  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }



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
// =========================================

const FilterPanel = (props) => {

  const classes = useStyles();

  // console.log('[FILTERPANEL props are: ', props)

  //funct newSpotLight opens the modal to display spotlight form
  const newSpotLight = ()=>{

    /* convert the chit Id to an array of 1 element so
     detailChit can map it ... map is because detailChit modal
       sometimes maps multiple chitsIdArray
    */
    // let chitsIdArray = []
    // chitsIdArray.push(chitId.chitId)

    console.log('[FILTERPANEL cicked')

    // props.openModal('spotLightForm', 'Brad')
  
  }



  return (
    <Wrapper>
      <ToolbarSpacer/>
      <SpotLightWrapper elevation = {3}>
        <SpotLightLink 
        onClick = {()=> newSpotLight()} 
        > SpotLights </SpotLightLink>

        <SpotLightLinksWrapper >
        <DisableWrapper>
          <Checkbox
          
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          inputProps={{ 'aria-label': 'decorative checkbox' }}
          {...props}
          />
          <div> show popup  </div>
        </DisableWrapper>

 <AddCircleIconWrapper/>
        </SpotLightLinksWrapper>
      </SpotLightWrapper>

      <FilterWrapper>
        <Header>
          Filters
        </Header>
        <YearFilter> 
            Year Search here
          </YearFilter>
        <TopicWrapper elevation = {3}>
          
          Topic Wrapper

        </TopicWrapper>

        <KeyWordWrapper elevation = {3}>

          Keyword wrapper

        </KeyWordWrapper>
   
      </FilterWrapper>

    </Wrapper>
  )
}

 

const actions = {
  // openModal 
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(FilterPanel)
