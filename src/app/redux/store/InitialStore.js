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

      'spot1': {
        id: 'spot1',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Complete Journal and Spotlight',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-10-15T04:46:20.619Z",  //October 15  
        note: 'note1',
        clock: 'clock1',
        
        taskArray: [
          {taskItem: 'spot1',completed: false, type: 'spotlight'},
          {taskItem: 'task1',completed: false, type: 'task'}, 
          {taskItem: 'task2',completed: false, type: 'task'},
          {taskItem: 'task3',completed: false, type: 'task'}
         
        ],

        
          

      },

      'spot2': {
        id: 'spot2',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Complete Spotlight Tasks in A-try  Spotlight Tasks in A-try  ',

        timeStamp:  "2020-09-25T04:46:20.619Z",  // September 25
        endEst: "2020-10-09T04:46:20.619Z",  //October 9 

        clock: 'clock2',
        note: 'note2',
   
        
        taskArray: [
          {taskItem: 'task21',completed: false, type: 'task'}, 
          {taskItem: 'task22',completed: false, type: 'task'},
          {taskItem: 'task23',completed: false, type: 'task'},
          {taskItem: 'spot3',completed: false, type: 'spotlight'}
         
        ],
 
          

      }, //end spot2

      'spot3': {
        id: 'spot3',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Popups for note and clock',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: 'clock3',
        note: 'note3',
   
        
        taskArray: [
          {taskItem: 'task33',completed: false, type: 'task'},
          {taskItem: 'task31',completed: false, type: 'task'},
          {taskItem: 'task32',completed: false, type: 'task'}
         
        ],

   
          

      }, //end spot3

      'spot5': {
        id: 'spot5',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 5',

        timeStamp:  "2020-09-14T04:46:20.619Z",  // September 14
        endEst: "2020-11-17T04:46:20.619Z",  //Nov 17

        clock: 'clock5',
        note: 'note5',
   
        
        taskArray: [],
 
          

      }, //end spot5

      'spot4': {
        id: 'spot4',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 4',

        timeStamp:  "2020-09-11T04:46:20.619Z",  // September 11
        endEst: "2020-10-03T04:46:20.619Z",  //October 3 

        clock: 'clock4',
        note: 'note4',
   
        
        taskArray: [],
 
          

      }, //end spot4
      

    },// end spotlights 

    'tasks': {


      'task1' : {
        id: 'task1',
        type: 'task',  //or spotlight
        completed: true,

        spotHolder: 'spot1',
        title: 'Transfer A-try into Spotlight',
        clock: 'clock6',
        note: 'note5',
        
      },

      'task2' :{
        id: 'task2',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot1',

        title: 'In Spotlight - complete layout with params from Initial Store',
        clock: 'clock7',
        note: 'note6',
        
      },

          
      'task3' :{
        id: 'task3',
        type: 'task',  //or spotlight
        completed: true,

        spotHolder: 'spot1',
        title: 'Clocks and Note Popups create',
        clock: 'clock8',
        note: null
        
      },

      'task21' : {
        id: 'task21',
        type: 'task',  //or spotlight
        completed: true,

        spotHolder: 'spot2',
        title: 'Initial Store',
        clock: 'clock9',
        note: 'note7'
        
      },

      'task22' :{
        id: 'task22',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot2',

        title: 'Redux',
        clock: 'clock10',
        note: null
        
      },

          
      'task23' :{
        id: 'task23',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot2',

        title: 'Clocks and Note Popups create',
        clock: 'clock11',
        note: 'note8'
        
      },

      'task31' : {
        id: 'task31',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot3',

        title: 'Note Popup',
        clock: 'clock12',
        note: 'note9'
        
      },

      'task32' :{
        id: 'task32',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot3',

        title: 'Clock Popup',
        clock: 'clock13',
        note: ''
        
      },

      
      'task33' :{
        id: 'task33',
        type: 'task',  //or spotlight
        completed: false,
        spotHolder: 'spot3',

        title: 'Clock Popup Part deux',
        clock: 'clock14',
        note: ''
        
      },


    }, // end tasks

    'notes': {
      
      'note1' :  {
          'noteHolder': 'spot1',
          'note': 'This is a note for Spot 1'
        },

      'note2' : {
        'noteHolder': 'spot1',
        'note': 'Format tasks like final form'
      },
      
      'note3' : {
        'noteHolder': 'spot1',
        'note': 'Material ui menu'
      },

      'note4' :  {
        'noteHolder': 'spot1',
        'note': 'Material ui menu',
      },

      'note5' : {
        'noteHolder': 'spot1',
        'note': 'This is a note for task 1',
      },
      

      'note6':  {
        'noteHolder': 'spot1',
        'note': 'Tiy need to convert timestamps',
      },

      'note7' :  {
        'noteHolder': 'spot1',
        'note': 'This is a note for task 21',
      },

      'note8' :  {
        'noteHolder': 'spot1',
        'note': 'Donald Trump is an asshole',
      },

      'note9' : {
        'noteHolder': 'spot1',
        'note': ' last note of this group'
      },
      
   
      
    }, // end notes



    'clocks': {
      
      'clock1' :  {
          'clockHolder': 'spot1',
          'type' : 'spotlight',
          'clockStatus': 'running',
          'startClock' : null,
          'pausedClock' :null, 
          'endClock' : null

        },

              
      'clock2' :  {
        'clockHolder': 'spot2',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },
              
      'clock3' :  {
        'clockHolder': 'spot3',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

                    
      'clock4' :  {
        'clockHolder': 'spot4',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

                    
      'clock5' :  {
        'clockHolder': 'spot5',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

      'clock6' :  {
        'clockHolder': 'task1',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

      'clock7' :  {
        'clockHolder': 'task2',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },
      
      'clock8' :  {
        'clockHolder': 'task3',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

      
      'clock9' :  {
        'clockHolder': 'task21',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

            
      'clock10' :  {
        'clockHolder': 'task22',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

            
      'clock11' :  {
        'clockHolder': 'task23',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

            
      'clock12' :  {
        'clockHolder': 'task31',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

      
            
      'clock13' :  {
        'clockHolder': 'task32',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },
            
      'clock14' :  {
        'clockHolder': 'task33',
        'type' : 'spotlight',
        'clockStatus': 'stopped',
        'startClock' : null,
        'pausedClock' :null, 
        'endClock' : null

      },

    }, // end clocks



}// end spotlightData
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================



}// end Initial Store


export default InitialStore
 