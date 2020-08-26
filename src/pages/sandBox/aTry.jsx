import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// Material UI Context Menu  -------------------------------------

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Material UI Context Menu  -------------------------------------





// React Sortable HOC ----------------------------------------------

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

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
  display: 'block',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})

const DivArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '300px',
  height: '90%',
  backgroundColor: 'yellow',

  '& ul': {
    width: '98%',
    backgroundColor: 'purple',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },

  '& li': {
    width: '98%',
    backgroundColor: 'white'
    
  }


})

const ItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '99%',
  height: '3rem',
  margin: '2px 0',
  
})





 

const initialState = {
  mouseX: null,
  mouseY: null,
};
// =================================================
const SortableItem = SortableElement(({ handleClick,value }) => 


{

  const [state, setState] = React.useState(initialState);

  const handleRightClick = (event) => {
    event.preventDefault();

    console.log( '[aTry] event', event.currentTarget.id)
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
     

    });
  };

  const handleClose = () => {
    setState(initialState);
  };



  return(

   

<ItemWrapper
onContextMenu={handleRightClick} 
onClick = {handleClose}
id = {value.id}
><div>Title: {value.title}</div> <div>Time: {value.Time}</div>

<Menu
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
        <MenuItem onClick={handleClose}>Copy - {value.id}</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
      </Menu>
</ItemWrapper>
 
)}

)
    







const SortableList = SortableContainer(({ items }) => {
  return (

    <ul>
      {items.map((value, index) => (
         <Fragment>
        <SortableItem key={`item-${index}`} index={index} value={value} 
       
        />
        </Fragment>
      ))}
    </ul>
  );
});





const ATry = (props) => {

  // const [state, setState] = useState(initialState);


  const [items, setItems] = useState([
    {id: "Item 1", title: "Item 1", Time: '0889977'},
    {id: "Item 2", title: "Item 2", Time: '0889977'},
    {id: "Item 3", title: "Item 3", Time: '0889977'},
    {id: "Item 4", title: "Item 4", Time: '0889977'},
    {id: "Item 5", title: "Item 5", Time: '0889977'},
    {id: "Item 6", title: "Item 6", Time: '0889977'}
  ]);


  useEffect(() => {
    console.log(items)
    
  }, [items]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };



  // const handleClick = (evt, id) => {
  //   evt.preventDefault();

  //   console.log('[aTry] id: ', id)

  //   setState({
  //     mouseX: evt.clientX - 2,
  //     mouseY: evt.clientY - 4,
  //   });
  // };
  
  // const handleClose = () => {
  //   setState(initialState);
  // };



    // let spotLightStatus = props.view.private.displaySpotLight

    // console.log('[aTry] - displaySpotLight status BEFORE :  ' , spotLightStatus )

    // console.log('[aTry] timeRemainingObject: ', timeRemainingObject)



  return (
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>
        <div> Put Content Here </div>
        <DivArea>
         
          {/* <ItemWrapper>Item 1 </ItemWrapper>
          <ItemWrapper>Item 2 </ItemWrapper>
          <ItemWrapper>Item 3 </ItemWrapper>
          <ItemWrapper>Item 4 </ItemWrapper>
          <ItemWrapper>Item 5 </ItemWrapper>
          <ItemWrapper>Item 6</ItemWrapper>
          <ItemWrapper>Item 7 </ItemWrapper> */}
         

          <SortableList items={items} onSortEnd={onSortEnd} />



        </DivArea>
        <div>
       
        </div>

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



