import React , {useState, useEffect} from 'react'
import HeaderMain from './mainElements/Header_main'

import{chitOrange, veryLightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow} from '../../styles/colors'

import Modal from '../../components/modal/Modal.jsx'
import InitialMessage from './journalElements/InitialMessage'
import Day from './journalElements/Day'
import JournalNav from './navElements/JournalNav'
import SpotLightPage from './spotLight/SpotLightPage'
import Journal from './Journal'
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

  [theme.breakpoints.down('sm')] : {
    
  },

})

const MainContentWrapper= styled('div')({

  display: 'block',
  height: '95%',
  paddingTop: '3rem',
  paddingLeft: '3rem',
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


  [theme.breakpoints.down('sm')] : {
    paddingTop: '1.5rem',
    paddingLeft: '0',
    height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    paddingLeft: '3rem',

  }

})

//  ---- phone Navigation panels -------


const SidePanelWrapper= styled('div')({
  display: 'block',
  position: 'absolute',

  backgroundColor: veryLightGrey,
  width: '15rem',

  zIndex: '31',


  [theme.breakpoints.down('sm')] : {
    
    left: '3rem',
    '&.hide' : {
      left: '-12rem'
    },
  
    '&.show' : {
      left: '3rem'
    },
    
  },

  
  
  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',
    // display: 'none'

    '&.hide' : {
      left: '-15rem'
    },
  
    '&.show' : {
      left: '0rem'
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

    

    background: chitOrange
  },
  

})

const ContentArea = styled('div')({

  display: 'block',
  marginLeft: '15rem',
  height: '100%',

  
 

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '3rem',
  },

  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',

  }

})

const BottomNavSpacer = styled('div')({

  display: 'none',
  height: '3rem',


  [theme.breakpoints.down('sm')] : {
    display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    display:  'none',

  }

})

//=======================================================

const Main = (props) => {

   

  let viewSidePanel = props.view.private.displaySidePanel

 
  /*  Show Spotlight modal ------------------------------------------
      - modal on a timer 
      - gets / sets status -- redux store

      - if the spotlight was "unseen" ... spotlight will be shown
         for "displayTime milliseconds"... then status will be set to "seen"

  */


  


  

  const handleSidePanelChange = (evt)=>{
    evt.persist()
    const newSidePanelView = (viewSidePanel==='show') ? 'hide': 'show'

    // console.log('[Main - handleSidePanelChange]... props passed --- ', newSidePanelView)



    props.openCloseSidePanel(newSidePanelView)


  // Handle Spotlight

  


  }





    let modalShow = props.view.private.modalDisplayed




// ##################################################

    let displaySpotLightPage = props.view.private.displaySpotLightPage

    // console.log('[Main] displaySpotlightPage :  ', props.view.private.displaySpotLightPage)
// ##################################################



  return (
  <BodyWrapper>

    {modalShow && <Modal/>}
    <HeaderMain/>
    <ToolbarSpacer/>

    <MainWrapper>


      <MainContentWrapper>

        <SidePanelWrapper className = {viewSidePanel}>


          <Handle onClick = {handleSidePanelChange}>

            {viewSidePanel === 'hide' && 
              <KeyboardArrowRightIcon style={{ color: 'white' }}/>
            }

            {viewSidePanel === 'show' && 
                <KeyboardArrowLeftIcon style={{ color: 'white' }}/>
            }
          </Handle>



          {/* {view === 'twoParty' &&  <TwoPartyNav people = {people} />  }
          {view === 'personal' &&  <PersonalNav categories = {categories}/>  }
          {view === 'work' &&  <WorkNav
            people = {people}
            categories = {categories}
          />  }
          {view === 'journal' &&  <JournalNav/>  }
          {view === 'reports' &&  <ReportsNav/>  }
          {view === 'notices' &&  <NoticesNav/>  } */}
<JournalNav/>
        

        </SidePanelWrapper>


          <ContentArea>
            {/* {view === 'twoParty' &&  <TwoParty chits = {chits} people = {people}/>  }
            {view === 'personal' &&  <Personal chits = {chits} categories = {categories}/>  }
            {view === 'work' &&  <Work 
            chits = {chits} 
            people = {people}
            categories = {categories}
            />  }
            {view === 'journal' &&  <Journal/>  }
            {view === 'reports' &&  <Reports/>  }
            {view === 'notices' &&  <Notices chits = {chits} />  } */}

            Main Content area
            <Journal/>

          </ContentArea>


          <BottomNavSpacer/>
      </MainContentWrapper>
    </MainWrapper>





  </BodyWrapper>
  )
}

const actions = {
  openCloseSidePanel,

}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(Main)
 
