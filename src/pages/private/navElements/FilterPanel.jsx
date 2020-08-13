import React from 'react'
import {connect} from 'react-redux'
// import{openModal} from '../../../app/redux/actions/mainActions'

import Paper from '@material-ui/core/Paper'


import {  makeStyles, styled, createMuiTheme } from "@material-ui/core/styles"

import { chitBlueDull, chitOrange, chitOrangeLight, darkGrey } from '../../../styles/colors';

import AddCircleIcon from '@material-ui/icons/AddCircle'
import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'

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



// =========================================

const FilterPanel = (props) => {

 

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
         <SpotlightCheckbox/>
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
