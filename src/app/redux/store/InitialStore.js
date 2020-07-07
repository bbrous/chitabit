//InitialChitStore.js

/*

  Local_ID is the ID assigned to the other party for a specific user
  It does NOT require the other party to be a Chit Git member
  User_ID is assigned by Chit Git to members when they sign up

  persons: {

      Name            Local_ID  Usuer_ID

    1:  Brad             0

    4.  Rhonda Farrar    4
    5   David Anderson   5
    6.  Richard Latin    6
    7.  Sherry Miller    7
    8.  Emily            8
    9.  Dean             9
    10. Fran            10        QS865
    11. Greg            11
    12. Darrell         12
    13. Don             13
    14. Lynn            14
    15. Starbucks girl  15
    16. Harold Green    16
  }
*/




const InitialStore = {


  'acctInfo' : {
    id: 'nam0',
    fname: 'Brad',
    lname: 'Brous',
    email: 'brad.brous@visitell.com'


  },
 
 // ==============================================================

  'chitSummaries':  {

      twoParty: {

        'tp11': {
          
          chitId: 'tp11',
          timeStamp: 1556990799000, //May 4, 2019 (date of chit action),
          chitDate: 155890799000, //May 4, 2019 (date of chit action)
                           
          otherParty: {
            otherPartyId: 'nam10',
            name: {firstName: 'Fran' , 
            lastName: 'Nicastro', 
            nameSubstitute: null},

          },

          deedPerformedBy: 'nam0',


          workRelated: false,
          shared: false,
          attachment: null,

          title: 'Pool use', 
          description: null,  

          chitType: 'standard',
          chitColor: 'gold',

          


          
       
          

      } , //end TP chit

      

      'tp12': {
          
        chitId: 'tp12',
        chitDate: 1545931599000, //Dec 27, 2018,
               

        title:  'Scuba business help'  ,  

        type: 'standard',
        chitColor: 'copper',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam10',
          name: {firstName: 'Greg' , 
          lastName: null, 
          nameSubstitute: 'Scuba'},

        },

        
        workRelated: true,
        attachment: null

    } , //end TP chit

    'tp14': {
          
      chitId: 'tp14',
      chitDate: 1545931599000, //Dec 27, 2018,
             

      title: 'Gave Darrell bus advice',   

      type: 'standard',
      chitColor: 'silver',

      deedPerformedBy: 'nam0',

      otherParty: {
        otherPartyId: 'nam12',
        name: {firstName: 'Darrell' , 
        lastName: 'Carrington', 
        nameSubstitute: null},

      },

      
      workRelated: true,
      attachment: true

      } , //end TP chit
  
    } // end two party array of chits


 },  //end chitSummaries



// ==============================================================


'chits':  {

 

    'tp11': {
      
      chitId: 'tp11',
      chitDate: 1556990799000, //May 4, 2019 (date of chit action)
      timeStamp: 1556990799000, //May 4, 2019 (date chit posted)
      
      workRelated: false,           
      type: 'standard',
    
      otherParty: {
      otherPartyId: 'nam10',
            name: {firstName: 'Fran' , 
            lastName: 'Nicastro', 
            nameSubstitute: null},
      },   

      chitOriginator:'nam0',
      
      // ||||||||||||||||||||||||||||||||||||||
       
      chitColor: 'gold',
      deedPerformedBy: 'nam0',
          createdBy: 'nam10',

      title: 'let Fran use the pool',
      description: 'Let Fran use our pool',

      shared: false,
      notices: null 

      


    
    } , //end TP chit

    'tp12': {
        
      chitId: 'tp12',
      chitDate: 1545931599000, //Dec 27, 2018,
      timeStamp: 1551288399000, //Feb 27, 2019
      workRelated: false,
      type:  'standard'  ,
      
    
      otherPartyId:'nam11',
      otherPartyName: 'Greg - Scuba',
      chitOriginator: 'nam0',
      
      // ||||||||||||||||||||||||||||||||||||||
        
      chitColor: 'copper',
      deedPerformedBy: 'nam10',



      title:  'Scuba business help'  ,
      description:  'Helped Greg with his business strategy Spent hours and hours talking about diving and what to do .Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas aliquid blanditiis ducimus eius voluptatum neque quibusdam, aut dolorum est asperiores? Distinctio velit asperiores libero veritatis doloribus. Dolore, similique nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas aliquid blanditiis ducimus eius voluptatum neque quibusdam, aut dolorum est asperiores? Distinctio velit asperiores libero veritatis doloribus. Dolore, similique nostrum!',

      shared:   true,
      notices: null 



    },  // end TP chit

    'tp14': {
        
      chitId: 'tp14',
      chitDate: 1551288399000, //Feb 27, 2019
      timeStamp:  1551288399000, //Feb 27, 2019
      workRelated: false,
      type:  'standard'  ,
      
    
      otherPartyId:'nam12',
      otherPartyName: 'Darrell Carrington',
      chitOriginator: ' nam0',


      // ||||||||||||||||||||||||||||||||||||||
        
      chitColor: 'silver',
      deedPerformedBy: 'nam0',


      title: 'Gave Darrell bus advice',
      description:  'Introduced Darrell to Chit-a-bit.  Told him I would not be able to to work with him'  ,
      shared:   false ,

      notices: {

        'n1' : {
          
      
            noticeId: 'n1',
            chitId:  'tp14',
            noticeDate: 1556990799000, //May 4, 2019 (date of chit action)
      
            sender: 'nam0',
      
            otherParty: { 
              otherPartyId: 'nam12',
              name: {firstName: 'Darrell' , 
              lastName: 'Carrington', 
              nameSubstitute: null},
      
            },
      
            
            noticeType: 'shared',  // 'shared', 'feedback', etc
      
            viewed: false, // if sender = nam0 .... set to true
                           // if accordion opened && sender !nam0 ... true
                           // else false
      
            message: 'I created a chit for the time I spent with you, could you please prvide feedback or if appropriate a testimonial'
      
          } , //end notice

          'n2': {
      
            noticeId: 'n2',
            chitId:  'tp14',
            noticeDate: 1556990799000, //May 4, 2019 (date of chit action)
        
            sender: 'nam12',
        
            otherParty: { 
              otherPartyId: 'nam12',
              name: {firstName: 'Darrell' , 
              lastName: 'Carrington', 
              nameSubstitute: null},
        
            },
      
      }



    },  // end TP chit



 
  },  // end chits

// ==================================================
'notices':  {



    'n1': {
      
      noticeId: 'n1',
      chitId:  'tp14',
      noticeDate: 1556990799000, //May 4, 2019 (date of chit action)

      sender: 'nam0',

      otherParty: { 
        otherPartyId: 'nam12',
        name: {firstName: 'Darrell' , 
        lastName: 'Carrington', 
        nameSubstitute: null},

      },

      
      noticeType: 'shared',  // 'shared', 'feedback', etc

      viewed: false, // if sender = nam0 .... set to true
                     // if accordion opened && sender !nam0 ... true
                     // else false

      message: 'I created a chit for the time I spent with you, could you please prvide feedback or if appropriate a testimonial'

  } , //end notice

  'n2': {
      
    noticeId: 'n2',
    chitId:  'tp14',
    noticeDate: 1556990799000, //May 4, 2019 (date of chit action)

    sender: 'nam12',

    otherParty: { 
      otherPartyId: 'nam12',
      name: {firstName: 'Darrell' , 
      lastName: 'Carrington', 
      nameSubstitute: null},

    },

    
    noticeType: 'feedback',  // 'shared', 'feedback', etc

    viewed: false, // if sender = nam0 .... set to true
                   // if accordion opened && sender !nam0 ... true
                   // else false

    message: 'Thanks for your time.  But I really found you to be a bit full of yourself.  Learn some humility.',

  } , //end notice

} //end notices

},
// ==================================================

  'people': {

    'nam4': {
      id: 'nam4',
      name: {firstName: 'Rhonda' , 
            lastName: 'Farrar', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
     
    },

    'nam5': {
      id: 'nam5',
      name: {firstName: 'David' , 
            lastName: 'Anderson', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
    
    'nam6': {
      id: 'nam6',
      name: {firstName: 'Richard' , 
            lastName: 'Latin', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam7': {
      id: 'nam7',
      name: {firstName: 'Sherry' , 
            lastName: 'Miller', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam8': {
      id: 'nam8',
      name: {firstName: 'Emily' , 
            lastName: null, 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam9': {
      id: 'nam9',
      name: {firstName: 'Dean' , 
            lastName: 'Layton', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam10': {
      id: 'nam10',
      name: {firstName: 'Fran' , 
            lastName: 'Nicastro', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam11': {
      id: 'nam11',
      name: {firstName: 'Greg' , 
            lastName: null, 
            nameSubstitute: 'Scuba'},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam12': {
      id: 'nam12',
      name: {firstName: 'Darrell' , 
            lastName: 'Carrington', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam13': {
      id: 'nam13',
      name: {firstName: 'Don' , 
            lastName: null, 
            nameSubstitute: 'neighbor'},
      chitGitUserID: null,
      email: 'null'
      
    },
        
    'nam14': {
      id: 'nam14',
      name: {firstName: 'Lynn' , 
            lastName: 'Terhorst', 
            nameSubstitute: 'ass'},
      chitGitUserID: null,
      email: 'null'
    },
        
    'nam15': {
      id: 'nam15',
      name: {firstName: null,
            lastName: null, 
            nameSubstitute: 'Starbucks girl '},
      chitGitUserID: null,
      email: 'null'
      
    },

    'nam16': {
      id: 'nam16',
      name: {firstName: 'Harold' , 
            lastName: 'Green', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null'
      
    }

  }, // end people array

  'categories': {

    'cat1': {
      id: 'cat1',
      title: 'Work',
      description: 'Work related accomplishments',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    'cat2' : {
      id: 'cat2',
      title: 'Diet',
      description: 'cutting calories to 1500 per day',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    'cat3': {
      id: 'cat3',
      title: 'Exercise',
      description: '1/2 hour in gym',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    'cat4': {
      id: 'cat4',
      title: 'Work Sprint',
      description: '1 month total work concentration',
      startDay:  1581922733000, // 17 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    'cat5': {
      id: 'cat5',
      title: 'Wake - Work',
      description: 'Immediately work upon waking up',
      startDay:  1583434128000, // 5 Mar 2020 (date of chit action)
      endDay: ''
        
    }
  }
}


export default InitialStore
 