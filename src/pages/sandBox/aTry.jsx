import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled} from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';













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
  display: 'block',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})

const DivArea = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '90%',
  height: '90%',
  backgroundColor: 'yellow'
})

const SectionArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '90%',
  height: '90%',

  '& div' :{
    display: 'block',
    width: '5rem',
    height: '5rem',
    margin: '3rem',
    backgroundColor: 'white',


  }
})

const FormArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '90%',
  height: '90%',

  '& div' :{
    display: 'block',
    width: '5rem',
    height: '5rem',
    margin: '3rem',
    backgroundColor: 'lightgrey'

  }


})

const ItemWrapper = styled(MenuItem)({
  color: 'blue',
  fontSize: '.9rem',
  textDecoration:'underline'


})

const MenuWrapper = styled(Menu)({
  border: '1px solid grey',
  borderRadius: '3px',


})



// =================================================

const initialState = {
  mouseX: null,
  mouseY: null,
};





const ATry = (props) => {

  const [state, setState] = useState(initialState);

  const handleClick = (evt, id) => {
    evt.preventDefault();

    console.log('[aTry] id: ', id)

    setState({
      mouseX: evt.clientX - 2,
      mouseY: evt.clientY - 4,
    });
  };
  
  const handleClose = () => {
    setState(initialState);
  };



    let spotLightStatus = props.view.private.displaySpotLight

    console.log('[aTry] - displaySpotLight status BEFORE :  ' , spotLightStatus )

    // console.log('[aTry] timeRemainingObject: ', timeRemainingObject)

   

  return (
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>
        <div> Put Content Here </div>
        <DivArea>
          <SectionArea>
            <div
            id = 'section1'
             onContextMenu={(evt)=>handleClick(evt,'section1')} style={{ cursor: 'context-menu' }}> Section 1 </div>
            <div
            id = 'section2'
             onContextMenu={handleClick} style={{ cursor: 'context-menu' }}> Section 2 </div>
            <div
            id = 'section3'
             onContextMenu={handleClick} style={{ cursor: 'context-menu' }}> Section 3 </div>
            <div
            id = 'section4'
             onContextMenu={handleClick} style={{ cursor: 'context-menu' }}> Section 4 </div>


          </SectionArea>

          <FormArea>
            <div> Form 1 </div>
            <div> Form 2 </div>
            <div> Form 3 </div>
            <div> Form 4 </div>


          </FormArea>
          <MenuWrapper  elevation= {3}
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <ItemWrapper onClick={handleClose}>Edit</ItemWrapper>
        <ItemWrapper onClick={handleClose}>Display Similar Sections</ItemWrapper>
        <ItemWrapper onClick={handleClose}>Delete </ItemWrapper>
        
      </MenuWrapper>
      

        </DivArea>









        </ContentArea>
      </Wrapper>
    </BodyWrapper>

  )
}

const actions = {
  showSpotLight,
  closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(ATry)



