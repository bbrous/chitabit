import React from 'react'


// ==== Task Id Generator ========================================

export const taskIdGenerator = (spotlightId, tasksObject) => {

  /*
  ---------------------------
    Input is : an object of all tasks for a specific spotlight
    Output is : a new Id 
    Id form is :  spot_#_task_#

  ---------------------------
  */

  let nextTaskId // new Id to be returned

  // (1) create an array of task id's from the object of all tasks
    let currentTasksArray = Object.keys(tasksObject)

  /* (2) map through the task array and delimit each task id
        chopping off the last portion which is a number in string format
        convert it to a number*/ 

    let numberArray  = currentTasksArray.map((taskValue,index) => {

    let taskNumberArray = taskValue.split('_')
    let taskNumber = parseInt(taskNumberArray[taskNumberArray.length-1])

   
     return taskNumber;
    });

    
  /* (3) take the new array of just numbers and determine the largest value
         and add 1 
         then generate the new task id in the correct format */ 

    let nextTaskIdNumber = Math.max(...numberArray) + 1
     
    // console.log(' spotlightId', spotlightId )
  
    nextTaskId = spotlightId + '_task_' + nextTaskIdNumber.toString()

    // console.log('IDKEYGENERARTORS + nextTaskId - ' , nextTaskId)
    // console.log('============================ '  )

  return (
    nextTaskId
  )

} // function taskIdGenerator


// ==== Spotlight Id Generator ========================================

export const spotlightIdGenerator = (spotlightsObject) => {

  /*
  ---------------------------
    Input is : an object of all spotlights
    Output is : a new spotlight Id 
    Id form is :  spot_#

  ---------------------------
  */

  let newSpotlightId // new Id to be returned

  // (1) convert input object to an array of spotlight id's  
  let currentSpotlightsArray = Object.keys(spotlightsObject)

  /* (2) map through the spotlights array and delimit each spotlight id
        chopping off the last portion which is a number in string format
        convert it to a number*/ 

        let numberArray  = currentSpotlightsArray.map((spotlightValue,index) => {

          let spotlightNumberArray = spotlightValue.split('_')
          let spotlightNumber = parseInt(spotlightNumberArray[spotlightNumberArray.length-1])
      
         
           return spotlightNumber;
          });
          
  /* (3) take the new array of just numbers and determine the largest value
         and add 1 
         then generate the new task id in the correct format */ 

    let newSpotlightIdNumber = Math.max(...numberArray) + 1
     
   
  
    newSpotlightId ='spot_' + newSpotlightIdNumber.toString()

    console.log('IDKEYGENERARTORS + newSpotlightId - ' , newSpotlightId)
    console.log('============================ '  )

  return (
    newSpotlightId
  )
   
} // end function spotlightIdGenerator
