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

  'spotlights': {

    'spot1': {
      id: 'spot1',
      title: 'Finish Spotlight',

      timeStamp:  1596963600000, // Aug 9 2020 9AM
      endEst: 1597708740000, // Aug 9 2020 11:59PM

      startClock:  1596963600000, // Aug 9 2020 9AM
      pauseClock: 1596963609999, // Aug 9 2020 9AM
      endClock: 1596963609999, // Aug 9 2020 9AM
      elapsedTime: 1596963609999, //calculate
      
      subTasks: [
        {
          id: 'task1',
          type: 'task',  //or spotlight
          completed: false,
        },

        {
          id: 'spot2',
          type: 'spotlight',  //or spotlight
          completed: false,
          timeStamp: 1597103940000, 
          endEst: 1597103940000, // Aug 10 11:59 PM
          elapsedTime: 1596963609999 //calculate
        },
      ]
        

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
    

  }// end topics
 // @@@@@@@@@@@@@  JOURNAL SPECIFIC    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ==================================================



}// end Initial Store


export default InitialStore
 