import React from 'react'
import {connect} from 'react-redux'
import { chitOrangeLight, chitOrange, chitBlueDull} from '../../styles/colors';

import{closeSpotLightPage} from '../../app/redux/actions/mainActions'

import SpotLight from './spotLightElements/X_SpotLight'
/* Read me

SpotLight page contains all spotlights

*/
import {InfoPopperLeftBottom} from '../../components/InfoPoppers'


import { styled, makeStyles, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import InfoIcon from '@material-ui/icons/Info';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit'

// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%', 
  height: '90vh',
  padding: '4vh 1% 0 1vh',

  backgroundColor: chitOrangeLight



})

const CloseSpotlightPage= styled('div')({
  display: 'block',
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  color: 'red',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer'


})

// const Info= styled(InfoIcon)({
//   display: 'block',
//   position: 'absolute',
//   top: '1rem',
//   right: '1rem',
//   color: chitOrange,
//   fontWeight: 'bold',
//   textDecoration: 'underline',
//   cursor: 'pointer'


// })

const SpotLightsWrapper= styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxHeight: '95%',
  marginTop: '1.5rem',
  overflow: 'auto',
 
  borderTop: '1px solid lightgrey'



})

const SingleWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12rem',
  height: '12rem',
  margin: '4px',


  backgroundColor: 'yellow',


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

const InfoMessage= styled('div')({
  display: 'block',
  textAlign: 'left',
  // textJustify: 'inter-word',
  fontSize: '.7rem',
  padding: '.5rem',
  color: 'black',
  maxWidth: '10rem'
  })


// ======================================

const SpotLightPage = (props) => {

  // material ui Popover stuff ----------------
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

 // material ui Popover stuff ----------------




  // get spotlights from Redux store
  let spotlightsObject = props.storeData.private.data.spotlights

  // convert object of objects to array of objects
  let unsortedSpotlightsArray = Object.values(spotlightsObject)
  const sortedSpotlightsArray = unsortedSpotlightsArray.sort((a, b) => (a.startDate > b.startDate) ? -1 : 1)
  console.log('[SpotLight Page] props: ', sortedSpotlightsArray)

  let spotlightsDisplayed

    // main function to be displayed in Render

    function displaySpotlights(spotlights){

      // map through the chitsArray to display the individual ones
        const allSpotlights =spotlights.map((spotlight, index) => {
    
         
        const {id, type, popupShow, goal, startDay, endEst, endEstModified, author} = spotlight
        
        return(
    
          <SpotLight
            key = {id}
            id = {id}
            type = {type}
            popupShow = {popupShow}
            goal = {goal}
            startDay = {startDay}
            endEst = {endEst}
            endEstModified = {endEstModified}
            author = {author}
             

          
          />

            

        
    
    
        )}) // end allRows map
    
        if(sortedSpotlightsArray.length > 0){
    
      
         return allSpotlights
        }
  }//end function displaySpotlights

  const closeSpotlightpage = ()=>{


    // console.log('[SPOTLIGHTPAGE] closeSpotLightPage cicked', props)
   
    props.closeSpotLightPage()
  
  }
  return (
    <Wrapper>

      <CloseSpotlightPage onClick = {()=> closeSpotlightpage()}>
        Close Spotlight Page
      </CloseSpotlightPage>

        {InfoPopperLeftBottom(` For multiple spotlights - a random one chosen is  to 
        be displayed as a Popup when you first come to the journal - 
        unless a single spotlight is chosen as default, or
        Popups are disabled `)}
      
      {/* <Info onClick={handlePopper}/>
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
        }}

        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <InfoMessage className={classes.InfoMessage}>
          In the case of many spotlights - a random one chosen is  to 
          be displayed as a popup when you first come to the journal - 
          unless a single spotlight is chosen as default, or
          Popups are disabled
          
          </InfoMessage>
      </Popover> */}
      <SpotLightsWrapper>

        
          {displaySpotlights(sortedSpotlightsArray)}
     
      

        {/* <SingleWrapper>
          <div> 2nd Wrapper </div>
          <div> duh </div>
          <div> duh </div>
        </SingleWrapper> */}






      </SpotLightsWrapper>
      
      
    </Wrapper>
  )
}

const actions = {
  closeSpotLightPage 
} 

const mapState = state => ({
  storeData: state
});

export default connect(mapState, actions)(SpotLightPage)

