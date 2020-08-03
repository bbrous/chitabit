import React from 'react'


import Paper from '@material-ui/core/Paper'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import { chitRedDark } from '../../../styles/colors';





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
  flexDirection: 'column',
  justifyContent: 'center',
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

  fontSize: '.8rem',
  color: 'red',
  textDecoration: 'underline',
  fontWeight: 'bold',
  cursor: 'pointer',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  }

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

const FilterPanel = () => {
  return (
    <Wrapper>
      <ToolbarSpacer/>
      <SpotLightWrapper elevation = {3}>
        <SpotLightLink> SpotLight </SpotLightLink>
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


export default  FilterPanel
