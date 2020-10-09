import React from 'react'

export const taskIdGenerator = (spotlightId, tasksObject) => {

  /*
    Input is : an object of all tasks for a specific spotlight
    Output is : a new Id 
    Id form is :  spot_#_task_#


  */

  let nextTaskId // new Id to be returned

  // create an array of task id's from the object of all tasks
    let currentTasksArray = Object.keys(tasksObject)

  // map through the task array and delimit each task id
  // chopping off the last portion which is a number in string format
  // convert it to a number

    let numberArray  = currentTasksArray.map((taskValue,index) => {

    let taskNumberArray = taskValue.split('_')
    let taskNumber = parseInt(taskNumberArray[taskNumberArray.length-1])

   
     return taskNumber;
    });

    
  // take the new array of just numbers and determine the largest value
  // and add 1 
  // then generate the new task id in the correct format

    let nextTaskIdNumber = Math.max(...numberArray) + 1
    // let nextTaskIdNumber = numberArray[0]
    console.log(' spotlightId', spotlightId )
  
    nextTaskId = spotlightId + '_task_' + nextTaskIdNumber.toString()

    console.log('IDKEYGENERARTORS + nextTaskId - ' , nextTaskId)
    console.log('============================ '  )

  return (
    nextTaskId
  )
}
