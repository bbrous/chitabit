export const  updateTaskStatus= ( taskId) => {

  console.log('[mainActions I be clicked - hi updateTaskStatus = ' , taskId)

 return {
   type: CHANGE_TASK_COMPLETED_STATUS,
   payload: {
     // spotId: spotId,
     // taskId: taskId,
     // newTimerObject: newTimerObject

     spotId: taskId
     
   }
 }
}

       
export const  updateSpotlightStatus= (spotId) => {

 console.log('[mainActions I be clicked - updateSpotlightStatus = ' , spotId)
 return {
   type: UPDATE_SPOTLIGHT_STATUS,
   payload: {
     // spotId: spotId,
     // taskId: taskId,
     // newTimerObject: newTimerObject
     
   }
 }
}