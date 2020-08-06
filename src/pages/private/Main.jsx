import React , {useState, useEffect} from 'react'
import HeaderMain from './mainElements/Header_main'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow} from '../../styles/colors'

import Modal from '../../components/modal/Modal.jsx'
import InitialMessage from './journalElements/InitialMessage'
import Day from './journalElements/Day'
import FilterPanel from './navElements/FilterPanel'
import SpotLight from './spotLight/SpotLight'
// import HeaderMain from './mainElements/Header_main'


// import { NavLink, withRouter, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import{openCloseSidePanel, showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

// import Modal from '../../components/modal/Modal.jsx'
import JournalButtons from '../../components/JournalButtons'

import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const BodyWrapper= styled('div')({
  display: 'block',
  
  // backgroundColor: 'white',
  backgroundColor: 'white',
  height: '100vh',

overflow: 'hidden',

// background: 'yellow',


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



const MainWrapper= styled('div')({

  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: '960px',
  minHeight: '600px',
  height: '100%',
// backgroundColor: 'orange',
  [theme.breakpoints.down('sm')] : {
    
  },

})

//  ---- phone Navigation panels -------


const SideNavWrapper= styled('div')({

  display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  position: 'absolute',
  zIndex: '55',
  backgroundColor: 'pink',

  [theme.breakpoints.down('xs')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',

    width: '3rem',
  
    height: '100%',
    color: 'white',
    background: 'grey'
  },
  

})





const BottomNavWrapper= styled('div')({

  display: 'none',

  background: 'grey',

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100vw',
    height: '3rem',
zIndex: '10000',
    color: 'white',
backgroundColor: '#363738',
  },

  [theme.breakpoints.down('xs')] : {
    display: 'none',
 
  }

})

const SidePanelWrapper= styled('div')({
  display: 'block',
  position: 'absolute',
  // display: 'none',
// paddingBottom: '.5rem',
  backgroundColor: 'lightgrey',
  width: '15rem',
  height: '100%',
  zIndex: '31',

 
  
  
  [theme.breakpoints.down('sm')] : {
    marginLeft: '0',
    // display: 'none'

    '&.hide' : {
      left: '-15rem'
    },
  
    '&.show' : {
      left: '0rem'
    },
  },
  [theme.breakpoints.down('xs')] : {
    
    left: '3rem',
    '&.hide' : {
      left: '-12rem'
    },
  
    '&.show' : {
      left: '3rem'
    },
    
  },

 

})

const Handle= styled('div')({

  display: 'none',
  position:'absolute',
  width: '1.5rem',
  height: '3rem',
  borderRadius: '0 5px 5px 0',
  

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    right: '-1.5rem',
    top: '3rem',

    

    background: chitOrange,
  },
  

})




const BottomNavSpacer = styled('div')({

  display: 'none',

  height: '3rem',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    display:  'none',

  }

})


// ----- Content Area here -------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const MainContentWrapper= styled('div')({
  
  display: 'block',
  height: '100%',
 
 



  [theme.breakpoints.down('sm')] : {
    paddingTop: '1.5rem',
    paddingLeft: '0',
    height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    paddingLeft: '3rem',

  }

})



/**This area --------------------------+++++++++++++++++++++++++++
 * 
 * COntent Area has to be pushed to the right for
 * full size screens::::  !!!!!!!
 * 
 */

const ContentArea = styled('div')({

  display: 'block',
  position: 'relative',
  marginLeft: '15rem',
  height: '95vh',
  paddingTop:  '1.75rem',
  overflow: 'hidden',



  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const SpotLightModal = styled('div')({

  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: chitOrangeLight,
  zIndex: '12',


  [theme.breakpoints.down('sm')] : {
    // display: 'block'

  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const CloseSpotLight = styled('div')({

  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: '2px',
  right: '2px',
  height: '2rem',
  width: '2rem',
  color: 'red',
  fontSize: '1.2rem',
  borderRadius: '50px',
  zIndex: '30',
  '&:hover': {
    backgroundColor: chitOrangeLight

  },

  [theme.breakpoints.down('sm')] : {
    // display: 'block'

  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const CountDown = styled('div')({

  display: 'flex',
  position: 'absolute',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  bottom: '2px',
  right: '8px',
  width: '2rem',
  color: 'red',
  fontSize: '1rem',
  zIndex: '30'

})


const SpotLightWrapper = styled(Paper)({

  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '50%',
  width: '50%',
  backgroundColor: 'yellow',
  marginTop: '3rem',
 

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})



const Content= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
  width: '100%',
  height: '90%',
  marginBottom: '3px',
  backgroundColor: 'white',
  borderTop: '1px solid lightgrey',
  borderBottom: '1px solid lightgrey',
  // backgroundColor: 'green',
  '&::-webkit-scrollbar': {
    width: '0.75em' 
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.3)',
    border: '2px solid rgba(0,0,0,.1)',
    borderRadius: '5px'
  },
  overflow: 'auto',
})

const ProgressBar= styled('div')({

  display: 'block',
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '8px',
  // border: '1px solid blue',
  backgroundColor: 'none'

})

const ProgressBarInner= styled('div')({

  display: 'block',
  height: '100%',
  borderRight: '2px solid #CFD0D1',
  backgroundColor: lightGrey

})


//=======================================================

const Main = (props) => {

  

  let viewSidePanel = props.view.private.displaySidePanel

 
  /*  Show Spotlight modal
      - modal on a timer 
      - gets / sets status -- redux store

  */

    let spotLightStatus = props.view.private.displaySpotLight
    let displayTime = 9000
    
    if(spotLightStatus === 'unseen') {
      props.showSpotLight()
  
  
      setTimeout(() => props.closeSpotLight() , displayTime)
    }
  


  // let view = props.view.private.display
  // let view = props.view.private.view
  // console.log('[Main ]... props --- ', view)



  /* const - lastSectionDisplayed
      determine the last section worked on from Redux store
      if no section exists then the Initial MessageChannel
      will be displayed in render
  */
  const lastSectionDisplayed = props.view.private.journalDisplay.lastSection

 
  // console.log('[Main ]... props --- ', props.view)

  // let modalShow = props.view.private.modalDisplayed

  // const [viewSidePanel, setViewSidePanel ] = useState('hide');
  
  // func handleSidePanelChange - open or close the side panel

  

  const handleSidePanelChange = (evt)=>{
    evt.persist()
    const newSidePanelView = (viewSidePanel==='show') ? 'hide': 'show'

    console.log('[Main - handleSidePanelChange]... props passed --- ', newSidePanelView)



    props.openCloseSidePanel(newSidePanelView)


  // Handle Spotlight

  

    

    if(spotLightStatus === 'unseen') {
      props.showSpotLight()


      setTimeout(() => props.closeSpotLight() , 2000)
    }


  }


  // Handle countdown to end popup display ---------

    let displayTimeSec = displayTime / 1000
    const [timeLeft, setTimeLeft] = useState(displayTimeSec);

    useEffect(() => {
      // exit early when we reach 0
      if (!timeLeft) return;

      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
      

    }, [timeLeft]);

  // convert time left to a string % to style of progress width 
    let progressMade = ((displayTimeSec - timeLeft)/displayTimeSec) * 100
    let progress = progressMade.toString() + '%'

    let modalShow = props.view.private.modalDisplayed

    

  return (
    <BodyWrapper>

{modalShow && <Modal/>}


      <HeaderMain/>
      <ToolbarSpacer/>

      <MainWrapper>
      
        <SideNavWrapper>
        

        </SideNavWrapper>   

        <MainContentWrapper>
        
        <SidePanelWrapper 
        className = {viewSidePanel}
        
        >


          <Handle 
          onClick = {handleSidePanelChange}
          >
            {viewSidePanel === 'hide' && 
              <KeyboardArrowRightIcon style={{ color: 'white' }}/>
            }

            {viewSidePanel === 'show' && 
                <KeyboardArrowLeftIcon style={{ color: 'white' }}/>
            }
          </Handle>



          <FilterPanel/>
          

          </SidePanelWrapper>

{/*   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}
          <ContentArea>

          {spotLightStatus === 'show' && 
            <SpotLightModal>


              
              <SpotLightWrapper>
              <CloseSpotLight
                onClick = {()=>{
                  props.closeSpotLight()
                }}
              >
                X</CloseSpotLight>
                <SpotLight/>
                {/* <CountDown>{timeLeft} </CountDown> */}

                <ProgressBar> 

<ProgressBarInner style={{width: progress}}>  {'\u00A0'} </ProgressBarInner>

</ProgressBar>




              </SpotLightWrapper>
              

            </SpotLightModal>
          }

 
            
          <JournalButtons/>
            <Content>

              {lastSectionDisplayed && 
                <InitialMessage/>
              }


              <Day/>
              <Day/>

              
              
              

            </Content>
            
          </ContentArea>

{/*   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}



          <BottomNavSpacer/>
        </MainContentWrapper>

      </MainWrapper>

      <BottomNavWrapper> 
nav here 
      </BottomNavWrapper> 
      
    </BodyWrapper>
  )
}

const actions = {
  openCloseSidePanel,
  showSpotLight,
  closeSpotLight 
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(Main)
 
