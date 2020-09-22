case UPDATE_TASK_ARRAY : 
let id = payload.id
let taskArray = payload.id

console.log('REDUCER MAIN -- UpdateTaskArray ACTION PASSED')
return {
  ...state,
  data: {...state.data, 
          spotlightData: {
                        ...state.data.spotlightData, 
                          spotlights: {
                              ...state.data.spotlightData.spotlights,
                              spot1: taskArray
                              
                           }
                          
       

}}}