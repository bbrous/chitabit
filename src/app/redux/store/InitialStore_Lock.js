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

   // ===== Key Words  =====================
 

  'keywordObject' : {
    'kw_1' : {
      keywordId: 'kw_1',
      locations: [
        {locationId: 'n_01', locationType: 'note'},
        {locationId: 'day_01_sec_01', locationType: 'section'},
        {locationId: 'pe_01', locationType: 'chit'}
      ]
    },

  //     'kw_2' : {
  //       keywordId: 'kw_2',
  //       locations: [
  //         {locationId: 'n_01', locationType: 'note'},
  //         {locationId: 'day_01_sec_01', locationType: 'section'},
  //         {locationId: 'pe_01', locationType: 'chit'}
  //       ]
  //     }

    
  },



     // =======================================
     
 
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

        title: 'Complete Journal and Spotlight',

        // spotlightStatus: 'inactive', // inactive, begun, completed
        // timeStamp:  '',  // September 14

        spotlightStatus: 'completed', // inactive, begun, completed
        timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14
        
        completedTimeStamp:  "2020-11-03T14:46:20.619Z", 
        completed: false,
        
        // timeEst: null, // 
        // endEst: "",  //October 15 
        
        timeEst: 311418000, 
        endEst: "2020-11-02T02:33:20.619Z",  //--------
        note: 'spot_1_note',
 

        taskArray: [
          {
            taskItem: 'spot_1_task_0',
            type: 'task'
          },
          {taskItem: 'spot_2', type: 'spotlight'},
          {taskItem: 'spot_1_task_1', type: 'task'}, 
          {taskItem: 'spot_2', type: 'task'},
          {taskItem: 'spot_1_task_3', type: 'task'},
          {taskItem: 'spot_1_task_6', type: 'task'},
          {taskItem: 'spot_1_task_4', type: 'task'}
         
        ],

    // spot 1 tasks  ------      
        tasks: {
          'spot_1_task_0' : {
            id: 'spot_1_task_0',
            type: 'task',  //or spotlight
            completed: false,
    
            spotHolder: 'spot_1',
            title: 'Spotlight begin',
            clock: {
              timerStatus: 'inactive', // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            
          },


          'spot_1_task_6' : {
            id: 'spot_1_task_0',
            type: 'task',  //or spotlight
            completed: false,
    
            spotHolder: 'spot_1',
            title: 'We are almost done',
            clock: {
              timerStatus: 'running', // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            note: '',
          }, 
          'spot_1_task_1' : {
            id: 'spot_1_task_1',
            type: 'task',  //or spotlight
            completed: false,

            title: '*** Transfer A-try into Spotlight ****',
                    clock: {
          timerStatus: 'running', // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: '2020-10-25T01:46:20.619Z'
         },            
         
         note: '',
            
          },
    
          'spot_2' :{
            id: 'spot_2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'In Spotlight - complete layout with params from Initial Store',
            clock: {
              timerStatus: 'paused', // inactive, running, paused, stopped
              accumulatedTime: 5600000,
              lastDate: null
            },             
            note: '',
          },
    
              
          'spot_1_task_3' :{
            id: 'spot_1_task_3',
            type: 'task',  //or spotlight
            completed: false,

            title: 'Clocks and Note Popups create and Note Popups  and Note Popups  and Note Popups  and Note Popups ',
            clock: {
              timerStatus: 'running', // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: '2020-10-26T01:46:20.619Z'
            },            
            note: '',
          },
          
          'spot_1_task_4' : {
            id: 'spot_1_task_4',
            type: 'task',  //or spotlight
            completed: false,
    
            spotHolder: 'spot_1',
            title: 'Inagodta davita',
            clock: {
              timerStatus: 'inactive', // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            note: '',
          },

        }, 

        'spot_1_task_6' :{
          id: 'spot_1_task_6',
          type: 'task',  //or spotlight
          completed: false,
  
          title: 'In Spotlight - complete layout with params from Initial Store',
          clock: {
            timerStatus: 'paused', // inactive, running, paused, stopped
            accumulatedTime: 55566000,
            lastDate: null
          },             
          note: '',
        },

        

      },  // end spot1 -----------------------

      'spot_2': {
        id: 'spot_2',
        type: 'spotlight',
        parent: 'spot_1',

        title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',
        spotlightStatus: 'inactive', // inactive, begun, completed
        // timeStamp:  "2020-09-25T04:46:20.619Z",  // September 25
        
        // timeEst: 3715380000,
        timeEst: null,
        endEst: "2020-10-09T04:46:20.619Z",  //October 9 

        timeStamp:  '',  // September 25
        completedTimeStamp: '', 
        
        // endEst: '',  //October 9 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
         
        note: 'spot_2_note',
   
        

        taskArray: [
          {
            taskItem: 'spot_2_task_0',
            completed: false, 
            type: 'task'
          },
          {taskItem: 'spot_2_task_1',completed: false, type: 'task'}, 
          {taskItem: 'spot_2_task_2',completed: false, type: 'task'},
          {taskItem: 'spot_2_task_3',completed: false, type: 'task'},
          {taskItem: 'spot_3',completed: false, type: 'spotlight'},
          {taskItem: 'spot_5',completed: false, type: 'spotlight'},
         
        ],
 
    // spot 2 tasks  ----       
        tasks: {  

          'spot_2_task_0' : {
            id: 'spot_2_task_0',
            type: 'task',  //or spotlight
            completed: true,

            title: 'Spotlight begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            note: '',
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
         note: '',
            
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
            note: '',
            
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

            note: 'spot_2_task_3_note',
            // note: '{"blocks":[{"key":"d22o4","text":"hello Brady ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":7,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
            
          },


        },

      }, //end spot2 ---------------------------


      'spot_3': {
        id: 'spot_3',
        type: 'spotlight',
        parent: 'spot_2',

        title: 'Popups for note and clock',
        
        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },        
        note: '',
   
        

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
    
            title: 'Spotlight begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            note: '',
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
            note: '',
            
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
            note: '',
            
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
            note: '',
            
          },

        },
          

      }, // end spot3 -----------------------

      'spot_5': {
        id: 'spot_5',
        type: 'spotlight',
        parent: 'spot_2',

        title: 'Dummy Spotlight 5',

        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
        note: '',
        

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

            title: 'Spotlight begin',
            clock: {
              timerStatus: null, // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },             
            note: '',
          },

        },
 
          

      }, //end spot5 -------------------------

      'spot_4': {
        id: 'spot_4',
        type: 'spotlight',
        parent: '',

        title: 'Dummy Spotlight 4',
        
        spotlightStatus: 'inactive', // inactive, begun, completed
        timeStamp:  "2020-09-11T04:46:20.619Z",  // September 11
        
        completedTimeStamp: '', 
        
        timeEst: null, 
        endEst: "2020-10-03T04:46:20.619Z",  //October 3 

        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },

        note: '',
   
        

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

        title: 'Spotlight begin',
        clock: {
          timerStatus: null, // inactive, running, paused, stopped
          accumulatedTime: 0,
          lastDate: null
        },         
        note: '',
      },

    },

      }, //end spot4 -------------------------
      

    },// end spotlights =============================================



      // --------------------------
      




},// end spotlightData
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================

'keywords' : {
  'kw_1' : {
    keywordId: 'kw_1',
    keyword: 'Chit Git'
  },

    'kw_2' : {
      keywordId: 'kw_2',
      keyword: 'pissant'
    },

  
},


'notes' : {
  'spot_2_task_3_note' : {
    
    noteId: 'spot_2_task_3_note',
    noteHolderId: 'spot_2_task_3',
    noteType: 'task',
    title: 'Clocks and Note Popups create and Note Popups  and Note Popups  and Note Popups  and Note Popups ',

    note:"{\"blocks\":[{\"key\":\"bf1me\",\"text\":\"ASDd asdfaf\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":5,\"length\":6,\"style\":\"color-rgb(97,189,109)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",

    timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14

    noteArray: ['kw_1']
  },

  'spot_1_note' : {
    
    noteId: 'spot_1_note',
    noteHolderId: 'spot_1_note',
    noteType: 'spotlight',
    title: 'Complete Journal and Spotlight',
    note: "{\"blocks\":[{\"key\":\"7plek\",\"text\":\"A vnote created by AddNote\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":18,\"length\":7,\"style\":\"color-rgb(184,49,47)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",

    timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14

    noteArray: ['kw_1']
  },

  
  'spot_2_note' : {
    
    noteId: 'spot_2_note',
    noteHolderId: 'spot_2_note',
    noteType: 'spotlight',
    title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',
    note: "{\"blocks\":[{\"key\":\"7plek\",\"text\":\"A VVVV created by AddNote\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":18,\"length\":7,\"style\":\"color-rgb(184,49,47)\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",

    timeStamp:  "2020-11-01T11:16:20.619Z",  // September 14

    noteArray: ['kw_1']
  },
},

}// end Initial Store


export default InitialStore
 