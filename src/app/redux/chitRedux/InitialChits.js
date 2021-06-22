// Initial Chits

//  Reformatted 2 party chits from Chit Pro

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

export const InitialChits = {

  // ---Status -----------------------------------

  'status' : {
    lastId: 'tp11',



  },

  // ---Two Party Chits-----------------------------------

    'twoParty': [

      {

        chitId: 'tp11',
        timeStamp: 1556990799000, //May 4, 2019 (date of chit action),
        chitDate: 155890799000, //May 4, 2019 (date of chit action)

        otherParty: {
          otherPartyId: 'nam10',
          name: {
            firstName: 'Fran',
            lastName: 'Nicastro',
            nameSubstitute: null
          },

        },

        deedPerformedBy: 'nam0',


        workRelated: false,
        shared: false,
        attachment: null,

        title: 'Pool use',
        description: null,

        type: 'standard',
        chitColor: 'gold',



      }, //end TP chit summary summary



      {

        chitId: 'tp12',
        chitDate: 1545931599000, //Dec 27, 2018,


        title: 'Scuba business help',

        type: 'standard',
        chitColor: 'copper',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam11',
          name: {
            firstName: 'Greg',
            lastName: null,
            nameSubstitute: 'Scuba'
          },

        },


        workRelated: true,
        attachment: null

      }, //end TP chit summary

      {

        chitId: 'tp14',
        chitDate: 1545931599000, //Dec 27, 2018,


        title: 'Gave Darrell bus advice',

        type: 'standard',
        chitColor: 'silver',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam12',
          name: {
            firstName: 'Darrell',
            lastName: 'Carrington',
            nameSubstitute: null
          },

        },


        workRelated: true,
        attachment: true

      }, //end TP chit summary

      {

        chitId: 'tp15',
        chitDate: 1552065999000, //Mar 8, 2019

        title: 'Tree Service Market',

        type: 'standard',
        chitColor: 'gold',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam13',
          name: {
            firstName: 'Don',
            lastName: null,
            nameSubstitute: 'neighbor'
          },

        },

        workRelated: false,
        attachment: false

      }, //end TP chit summary


      {

        chitId: 'tp16',
        chitDate: 1556904399000, //May 3, 2019

        title: 'Neighbor video',

        type: 'standard',
        chitColor: 'silver',

        deedPerformedBy: 'nam13',

        otherParty: {
          otherPartyId: 'nam13',
          name: {
            firstName: 'Don',
            lastName: null,
            nameSubstitute: 'neighbor'
          },

        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary


      {

        chitId: 'tp17',
        chitDate: 1554312399000, //May 4, 2019

        title: '$30 gift card',

        type: 'standard',
        chitColor: 'gold',

        deedPerformedBy: 'nam13',

        otherParty: {
          otherPartyId: 'nam10',
          name: {
            firstName: 'Fran',
            lastName: 'Nicastro',
            nameSubstitute: null
          },

        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp13',
        chitDate: 1551720399000, //Apr 3, 2019

        title: 'Tablet gifted',

        type: 'standard',
        chitColor: 'copper',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam10',
          name: {
            firstName: 'Fran',
            lastName: 'Nicastro',
            nameSubstitute: null
          },

        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp18',
        chitDate: 1551720399000, //Apr 3, 2019

        title: 'a Promise Oh blah dee ',

        type: 'promise',
        chitColor: 'silver',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam10',
          name: {
            firstName: 'Fran',
            lastName: 'Nicastro',
            nameSubstitute: null
          },

        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp22',
        chitDate: 1545931599000, //Dec 27, 2018

        title: 'Gave Emily a job',

        type: 'standard',
        chitColor: 'gold',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam8',
          name: {
            firstName: 'Emily',
            lastName: null,
            nameSubstitute: null
          },

        },

        workRelated: true,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp23',
        chitDate: 1577420565000, //Dec 27 2019

        title: 'Asshole',

        type: 'awChit',
        chitColor: 'red',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam14',
          name: {
            firstName: 'Lynn',
            lastName: 'Terhorst',
            nameSubstitute: 'ass'
          },

        },


        workRelated: true,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp24',
        chitDate: 1545931599000, //Dec 27, 2018

        title: 'Bought a stranger coffee and a snack',

        type: 'standard',
        chitColor: 'copper',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam15',
          name: {
            firstName: null,
            lastName: null,
            nameSubstitute: 'Starbucks girl '
          },
        },


        workRelated: false,
        attachment: true

      }, //end TP chit summary


      {

        chitId: 'tp25',
        chitDate: 1545931999000, //  ? 

        title: 'Bought Sherry a pool for her kids',

        type: 'standard',
        chitColor: 'gold',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam7',
          name: {
            firstName: 'Sherry',
            lastName: 'Miller',
            nameSubstitute: null
          },
        },

        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp26',
        chitDate: 1545931799000, //  ? 

        title: 'New Orleans trip',

        type: 'standard',
        chitColor: 'silver',

        deedPerformedBy: 'nam5',

        otherParty: {
          otherPartyId: 'nam5',
          name: {
            firstName: 'David',
            lastName: 'Anderson',
            nameSubstitute: null
          },
        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp27',
        chitDate: 1582569809000, //Feb 24, 2020 (date of chit action)

        title: 'Gave Fran Article',

        type: 'standard',
        chitColor: 'copper',

        deedPerformedBy: 'nam0',

        otherParty: {
          otherPartyId: 'nam10',
          name: {
            firstName: 'Fran',
            lastName: 'Nicastro',
            nameSubstitute: null
          },
        },


        workRelated: false,
        attachment: false

      }, //end TP chit summary

      {

        chitId: 'tp28',
        chitDate: 1593702097000, //July 2, 2020 (date of chit action)

        title: 'Dean gave Advice',

        type: 'standard',
        chitColor: 'gold',

        deedPerformedBy: 'nam9',

        otherParty: {
          otherPartyId: 'nam9',
          name: {
            firstName: 'Dean',
            lastName: 'Layton',
            nameSubstitute: null
          },
        },


        workRelated: true,
        attachment: false

      }, //end TP chit summary





    ], // end two party array of chits




// ==================================================

  'people': [

    {
      id: 'nam4',
      name: {firstName: 'Rhonda' , 
            lastName: 'Farrar', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Rhonda Farar',
    
    },

    {
      id: 'nam5',
      name: {firstName: 'David' , 
            lastName: 'Anderson', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'David Anderson',
      
    },
    
    {
      id: 'nam6',
      name: {firstName: 'Richard' , 
            lastName: 'Latin', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Richard Latin',
      
    },
        
    {
      id: 'nam7',
      name: {firstName: 'Sherry' , 
            lastName: 'Miller', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Sherry Miller',
      
    },
        
    {
      id: 'nam8',
      name: {firstName: 'Emily' , 
            lastName: null, 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Emily',
      
    },
        
    {
      id: 'nam9',
      name: {firstName: 'Dean' , 
            lastName: 'Layton', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Dean Layton',
      
    },
        
    {
      id: 'nam10',
      name: {firstName: 'Fran' , 
            lastName: 'Nicastro', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Fran Nicastro',
      
    },
        
    {
      id: 'nam11',
      name: {firstName: 'Greg' , 
            lastName: null, 
            nameSubstitute: 'Scuba'},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Greg - Scuba',
      
    },
        
    {
      id: 'nam12',
      name: {firstName: 'Darrell' , 
            lastName: 'Carrington', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Darrell Carrington',
      
    },
        
    {
      id: 'nam13',
      name: {firstName: 'Don' , 
            lastName: null, 
            nameSubstitute: 'neighbor'},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Don - neighbor',
      
    },
        
    {
      id: 'nam14',
      name: {firstName: 'Lynn' , 
            lastName: 'Terhorst', 
            nameSubstitute: 'ass'},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Lynn Terhorst',
    },
        
    {
      id: 'nam15',
      name: {firstName: null,
            lastName: null, 
            nameSubstitute: 'Starbucks girl '},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Starbucks girl',
      
    },

    {
      id: 'nam16',
      name: {firstName: 'Harold' , 
            lastName: 'Green', 
            nameSubstitute: null},
      chitGitUserID: null,
      email: 'null',
        
      otherPartyDisplayName: 'Harold Green',
      
    }

  ], // end people array







  // ===========================================================

}// end InitialChits Store












