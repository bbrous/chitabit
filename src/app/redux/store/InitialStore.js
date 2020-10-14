//InitialChitStore.js - Chit a Bit  *********

/*


*/




const InitialStore = {


  'acctInfo' : {
    id: 'nam0',
    fname: 'Brad',
    lname: 'Brous',
    email: 'brad.brous@visitell.com'


  },
 
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  'journal':  {

      sections: {

        // 'tp11': {
          
        //   chitId: 'tp11',
        //   timeStamp: 1556990799000, //May 4, 2019 (date of chit action),
        //   chitDate: 155890799000, //May 4, 2019 (date of chit action)
                           
        //   otherParty: {
        //     otherPartyId: 'nam10',
        //     name: {firstName: 'Fran' , 
        //     lastName: 'Nicastro', 
        //     nameSubstitute: null},

        //   },

        //   deedPerformedBy: 'nam0',


        //   workRelated: false,
        //   shared: false,
        //   attachment: null,

        //   title: 'Pool use', 
        //   description: null,  

        //   chitType: 'standard',
        //   chitColor: 'gold',

          


          
       
          

        // } , //end TP chit

      }//end journal Summaries

},

  'daySummaries':  {

      dayxxxxx: {

        // 'tp11': {
          
        //   chitId: 'tp11',
        //   timeStamp: 1556990799000, //May 4, 2019 (date of chit action),
        //   chitDate: 155890799000, //May 4, 2019 (date of chit action)
                           
        //   otherParty: {
        //     otherPartyId: 'nam10',
        //     name: {firstName: 'Fran' , 
        //     lastName: 'Nicastro', 
        //     nameSubstitute: null},

        //   },

        //   deedPerformedBy: 'nam0',


        //   workRelated: false,
        //   shared: false,
        //   attachment: null,

        //   title: 'Pool use', 
        //   description: null,  

        //   chitType: 'standard',
        //   chitColor: 'gold',

          


          
       
          

        // } , //end TP chit

      }//end journal Summaries

},



 
// ==========================================================



  'topics': {

    // 'cat1': {
    //   id: 'cat1',
    //   title: 'Work',
    //   description: 'Work related accomplishments',
    //   startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
    //   endDay: ''
        
    // },

  },// end topics
  
  'spotlightData' : {

    'popup' : {
      'popupStatus' : 'show',
      'popupId' : 'spot1'


    },

    'spotlights': {

      'spot_1': {
        id: 'spot_1',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Complete Journal and Spotlight',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-10-15T04:46:20.619Z",  //October 15  
        note: 'This is a note for spot 1',
 

        taskArray: [
          {
            taskItem: 'spot_1_task_0',
            completed: false, 
            type: 'task'
          },
          {taskItem: 'spot_2',completed: false, type: 'spotlight'},
          {taskItem: 'spot_1_task_1',completed: false, type: 'task'}, 
          {taskItem: 'spot_1_task_2',completed: false, type: 'task'},
          {taskItem: 'spot_1_task_3',completed: false, type: 'task'}
         
        ],

    // spot 1 tasks  ------      
        tasks: {
          'spot_1_task_0' : {
            id: 'spot_1_task_0',
            type: 'task',  //or spotlight
            completed: true,
    
            spotHolder: 'spot_1',
            title: 'First task begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },
    
          'spot_1_task_1' : {
            id: 'spot_1_task_1',
            type: 'task',  //or spotlight
            completed: true,

            title: 'Transfer A-try into Spotlight',
                    clock: {
          timerStatus: 'inactive', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: ''
         },            
         
         note: 'this is a note for task 1 /  spot 1',
            
          },
    
          'spot_1_task_2' :{
            id: 'spot_1_task_2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'In Spotlight - complete layout with params from Initial Store',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },
    
              
          'spot_1_task_3' :{
            id: 'spot_1_task_3',
            type: 'task',  //or spotlight
            completed: true,

            title: 'Clocks and Note Popups create',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },            
            note: null
            
          },

        }, 

      },  // end spot1 -----------------------

      'spot_2': {
        id: 'spot_2',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',

        timeStamp:  "2020-09-25T04:46:20.619Z",  // September 25
        endEst: "2020-10-09T04:46:20.619Z",  //October 9 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
         
         note: 'Spot 2 note here',
   
        

        taskArray: [
          {
            taskItem: 'spot_2_task_0',
            completed: false, 
            type: 'task'
          },
          {taskItem: 'spot_2_task_1',completed: false, type: 'task'}, 
          {taskItem: 'spot_2_task_2',completed: false, type: 'task'},
          {taskItem: 'spot_2_task_3',completed: false, type: 'task'},
          {taskItem: 'spot_3',completed: false, type: 'spotlight'}
         
        ],
 
    // spot 2 tasks  ----       
        tasks: {  

          'spot_2_task_0' : {
            id: 'spot_2_task_0',
            type: 'task',  //or spotlight
            completed: true,

            title: 'First task begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },
    
          'spot_2_task_1' : {
            id: 'spot_2_task_1',
            type: 'task',  //or spotlight
            completed: true,

            title: 'Initial Store',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },            
         note: 'Task 1 Spot 2 note BBBB7'
            
          },
    
          'spot_2_task_2' :{
            id: 'spot_2_task_2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Redux',
                    clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
         },
            note: null
            
          },
    
              
          'spot_2_task_3' :{
            id: 'spot_2_task_3',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clocks and Note Popups create',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },
            note: 'Task3 / Spot 2 note'
            
          },


        },

      }, //end spot2 ---------------------------


      'spot_3': {
        id: 'spot_3',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Popups for note and clock',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
         note: 'Spot 3 note - They are driving me crazy',
   
        

        taskArray: [
          {
            taskItem: 'spot_3_task_0',
            completed: true, 
            type: 'task'
          },
          {taskItem: 'spot_3_task_3',completed: false, type: 'task'},
          {taskItem: 'spot_3_task_1',completed: false, type: 'task'},
          {taskItem: 'spot_3_task_2',completed: false, type: 'task'}
         
        ],

    // spot3 tasks
        tasks: {

          'spot_3_task_0' : {
            id: 'spot_3_task_0',
            type: 'task',  //or spotlight
            completed: true,
    
            title: 'First task begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },
    
          'spot_3_task_1' : {
            id: 'spot_3_task_1',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Note Popup',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },
            note: 'task 1 / Spot 3 note here'
            
          },
    
          'spot_3_task_2' :{
            id: 'spot_3_task_2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clock Popup',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },
            note: ''
            
          },
    
          
          'spot_3_task_3' :{
            id: 'spot_3_task_3',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clock Popup Part deux',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },
            note: ''
            
          },

        },
          

      }, // end spot3 -----------------------

      'spot_5': {
        id: 'spot_5',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 5',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
   
        

        taskArray: [
          {
            taskItem: 'spot_5_task_0',
            completed: false, 
            type: 'task'
          },

        ],

    // spot5 tasks --------
        tasks: {
          'spot_5_task_0' : {
            id: 'spot_5_task_0',
            type: 'task',  //or spotlight
            completed: false,

            title: 'First task begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },

        },
 
          

      }, //end spot5 -------------------------

      'spot_4': {
        id: 'spot_4',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 4',

        timeStamp:  "2020-09-11T04:46:20.619Z",  // September 11
        endEst: "2020-10-03T04:46:20.619Z",  //October 3 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },

         note: 'Spot 4 note here',
   
        

        taskArray: [
          {
            taskItem: 'spot_4_task_0',
            completed: false, 
            type: 'task'
          },
        ],
 
    // spot4 tasks --------
    tasks: {
      'spot_4_task_0' : {
        id: 'spot_4_task_0',
        type: 'task',  //or spotlight
        completed: false,

        title: 'First task begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
        
      },

    },

      }, //end spot4 -------------------------
      

    },// end spotlights =============================================



      // --------------------------
      




}// end spotlightData
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================



}// end Initial Store


export default InitialStore
 