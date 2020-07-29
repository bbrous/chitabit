import React , {useState} from 'react'
import HeaderMain from './mainElements/Header_main'

import{chitOrange } from '../../styles/colors'



// import MainLanding from './elements_landing/Main_Landing'
// import HeaderMain from './mainElements/Header_main'


// import { NavLink, withRouter, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import{openCloseSidePanel} from '../../app/redux/actions/mainActions'

// import Modal from '../../components/modal/Modal.jsx'
import JournalButtons from '../../components/JournalButtons'




//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// &&&&   TEMP Initial Store Import -- Get from Database
// import InitialStore from '../../app/redux/store/InitialStore'




//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// import Info from './Info'
 
// import TwoPartyNav from './navElements/twoParty/TwoPartyNav'
// import PersonalNav from './navElements/personal/PersonalNav'
// import WorkNav from './navElements/work/WorkNav'
// import JournalNav from './navElements/journal/JournalNav'
// import ReportsNav from './navElements/reports/ReportsNav'
// import NoticesNav from './navElements/notice/NoticesNav'
// import InfoNav from './navElements/InfoNav'

// import IconNav from './navElements/IconNav'
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
backgroundColor: 'orange',
  [theme.breakpoints.down('sm')] : {
    
  },

})

//  ---- phone Navigation panels -------


const SideNavWrapper= styled('div')({

  display: 'none',
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
  height: '100%',
  paddingTop:  '1.75rem',
  backgroundColor: 'green',
 

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const WysiwygWrapper= styled('div')({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  height: '1.75rem',
  width: '100%',
  backgroundColor: 'aqua',
 
   
})

const Content= styled('div')({
  display: 'flex',
  flexDirection: 'column',

  marginTop: '1.75rem',
  width: '100%',
  backgroundColor: 'pink',
 
   
})

//=======================================================

const Main = (props) => {

  


  // let view = props.view.private.display
  // let view = props.view.private.view
  // console.log('[Main ]... props --- ', view)

  let viewSidePanel = props.view.private.displaySidePanel
 
  console.log('[Main ]... props --- ', props.view)
 
  // let viewSidePanel = 'show'
  // let modalShow = props.view.private.modalDisplayed

  // const [viewSidePanel, setViewSidePanel ] = useState('hide');
  
  // func handleSidePanelChange - open or close the side panel

  const handleSidePanelChange = (evt)=>{
    evt.persist()
    const newSidePanelView = (viewSidePanel==='show') ? 'hide': 'show'

    console.log('[Main - handleSidePanelChange]... props passed --- ', newSidePanelView)



    props.openCloseSidePanel(newSidePanelView)


  }

  return (
    <BodyWrapper>

       


      <HeaderMain/>
      <ToolbarSpacer/>

      <MainWrapper>

        <SideNavWrapper>
FILTERS HERE
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



Nav Stuff
          

          </SidePanelWrapper>

{/*   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */}
          <ContentArea>

            <WysiwygWrapper>WYSIWYG</WysiwygWrapper>

            <Content>
              
              
              <div>
                Content Area
              </div>

              <JournalButtons/>


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
  openCloseSidePanel 
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(Main)
 