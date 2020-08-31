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

        timeStamp:  1598894114000, // Monday, August 31, 2020 5:15:14 PM
        endEst: 1601524799000, // Thursday, October 1, 2020 3:59:59 AM

        startClock:  null, // Aug 9 2020 9AM
        pausedClock: null, // Aug 9 2020 9AM
        endClock: null, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        note: 'This is a note for Spot 1',
   
        
        taskArray: [
          'spot1',
          'task1', 
          'task2',
          'task3'
         
        ],

        'tasks': {

          'task1' : {
            id: 'task1',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Transfer A-try into Spotlight',
            note: 'This is a note for task 1'
            
          },
    
          'task2' :{
            id: 'task2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'In Spotlight - complete layout with params from Initial Store',
            note: 'Tiy need to convert timestamps'
            
          },

              
          'task3' :{
            id: 'task3',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clocks and Note Popups create',
            note: 'note2'
            
          },

        }, // end tasks
          

      },

      'spot2': {
        id: 'spot2',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Complete Spotlight Tasks in A-try',

        timeStamp:  1598894114000, // Monday, August 31, 2020 5:15:14 PM
        endEst: 1599019199000, // Wednesday, September 2, 2020 3:59:59 AM

        startClock:  null, // Aug 9 2020 9AM
        pausedClock: null, // Aug 9 2020 9AM
        endClock: null, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        note: 'Format tasks like final form',
   
        
        taskArray: [
          'task21', 
          'task22',
          'task23',
          'spot3'
         
        ],

        'tasks': {

          'task21' : {
            id: 'task21',
            type: 'task',  //or spotlight
            completed: true,
    
            title: 'Initial Store',
            note: 'This is a note for task 1'
            
          },
    
          'task22' :{
            id: 'task22',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Redux',
            note: 'convert task array to complex task array... then later reverse it'
            
          },

              
          'task23' :{
            id: 'task23',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clocks and Note Popups create',
            note: 'note2'
            
          },

        }, // end tasks
          

      }, //end spot2

      'spot3': {
        id: 'spot3',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Popups for note and clock',

        timeStamp:  1598894114000, // Monday, August 31, 2020 5:15:14 PM
        endEst: 'null', // Wednesday, September 2, 2020 3:59:59 AM

        startClock:  null, // Aug 9 2020 9AM
        pausedClock: null, // Aug 9 2020 9AM
        endClock: null, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        note: 'Material ui menu',
   
        
        taskArray: [
          'task31', 
          'task32',

         
        ],

        'tasks': {

          'task31' : {
            id: 'task31',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Note Popup',
            note: ''
            
          },
    
          'task32' :{
            id: 'task32',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'Clock Popup',
            note: ''
            
          },

              

        }, // end tasks
          

      }, //end spot3

      'spot5': {
        id: 'spot5',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 5',

        timeStamp:  1598894114000, // Monday, August 31, 2020 5:15:14 PM
        endEst: 'null', // Wednesday, September 2, 2020 3:59:59 AM

        startClock:  null, // Aug 9 2020 9AM
        pausedClock: null, // Aug 9 2020 9AM
        endClock: null, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        note: 'Material ui menu',
   
        
        taskArray: [],

        'tasks': { }, // end tasks
          

      }, //end spot5

      'spot4': {
        id: 'spot4',
        type: 'spotlight',
        parent: '',
        completed: false,

        title: 'Dummy Spotlight 4',

        timeStamp:  1498894114000, // Monday, August 31, 2020 4:14:14 PM
        endEst: 'null', // Wednesday, September 2, 2020 3:49:49 AM

        startClock:  null, // Aug 9 2020 9AM
        pausedClock: null, // Aug 9 2020 9AM
        endClock: null, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        note: 'Material ui menu',
   
        
        taskArray: [],

        'tasks': { }, // end tasks
          

      }, //end spot4
      

    },// end spotlights 


}// end spotlightData
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================



}// end Initial Store


export default InitialStore
 