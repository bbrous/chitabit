//InitialChitStore.js

/*

  Local_ID is the ID assigned to the other party for a specific user
  It does NOT require the other party to be a Chit Git member
  User_ID is assigned by Chit Git to members when they sign up

  persons: {

      Name            Local_ID  Usuer_ID

    1:  Unknown          0
    2:  Kindness         1
    3.  Brad             3       RT77
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
    id: "3",
    fname: "Brad",
    lname: "Brous",
    email: "brad.brous@visitell.com"


  },
 
 // ==============================================================

  'chits':  {

      twoParty: [
    
        {
          
            chitId: '11t',
            chitDate: 1556990799000, //May 4, 2019 (date of chit action)
            timeStamp: 1556990799000, //May 4, 2019 (date chit posted)
            
            workRelated: false,           
            type: 'standard',
          
            otherPartyId: '10',
            otherPartyName: 'Fran Nicastro',
            chitOriginator:'3',
            
            
            liability:' 10',
            asset: null,

            title: 'Pool use',
            description: 'Let Fran use our pool',

            shared: false,
            sharedMessage: null,
            


          
        } , //end TP chit

//.................................................................          //.................................................................

        {
          
          chitId: '12t',
          chitDate: 1545931599000, //Dec 27, 2018,
          timeStamp: 1551288399000, //Feb 27, 2019
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId:'11',
          otherPartyName: 'Greg - Scuba',
          chitOriginator: ' 3',
          liability:  null ,
          asset:  15 ,

          title:  'Scuba business help'  ,
          description:  'Helped Greg with his business strategy Spent hours and hours talking about diving and what to do .Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas aliquid blanditiis ducimus eius voluptatum neque quibusdam, aut dolorum est asperiores? Distinctio velit asperiores libero veritatis doloribus. Dolore, similique nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas aliquid blanditiis ducimus eius voluptatum neque quibusdam, aut dolorum est asperiores? Distinctio velit asperiores libero veritatis doloribus. Dolore, similique nostrum!',

          shared:   true ,
          sharedNote:  'Some day I may call on you to do a service for me.  But for now take this as a gift on my daughters wedding.'  ,


        },  // end TP chit

        {
          
          chitId: '14t',
          chitDate: 1551288399000, //Feb 27, 2019
          timeStamp:  1551288399000, //Feb 27, 2019
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId:'12',
          otherPartyName: 'Darrell Carrington',
          chitOriginator: ' 3',
          liability:  null ,
          asset: 40   ,

          title: 'Gave Darrell bus advice',
          description:  'Introduced Darrell to Chit-a-bit.  Told him I would not be able to to work with him'  ,
          shared:   false ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '15t',
          chitDate: 1552065999000, //Mar 8, 2019
          timeStamp: 1552065999000, //Mar 8, 2019
          workRelated: true,
          type: 'standard'   ,
          
        
          otherPartyId:  '13',
          otherPartyName:'Don - neighbor',
          chitOriginator: ' 3',
          liability: null  ,
          asset:  80  ,

          title: 'Tree Service Market'   ,
          description: 'Created market branding for his tree service including a logo and stragegy.',
          shared:  false  ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '16t',
          chitDate: 1556904399000, //May 3, 2019
          timeStamp: 1552065999000, //Mar 8, 2019
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId: '13',
          otherPartyName:  'Don-neighbor',
          chitOriginator: ' 3',
          liability:  30 ,
          asset:  null  ,

          title:  'Neighbor video'  ,
          description:   'Don made a video of my asshole neighbor',
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '17t',
          chitDate: 1554312399000, //May 4, 2019
          timeStamp:  1554312399000, //May 4, 2019
          workRelated: false,
          type: 'standard'   ,
          
        
          otherPartyId: '10',
          otherPartyName: 'Fran Nicastro',
          chitOriginator: ' 3',
          liability: 85  ,
          asset:  null  ,

          title: '$30 gift card'    ,
          description:  'Fran gave me Starbucks gift card',
          shared:  false  ,
          sharedNote:  null ,


        },  // end TP chit

        {
          
          chitId: '13t',
          chitDate: 1551720399000, //Apr 3, 2019
          timeStamp: 1551720399000, //Apr 3, 2019
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId: '10',
          otherPartyName:  'Fran Nicastro',
          chitOriginator:' 3',
          liability:  null ,
          asset:  10  ,

          title:   'Tablet gifted' ,
          description:  'Gave Fran my S tablet',
          shared:  false  ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '18t',
          chitDate: 1305182964000, //May 12, 2011
          timeStamp: 1305182964000, //May 12, 2011
          workRelated: false,
          type: 'standard'   ,
          
        
          otherPartyId:  '10',
          otherPartyName:  'Fran Nicastro',
          chitOriginator:' 3',
          liability: null  ,
          asset: 10   ,

          title:   'Oh blah dee ',
          description:   'Oh blah dee oh blah dah - Life goes on now',
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '19t',
          chitDate:  1545931599000, //Dec 27, 2018
          timeStamp: 1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'kindness'  ,
          
        
          otherPartyId:  '2',
          otherPartyName: 'Salvation Army',
          chitOriginator: '3',
          liability: null  ,
          asset:  15  ,

          title:  'Donation'  ,
          description: 'Gave $5 to Salvation Army',
          shared: false   ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '20t',
          chitDate:  1545931599000, //Dec 27, 2018
          timeStamp:  1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'kindness'  ,
          
        
          otherPartyId: '2',
          otherPartyName: 'Salvation Army',
          chitOriginator: ' 3',
          liability:  null ,
          asset: 15   ,

          title: '2nd Donation'   ,
          description:  'Gave $10 to Salvation Army',
          shared:  false  ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '21t',
          chitDate:   1545931599000, //Dec 27, 2018
          timeStamp:   1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'kindness'  ,
          
        
          otherPartyId: '2',
          otherPartyName: 'St Josephs',
          chitOriginator: ' 3',
          liability: null  ,
          asset: 25   ,

          title:  'Volunteer'  ,
          description:  'Served in a soup kitchen'  ,
          shared:  false  ,
          sharedNote:  null  ,


        },  // end TP chit

        {
          
          chitId: '22t',
          chitDate: 1545931599000, //Dec 27, 2018
          timeStamp: 1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'promise'  ,
          
        
          otherPartyId: '8',
          otherPartyName: 'Emily',
          chitOriginator: '3',
          liability: null  ,
          asset:  5  ,

          title:  'Random act of giving'  ,
          description:  'Bought a stranger lunch'  ,
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '23t',
          chitDate:  1577420565000, //Dec 27 2019
          timeStamp:  1577420565000, //Dec 27 2019
          workRelated: true,
          type: 'awChit',
          
        
          otherPartyId: '14',
          otherPartyName: 'Lynn Terhorst',
          chitOriginator: '3'  ,
          liability:  60 ,
          asset: null   ,

          title:  'Asshole'  ,
          description:  'asshole Lynn lied about me to Rich',
          shared: false   ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '24t',
          chitDate: 1545931599000, //Dec 27, 2018
          timeStamp: 1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId: '15',
          otherPartyName: 'Starbucks girl',
          chitOriginator: '3',
          liability: 5  ,
          asset: null   ,

          title:   'genroisty to a stranger' ,
          description:  'bought girl coffee when she was forgot money',
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '25t',
          chitDate: 1545931999000, //  ? 
          timeStamp: 1545931599000, //Dec 27, 2018
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId: '7',
          otherPartyName: 'Sherry Miller',
          chitOriginator: '3',
          liability: 5  ,
          asset: null   ,

          title:   'Pool' ,
          description:  'Bought Sherry a pool for her kids',
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit

        {
          
          chitId: '26t',
          chitDate: 1545931799000, //  ? 
          timeStamp: 1545971599000, //Dec 27, 2018
          workRelated: false,
          type:  'standard'  ,
          
        
          otherPartyId: '5',
          otherPartyName: 'David Anderson',
          chitOriginator: '3',
          liability: 45  ,
          asset: null   ,

          title:   'New Orleans trip' ,
          description:  'David bought me 3 dinners in New Orleans',
          shared:  false  ,
          sharedNote: null   ,


        },  // end TP chit// end TP chit

        {
          
          chitId: '27t',
          chitDate: 1582569809000, //Feb 24, 2020 (date of chit action)
          timeStamp: 1582569809000, //Feb 24, 2020 (date chit posted)
          
          workRelated: true,           
          type: 'standard',
        
          otherPartyId: '10',
          otherPartyName: 'Fran Nicastro',
          chitOriginator:'3',
          
          
          liability: 15,
          asset: null ,

          title: 'Article',
          description: 'Gave Fran article on old seekers - Feb 24, 2020 ',

          shared: false,
          sharedMessage: null,
          


        
      } , //end TP chit

      ] ,    // end twoParty array of chits



    
// ==========PERSONAL ====================================================

    personal: [
        
      {
      
        chitId: '101p',
        chitDate: 1577081943000, //23 Dec, 2019 (date of chit action)
        timeStamp: 1577081943000, //23 Dec, 2019 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: true,
        chit: 'gold',
        title: 'Work idea',
        description: 'Created brilliant idea at work',
        workRelated: true
        


      
      } , //end PE chit
        
      {
      
        chitId: '102p',
        chitDate: 1577168343000, //24 Dec 2019 (date of chit action)
        timeStamp: 1577168343000, //24 Dec 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise - 24 Dec',
        milestone: false,
        chit: 'red',
        title: '2 blocks',
        description: 'Just did not feel like it',
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '103p',
        chitDate: 1577254743000, //25 Dec 2019 (date of chit action)
        timeStamp: 1577254743000, //25 Dec 2019 (date chit posted)
        type: 'personal',
        categoryId: '2', 
        category: 'Diet',
        milestone: false,
        chit: 'silver',
        title: 'Fasted day - 25 Dec',
        description: 'made it almost all the way on my Xmas fast',
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '104p',
        chitDate: 1578291543000, //6 Jan 2020 (date of chit action)
        timeStamp: 1578291543000, //6 Jan 2020 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: true,
        chit: 'copper',
        title: 'Project complete - 6 Jan',
        description: 'Finished major project',
        workRelated: true
        


      
      } , //end PE chit
        
      {
      
        chitId: '105p',
        chitDate: 1578377943000, //7 Jan 2020  (date of chit action)
        timeStamp: 1578377943000, //7 Jan 2020  (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'silver',
        title: '3 miles - 7 Jan',
        description: 'Ran 3 miles',
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '106p',
        chitDate: 1578637143000, //10 Jan 2020 (date of chit action)
        timeStamp: 1578637143000, //10 Jan 2020 (date chit posted)
        type: 'personal',
        categoryId: '2', 
        category: 'Diet',
        milestone: true,
        chit: 'gold',
        title: 'Salad day - 10 Jan ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '107p',
        chitDate: 1580624343000, //2 Feb 2020 (date of chit action)
        timeStamp: 1580624343000, //2 Feb 2020 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: false,
        chit: 'copper',
        title: 'Worked late - 2 Feb',
        description: 'spent an hour on graphQl',
        workRelated: true
        


      
      } , //end PE chit
        
      {
      
        chitId: '108p',
        chitDate: 1580710743000, //3 Feb 2020  (date of chit action)
        timeStamp: 1580710743000, //3 Feb 2020  (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: '1 mile - 3 Feb',
        description: 'Ran 3 miles',
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '109p',
        chitDate: 1580883543000, //5 Feb 2020 (date of chit action)
        timeStamp: 1580883543000, //5 Feb 2020 (date chit posted)
        type: 'personal',
        categoryId: '2', 
        category: 'Diet',
        milestone: false,
        chit: 'silver',
        title: 'Salad day - 5 Feb ',
        description: null,
        workRelated: false
        

      },  // end PE chit


      {
      
        chitId: '110p',
        chitDate: 1582637055000, // 25 Feb 2020 (date of chit action)
        timeStamp: 1582637055000, //25 Feb 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'copper',
        title: 'Basic ledger map done - 25 Feb ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '111p',
        chitDate: 1580537943000, // 1 Feb 2020 (date of chit action)
        timeStamp: 1580537943000, // 1 Feb 2020 (date chit posted)
        type: 'personal',
        categoryId: '2', 
        category: 'Diet',
        milestone: false,
        chit: 'silver',
        title: 'Salad day - 1 Feb ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '112p',
        chitDate: 1577859543000, // 1 Jan 2020 (date of chit action)
        timeStamp: 1577859543000, // 1 Jan 2020 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'gold',
        title: 'Went to gym - 1 Jan ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '113p',
        chitDate: 1606780800000, // 1 Dec 2019 (date of chit action)
        timeStamp: 1606780800000, // 1 Dec 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 1 Dec ',
        description: null,
        workRelated: false
        

      },  // end PE chit





      {
      
        chitId: '114p',
        chitDate: 1572566400000, // 1 Nov 2019 (date of chit action)
        timeStamp: 1572566400000, // 1 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 1 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '115p',
        chitDate: 1572652800000, // 2 Nov 2019 (date of chit action)
        timeStamp: 1572652800000, // 2 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 2 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '116p',
        chitDate: 1573603200000, // 13 Nov 2019 (date of chit action)
        timeStamp: 1573603200000, // 13 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 13 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '117p',
        chitDate: 1573689600000, // 14 Nov 2019 (date of chit action)
        timeStamp: 1573689600000, // 14 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: true,
        chit: 'gold',
        title: 'Ran 5 miles- 14 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '118p',
        chitDate: 1574985600000, // 29 Nov 2019 (date of chit action)
        timeStamp: 1574985600000, // 29 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 29 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '119p',
        chitDate: 1575072000000, // 30 Nov 2019 (date of chit action)
        timeStamp: 1575072000000, // 30 Nov 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'silver',
        title: 'Walked 3 miles - 30 Nov ',
        description: null,
        workRelated: false
        

      },  // end PE chit


      {
      
        chitId: '120p',
        chitDate: 1569888000000, // 1 Oct 2019 (date of chit action)
        timeStamp: 1569888000000, // 1 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 1 Oct ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '121p',
        chitDate: 1569974400000, // 2 Oct 2019 (date of chit action)
        timeStamp: 1569974400000, // 2 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 2 Oct ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '123p',
        chitDate: 1570924800000, // 13 Oct 2019 (date of chit action)
        timeStamp: 1570924800000, // 13 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 13 Oct ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '124p',
        chitDate: 1571011200000, // 14 Oct 2019 (date of chit action)
        timeStamp: 1571011200000, // 14 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 14 Oct ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '125p',
        chitDate: 1572307200000, // 29 Oct 2019 (date of chit action)
        timeStamp: 1572307200000, // 29 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 29 Oct ',
        description: null,
        workRelated: false
        

      },  // end PE chit

      {
      
        chitId: '126p',
        chitDate: 1572480000000, // 31 Oct 2019 (date of chit action)
        timeStamp: 1572480000000, // 31 Oct 2019 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'copper',
        title: 'Walked 1 mile - 31 Oct ',
        description: null,
        workRelated: false
        

      } ,  // end PE chit

      {
      
        chitId: '127p',
        chitDate:1581948520000, // 17 Februar 2020 (date of chit action)
        timeStamp:1581948520000, // 17 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '3', 
        category: 'Exercise',
        milestone: false,
        chit: 'silver',
        title: 'Walked 2 miles - Feb 17 ',
        description: null,
        workRelated: false
        

      }  ,  // end PE chit

      {
      
        chitId: '128p',
        chitDate:1581948520033, // 17 Februar 2020 (date of chit action)
        timeStamp:1581948520033, // 17 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '2', 
        category: 'Diet',
        milestone: false,
        chit: 'silver',
        title: 'Ate Salad - Feb 17 ',
        description: null,
        workRelated: false
        

      }  ,  // end PE chit

      {
      
        chitId: '129p',
        chitDate:1581948520046, // 17 Februar 2020 (date of chit action)
        timeStamp:1581948520046, // 17 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: true,
        chit: 'copper',
        title: 'Detail Modal',
        description: 'I got the personal detail chit modal working',
        workRelated: true
        

      }  ,  // end PE chit

      {
      
        chitId: '130p',
        chitDate:1582034920000, // 18 Februar 2020 (date of chit action)
        timeStamp:1582034920000, // 18 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: false,
        chit: 'gold',
        title: 'Finished calendar - Feb 18 ',
        description: 'Good day for work',
        workRelated: true
        

      } ,  // end PE chit

      {
      
        chitId: '131p',
        chitDate:1581862120000, // 16 Februar 2020 (date of chit action)
        timeStamp:1581862120000, // 16 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '1', 
        category: 'Work',
        milestone: false,
        chit: 'copper',
        title: 'Sprint Begin ',
        description: 'Good first effort - Feb 16',
        workRelated: true
        

      } ,  

  //************************** */    
      {
      
        chitId: '132p',
        chitDate:1581922733000, // 17 Februar 2020 (date of chit action)
        timeStamp:1581922733000, // 17 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'Sprint Begin ',
        description: 'Good first effort - Feb 17',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '133p',
        chitDate:1582009133000, // 18 Februar 2020 (date of chit action)
        timeStamp:1582009133000, // 18 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: '2nd day ',
        description: 'Good first effort - Feb 18',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '134p',
        chitDate:1582095533000, // 19 Februar 2020 (date of chit action)
        timeStamp:1582095533000, // 19 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: '3rd day ',
        description: 'Day 3 - Feb 19',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '135p',
        chitDate:1582181933000, // 20 Februar 2020 (date of chit action)
        timeStamp:1582181933000, // 20 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: '4th day ',
        description: 'Day 4 - Feb 19',
        workRelated: true
        

      } ,  // end PE chit

      {
      
        chitId: '136p',
        chitDate:1582268333000, // 21 Februar 120 (date of chit action)
        timeStamp:1582268333000, // 21 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: '5th day ',
        description: 'Day 5 - Feb 21',
        workRelated: true
        

      }  ,  // end PE chit

      {
      
        chitId: '137p',
        chitDate: 1582354733000, // 22 Februar 120 (date of chit action)
        timeStamp: 1582354733000, // 22 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'gold',
        title: '6th day ',
        description: 'Day 6 - Feb 22',
        workRelated: true
        

      }  ,  // end PE chit

      {
      
        chitId: '138p',
        chitDate: 1582441133000, // 23 Februar 120 (date of chit action)
        timeStamp: 1582441133000, // 23 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'gold',
        title: '7th day ',
        description: 'Day 7 - Feb 22',
        workRelated: true
        

      },   // end PE chit

      {
      
        chitId: '139p',
        chitDate:1582530359000, // 24 Februar 2020 (date of chit action)
        timeStamp:1582530359000, // 24 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work',
        milestone: true,
        chit: 'silver',
        title: 'Started PE ledger',
        description: 'Ledger started - Feb 24',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '140p',
        chitDate:1582657493000, // 25 Februar 2020 (date of chit action)
        timeStamp:1582657493000, // 25 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'More progress',
        description: 'Ledger work - Feb 25',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '141p',
        chitDate:1582743893000, // 26 Februar 2020 (date of chit action)
        timeStamp:1582743893000, // 26 Februar 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: true,
        chit: 'gold',
        title: 'Finished Personal Chits',
        description: 'Finished PE ledger... eliminated graph ....so finished this section',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '142p',
        chitDate:1582793140000, // 27 February 2020 (date of chit action)
        timeStamp:1582793140000, // 27 February 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'Work Chit begin',
        description: 'Basic layout set up',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '144p',
        chitDate:1582965940000, // 29 February 2020 (date of chit action)
        timeStamp:1582965940000, // 29 February 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'copper',
        title: 'Work Chit ',
        description: 'More set up',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '143p',
        chitDate:1582879540000, // 28 February 2020 (date of chit action)
        timeStamp:1582879540000, // 28 February 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'copper',
        title: 'Fixed little issues',
        description: 'Ledger head, month navigation',
        workRelated: true
        

      } ,  // end PE chit

      {
      
        chitId: '145p',
        chitDate:1583078329000, // 1 March 2020 (date of chit action)
        timeStamp:1583078329000, // 1 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'red',
        title: 'Burnt out',
        description: '',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '146p',
        chitDate:1583191938000, // 2 March 2020 (date of chit action)
        timeStamp:1583191938000, //2 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'ok day 2 March',
        description: '',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '147p',
        chitDate:1583278338000, // 3 March 2020 (date of chit action)
        timeStamp:1583278338000, // 3 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'better day',
        description: '',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '148p',
        chitDate:1583434128000, // 5 March 2020 (date of chit action)
        timeStamp:1583434128000, // 5 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'gold',
        title: 'good day',
        description: ' Got most of the work chit display working',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '149p',
        chitDate:1583434128002, // 5 March 2020 (date of chit action)
        timeStamp:1583434128002, // 5 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '5', 
        category: 'Wake - Work',
        milestone: false,
        chit: 'silver',
        title: 'Slept 3 times',
        description: 'Worked after all 3 naps... only silver because didnt think about it until after the first sleep session ',
        workRelated: true
        

      },  // end PE chit

      {
      
        chitId: '150p',
        chitDate:1583347728000, // 4 March 2020 (date of chit action)
        timeStamp:1583347728000, // 4 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: false,
        chit: 'silver',
        title: 'Slept 3 times',
        description: ' ',
        workRelated: true
        

      }  ,  // end PE chit

      {
      
        chitId: '151p',
        chitDate:1583477461000, // 4 March 2020 (date of chit action)
        timeStamp:1583477461000, // 4 March 2020 (date chit posted)
        type: 'personal',
        categoryId: '4', 
        category: 'Work Sprint',
        milestone: true,
        chit: 'gold',
        title: 'Work Section Complete',
        description: ' Completed Work Section... took  1 week',
        workRelated: true
        

      }  // end PE chit


      




    ]  ,    // end personal array of chits  
    
  // ==============================================================  
  
    work: [
    
      {
          
        chitId: '1001w',
        chitDate: 1545931599000, //Dec 27, 2018
        timeStamp: 1545931599000, //Dec 27, 2018
        workRelated: true,  
        type:  'standard'  ,
        
      
        otherPartyId: '14',
        otherPartyName: 'Lynn Terhorst',
        chitOriginator: '3',
        liability: null  ,
        asset: 15   ,

        title:   'Gave Lynn my trip' ,
        description:  'Recommended to Rich that he send Lynn to Europe for ECC meeting in Amesterdam.  He was going to send me.',
        shared:  false  ,
        sharedNote: null   ,


      },  // end WO chit

      {
          
        chitId: '1002w',
        chitDate: 1545931599000, //Dec 27, 2018
        timeStamp: 1545931599000, //Dec 27, 2018
        workRelated: true,  
        type:  'standard'  ,
        
      
        otherPartyId: '16',
        otherPartyName: 'Harold Green',
        chitOriginator: '3',
        liability: 20  ,
        asset: null   ,

        title:   'Software program' ,
        description:  'Harold wrote a software program for me to colorize contrast.',
        shared:  false  ,
        sharedNote: null   

      }, // end WO chit


      
/* --------------- SPECIAL NOTE -------
      Chits 102p and 103p are on the same day in order  
      to show multiple chit icon.
      ---------------------------------
*/

      {
        
        chitId: '1003w',
          chitDate: 1556990799000, //May 4, 2019 (date of chit action)
          timeStamp: 1556990799000, //May 4, 2019 (date chit posted)
          workRelated: true,
          type: 'personal',
          category: 'work',
          chit: 'silver',
          title: 'Brilliant idea',
          description: 'Created brilliant idea at work'


    } // end WO chit

  
  ] // end work array of chits
 },
// ==============================================================

  'karma': {
    assetTotal: 775,
    liabilityTotal: 333

  },

  'goodWill': {
    assetTotal: 40,
    liabilityTotal: 0

  },

  'people': [

    {
      id: '4',
      name: {firstName: 'Rhonda' , 
            lastName: 'Farrar', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 10000,
      liabilityTotal: 0
    },

    {
      id: '5',
      name: {firstName: 'David' , 
            lastName: 'Anderson', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 55,
      liabilityTotal: 90
    },
    
    {
      id: '6',
      name: {firstName: 'Richard' , 
            lastName: 'Latin', 
            nameSubstitute: null},
      chitGitUserID: 'QS865',
      hasWorkChits: false,
      assetTotal: 175,
      liabilityTotal: 115
    },
        
    {
      id: '7',
      name: {firstName: 'Sherry' , 
            lastName: 'Miller', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 155,
      liabilityTotal: 20
    },
        
    {
      id: '8',
      name: {firstName: 'Emily' , 
            lastName: null, 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 20,
      liabilityTotal: 0
    },
        
    {
      id: '9',
      name: {firstName: 'Dean' , 
            lastName: 'Layton', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 0,
      liabilityTotal: 35
    },
        
    {
      id: '10',
      name: {firstName: 'Fran' , 
            lastName: 'Nicastro', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 55,
      liabilityTotal: 15
    },
        
    {
      id: '11',
      name: {firstName: 'Greg' , 
            lastName: null, 
            nameSubstitute: 'Scuba'},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 20,
      liabilityTotal: 0
    },
        
    {
      id: '12',
      name: {firstName: 'Darrell' , 
            lastName: 'Carrington', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 25,
      liabilityTotal: 0
    },
        
    {
      id: '13',
      name: {firstName: 'Don' , 
            lastName: null, 
            nameSubstitute: 'neighbor'},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 25,
      liabilityTotal: 25
    },
        
    {
      id: '14',
      name: {firstName: 'Lynn' , 
            lastName: 'Terhorst', 
            nameSubstitute: 'ass'},
      chitGitUserID: null,
      hasWorkChits: true,
      assetTotal: 0,
      liabilityTotal: 75
    },
        
    {
      id: '15',
      name: {firstName: null,
            lastName: null, 
            nameSubstitute: 'Starbucks girl '},
      chitGitUserID: null,
      hasWorkChits: false,
      assetTotal: 5,
      liabilityTotal: 0
    },

    {
      id: '16',
      name: {firstName: 'Harold' , 
            lastName: 'Green', 
            nameSubstitute: null},
      chitGitUserID: null,
      hasWorkChits: true,
      assetTotal: 0,
      liabilityTotal: 20
    }

  ], // end people array

  'categories': [

    {
      id: '1',
      title: 'Work',
      description: 'Work related accomplishments',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    {
      id: '2',
      title: 'Diet',
      description: 'cutting calories to 1500 per day',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    {
      id: '3',
      title: 'Exercise',
      description: '1/2 hour in gym',
      startDay:  1580537943000, // 1 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    {
      id: '4',
      title: 'Work Sprint',
      description: '1 month total work concentration',
      startDay:  1581922733000, // 17 Feb 2020 (date of chit action)
      endDay: ''
        
    },
    {
      id: '5',
      title: 'Wake - Work',
      description: 'Immediately work upon waking up',
      startDay:  1583434128000, // 5 Mar 2020 (date of chit action)
      endDay: ''
        
    }
  ]
}


export default InitialStore
 