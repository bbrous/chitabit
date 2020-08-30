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

        title: 'This is spotlight 1 in initial store',

        timeStamp:  1598617933, // Aug 20 2020 8:32AM
        endEst: 1599537599000, // Sep 7 2020 midnight

        startClock:  1596963600000, // Aug 9 2020 9AM
        pausedClock: 1596963609999, // Aug 9 2020 9AM
        endClock: 1596963609999, // Aug 9 2020 9AM
        clockStatus: 'stopped',  // or going
        noteId: 'note1',
   
        
        taskArray: [
          'task1',
          'task2', 
          'spot2',
          'task3'
         
        ],

        'tasks': {

          'task1' : {
            id: 'task1',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'This is spot 1 in initialStore',
            noteId: ''
            
          },
    
          'task2' :{
            id: 'task2',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'This is spot 2 in initialStore',
            noteId: 'note2'
            
          },

              
          'task3' :{
            id: 'task3',
            type: 'task',  //or spotlight
            completed: false,
    
            title: 'This is spot 2 in initialStore',
            noteId: 'note2'
            
          },

        }, // end tasks
          

      },

      'spot2': {
        id: 'spot2',

  
      
        startDay:  1597103940000, // Aug 10 11:59 PM
        
          

      },

      'spot3': {
        id: 'spot3',
  
  
        startDay:  1597227180000, // Aug 12 2020 10:13AM 
        
          

      },

      'spot5': {
        id: 'spot5',
  
        startDay:  1597227180001, // Aug 12 2020 10:14AM 
        
          

      },

      'spot4': {
        id: 'spot4',
  
        
        startDay:  1597486158000, // Aug 15 2020 11:59PM
        endEst: 1598954958000, // 1 Aug 31 2020 11:13PM
        endEstModified: 1598954958000 , // ?
          

      },
      

    },// end spotlights 



    'notes': {

      'note1' : {
        id: 'note1',
        type: 'spotlight',  //or spotlight
        parent: 'spot1',
        note: 'I be a note for SPOTLIGHT 1',
        timeStamp: 1597103940000, 
      },

      'note2' :{
        id: 'note2',
        type: 'task',  //or spotlight
        parent: 'task2',
        note: 'I be a note for Task 1',
        timeStamp: 1597103940000, 
      },
    }, // end notes

}// end spotlightData
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================



}// end Initial Store


export default InitialStore
 