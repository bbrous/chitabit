import React from 'react'

export const taskIdGenerator = (spotlightId, tasksObject) => {

  let nextTaskId // new Id to be returned


  let currentTasksArray = Object.keys(tasksObject)

  let numberArray  = currentTasksArray.map((taskValue,index) => {

   let taskNumberArray = taskValue.split('_')
   let taskNumber = parseInt(taskNumberArray[taskNumberArray.length-1])

   
    

     return taskNumber;
 });

    

    let nextTaskIdNumber = Math.max(...numberArray) + 1
    // let nextTaskIdNumber = numberArray[0]
    console.log(' spotlightId', spotlightId )
  
    nextTaskId = spotlightId + '_task_' + nextTaskIdNumber

    console.log('IDKEYGENERARTORS + nextTaskId - ' , nextTaskId)
    console.log('============================ '  )

  return (
    nextTaskId
  )
}
