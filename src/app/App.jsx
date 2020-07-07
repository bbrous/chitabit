import React, { Component, Fragment } from 'react';
 

import { Route, Switch } from 'react-router-dom'
 
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/Theme'



import Landing from '../pages/public/Landing'
import Home from '../pages/private/Main'


// import Features from '../pages/public/Features'
// import Plans from '../pages/public/Plans'
// import Join from '../pages/public/Join'
// import Notification from '../pages/public/Notification'


// import TwoParty from '../pages/main/twoParty/MainTP'
// import Personal from '../pages/main/personal/MainPE'
// import Work from '../pages/main/work/MainWO'
// import Contract from '../pages/main/contract/MainCO'







class App extends Component {
  render() {
    return (
      <CssBaseline>
        <ThemeProvider theme = {theme} >
        <Switch>
            <Route path ={`${process.env.PUBLIC_URL}/`}   exact component = {Landing} />  

            {/* <Route path ={`${process.env.PUBLIC_URL}/features`}   exact component = {Features} />  

            <Route path ={`${process.env.PUBLIC_URL}/plans`}   exact component = {Plans} />  

            <Route path ={`${process.env.PUBLIC_URL}/join`}   exact component = {Join} />  

            <Route path ={`${process.env.PUBLIC_URL}/notification`}   exact component = {Notification} />   */}

          </Switch>
           
          <Route   path ='/(.+)' render ={()=>(

<Fragment>
              
                <Route   path ={`${process.env.PUBLIC_URL}/main`}   component = {Home} /> 
                {/* <Route   path ={`${process.env.PUBLIC_URL}/TwoParty`}   component = {TwoParty} />   
                <Route   path ={`${process.env.PUBLIC_URL}/Personal`}   component = {Personal} />  
                <Route   path ={`${process.env.PUBLIC_URL}/Work`}   component = {Work} />   */}
                
              </Fragment>
              )} 
              /> 
        </ThemeProvider>
      </CssBaseline>
        
    )
  }
}

export default App;
