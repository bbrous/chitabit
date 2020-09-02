import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'

import InitialStore from '../../app/redux/store/InitialStore'

import Tasks from './aTryTasks'
import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// Material UI Context Menu  -------------------------------------

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
 
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
// Material UI Context Menu  -------------------------------------





// React Sortable HOC ----------------------------------------------

import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";
import { veryLightGrey } from '../../styles/colors'
 
// React Sortable HOC ----------------------------------------------






const BodyWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '100vw',
  height: '100vh',

})

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '99vw',
  height: '99vh',
  border: '1px solid orange'
})

const TryIt= styled(NavLink)({
  display: 'block',
  position: 'absolute',
  top: '1rem',
  right: '1rem',

  height: '2rem',
  width: '2rem',
  backgroundImage: 'radial-gradient(#FF6347, #DC143C)',
  borderRadius: '50px',

  '&:hover': {
    backgroundImage: 'radial-gradient(#FF6347, orange)',
  }

})

const PageHeader= styled('div')({
  fontSize: '1.2rem',
  color: 'orange',
  marginBottom: '2rem',
})

const ContentArea = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})

const ContentAreaSmall = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  backgroundColor: veryLightGrey
})



// =============================================

const ATry = (props) => {


  return (
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>


<ContentAreaSmall>
    
  <Tasks/>

</ContentAreaSmall>
        
       







        </ContentArea>
      </Wrapper>
    </BodyWrapper>

  )
}

const actions = {
  // showSpotLight,
  // closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(ATry)



