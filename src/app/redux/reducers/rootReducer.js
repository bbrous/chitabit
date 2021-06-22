//rootReducer.js

/*

DATA BASE - Data Loading --------------

Initial Store Data from database gets loaded with
homeActions (features/main/home/homeActions.js) in
componentDidMount.  The Home.jsx file is the destination
after successful login.


*/

import { combineReducers } from 'redux';


import landingReducer from './reducer_Landing'
import mainReducer from './reducer_Main'
import asyncReducer from './asyncReducer'

import chitReducer from '../chitRedux/chitReducer'




const rootReducer = combineReducers({
  // data: homeReducer,
    private : mainReducer,
    public: landingReducer,
    async: asyncReducer,
    chits: chitReducer
  // crud : crudReducer
  

})

export default rootReducer