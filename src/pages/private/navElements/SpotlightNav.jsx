import React, { useState } from 'react'
import {connect} from 'react-redux'
import{changeDisplaySpotlight,   openCloseSidePanel} from '../../../app/redux/actions/mainActions'



import AddCircleIcon from '@material-ui/icons/AddCircle'
import {  makeStyles, styled, createMuiTheme } from "@material-ui/core/styles"

import { chitBlueDull, chitRedDark, chitOrangeLight, darkGrey, lightGrey, chitOrange } from '../../../styles/colors';
import Paper from '@material-ui/core/Paper'; 


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------


const Wrapper= styled('div')({

  display: 'block',
  backgroundColor: lightGrey,

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const HeaderWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',

  
  height: '3rem',
  backgroundColor: '#F6F7F8',
 
  borderRadius: '0',
  marginBottom: '2px',
  

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const Header= styled('div')({

  display: 'block',
  fontSize: '1.2rem',
  
  color: chitRedDark,

  



})

const NewWrapper= styled(Paper)({

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  
  height: '2rem',
  backgroundColor: 'white',
  borderRadius: '0',
  marginBottom: '2px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', s
  }

})

const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: chitOrange,
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    borderRadius: '50px',
  },

})




const New= styled('div')({

  display: 'block',
  marginRight: '6px',
  
  color: chitBlueDull,
  fontWeight: 'bold'
  

})



const FilterWrapper= styled(Paper)({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
  height: '2rem',
 
borderRadius: '0',
margin: '7px 0 0 0',
backgroundColor: 'white' ,
color: 'black',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', s
  }

})
const RadioBox= styled('div')({
  
  // padding: '0 5%',
 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '0 5px'
})

const RadioBoxLabel= styled('div')({
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 5px',
  color: chitRedDark
  
  
  

})

const SpotLightsContainer= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  marginTop: '2px',
  maxHeight: '65vh' ,
  overflowY: 'auto',
  paddingBottom: '3px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const SpotlightWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
  color: chitBlueDull,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
    '&:hover' : {
      backgroundColor: chitOrangeLight,
      
    },


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const SpotlightWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
 
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  color: 'white',
  backgroundColor: ' #606062 ',


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const TitleWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap' ,
  width: '100%',
 
  fontSize: '.9rem',
  margin: '.2rem .1rem',
  
  fontWeight: 'bold',
  borderRadius: '0',
 
 


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const TimeRemainingWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
 
  fontSize: '.85rem',
  color: darkGrey,
  margin: '.2rem .1rem',
 
  borderRadius: '0',
 
 


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const TimeRemainingWrapperOrange= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
 
  fontSize: '.85rem',
  margin: '.2rem .1rem',
  color: chitOrange,
  borderRadius: '0',
 
 


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const AllSpotLightsWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   
  color: 'black',
  
  fontWeight: 'bold',
  
  width: '100%',
  height: '2rem' ,
  fontSize: '.95rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  border: '1px solid orange', 
    '&:hover' : {
      backgroundColor: chitOrangeLight,
      
    },


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})
const AllSpotLightsWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   
  color: 'white',
  backgroundColor: ' #606062 ',
  fontWeight: 'bold',
  

  width: '100%',
  height: '2rem' ,
  fontSize: '.95rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',



  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

// ----------------------


const spotlights = {
  spot1 : {
    id : 'spot1',
    timeStamp: 1556990799000,   //May 4, 2019  not right
    title: 'This is spot 1',
    est: 'May 4, 2019  '
  },
  spot2 : {
    id : 'spot2',
    timeStamp: 1556990799222,   //May 4, 2019 not right
    title: 'This is spot 2',
    est: 'May 5, 2019 '
  },

  spot3 : {
    id : 'spot3',
    timeStamp: 1556990799777,   //May 4, 2019 not right
    title: 'This is spot 3',
    est: 'May 8, 2019  '
  },
}

// =========================================

const SpotlightNav = (props) => {

  const [sortDirection, setSortDirection] = useState('latest')   


  // ##################TEMP ####################


  console.log('[SpotlightNav] - props.display' , props.display.private.spotLightDisplay.displayedSpotLightId)

  let stateSpotlightId =  props.display.private.spotLightDisplay.displayedSpotLightId
  // let stateSpotlightId = props.view.displayId
  // let stateSpotlightId = 'all'
  // let stateSpotlightId = 'spot2'


    // ##################TEMP ####################



  /* func changeSort ---------------------------------
     desc: changes the order of the spotlights displayed
           (latest or oldest - first) 
  ---------------------------------------------------*/
  const changeSort = (evt)=>{
    evt.persist()

    setSortDirection(evt.currentTarget.value)
   
  }// end changeSort


    /* func handleChangeSpotlight ---------------------------------
     desc: filters the chits diplayed depending on name clicked
     Spotlight selected is stored in Redux store... default - 'all' 
  ---------------------------------------------------*/
  
  const handleChangeSpotlight= (evt)=>{
   console.log('[SpotlightNav] - evt.target is' , evt.currentTarget.id)
    props.changeDisplaySpotlight(evt.currentTarget.id)
    props.openCloseSidePanel('hide')
    }

    // 1_ convert spotlights object of objects into an array
     

  // ######################TEMPORARY#############################


   // let spotlightsArray = Object.values(props.spotlights)
      let spotlightsArray = Object.values(spotlights)


  // ######################TEMPORARY#############################

    // 2_ choose the sort direction by state indicator

      if(sortDirection === 'latest' ){
      spotlightsArray.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
      }
      if(sortDirection === 'oldest' ){
        spotlightsArray.sort((a, b) => (a.timestamp > b.timestamp) ? -1 : 1)
      }

  // 3_ Map the spotlights for display

  const displaySpotlights =spotlightsArray.map((spot, index) => {


    let spotTitle =spot.title
    let dateEst = spot.est

  /* func chooseDisplayType ---------------------------------
     desc: css changes highlight of person selected
  ---------------------------------------------------*/

  const chooseDisplayType =()=>{
    
    if(stateSpotlightId !== spot.id){

    return(

      <SpotlightWrapper elevation={1}
        key = {index} 
        id = {spot.id}
        onClick = {(evt)=>{
          handleChangeSpotlight(evt)
        }}
      >
          <TitleWrapper>{spotTitle}</TitleWrapper>
          <TimeRemainingWrapper
          > est complete: {dateEst}</TimeRemainingWrapper>
        </SpotlightWrapper>
      

    )}
      
    if(stateSpotlightId === spot.id){

      return(

        <SpotlightWrapperSelected elevation={1}
          key = {index} 
          id = {spot.id}
          onClick = {(evt)=>{
            handleChangeSpotlight(evt)
          }}
        >
          <TitleWrapper>{spotTitle}</TitleWrapper>
          <TimeRemainingWrapperOrange
          > est complete: {dateEst}</TimeRemainingWrapperOrange>



        </SpotlightWrapperSelected>
        
  
      )}   
        }
        
    return chooseDisplayType()


    }) // end function displaySpotlights
    

  return (
    <Wrapper>

         <HeaderWrapper elevation={3}>
         <Header> Spotlights   </Header>
          
        </HeaderWrapper>
        <NewWrapper elevation={1}>
          <New> new spotlight </New>
 
          <AddCircleIconWrapper/>
        </NewWrapper>

        <FilterWrapper elevation={1}>


        <RadioBox>
          <input type="radio" id="sort" name="sort" value="asecending"
          defaultChecked = "checked"
          // onChange = {changeSort}
          />
          <RadioBoxLabel >latest first

              </RadioBoxLabel>
          </RadioBox>        
          <RadioBox>
          <input type="radio" id="sort" name="sort" value="descending"
          // onChange = {changeSort}
          />
          <RadioBoxLabel >oldest first

              </RadioBoxLabel>
          </RadioBox>           
        </FilterWrapper>



      <SpotLightsContainer>

      {stateSpotlightId !== 'all' &&
              <AllSpotLightsWrapper elevation={1} 
              id = 'all'
              onClick = {(evt)=>{
                handleChangeSpotlight(evt)
              }}
              >
              All Chits
              </AllSpotLightsWrapper>
            
            }
            {stateSpotlightId === 'all' &&
              <AllSpotLightsWrapperSelected elevation={1} 
              id = 'all'
              onClick = {(evt)=>{
                handleChangeSpotlight(evt)
              }}
              >
              All Spotlights
              </AllSpotLightsWrapperSelected>
            
            }   
   
        {displaySpotlights}

      </SpotLightsContainer>

    </Wrapper>
  )
}

 

const actions = {
  changeDisplaySpotlight,
  openCloseSidePanel
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(SpotlightNav)
