// commonHelpers.js  .... IN   CHIT-A-BIT


// ###############################################################
// ####  JOURNAL SPECIFIC  HELPERS ADDED HERE  ###################
// ################ ----CHIT-A-BIT --- ###########################









// ####  JOURNAL SPECIFIC  HELPERS ADDED HERE  ###################
// ###############################################################
// #### Below are existent Chit Git Helpers ######################


// -- chit image addresses --
export const CHIT_ADDRESS = {
  awChit: 'images/chit_red.svg',
  goldChit: 'images/chit_gold.svg',
  silverChit: 'images/chit_silver.svg',
  copperChit: 'images/chit_copper.svg',
  promiseChit: 'images/chit_promise.svg',
  kindnessChit: 'images/chit_kindness.svg',
}


/* -- func getAllChits ------------------
  @desc - sorts all chits by date
  @params array of chits
  @return array sorted 

---------------------*/
export function getAllChits(chits){

  
  chits.sort((a, b) => (a.date > b.date) ? -1 : 1)

  return chits


}


/* -- func getPersonChits ------------------
  @desc - gets an individual's chits
  @params array of chits
  @return array sorted 

---------------------*/
export function getPersonChits(chits, id){

  let personChits = chits.filter(function(chit){

    return chit.otherParty.otherPartyId === id

  }).sort((a, b) => (a.date > b.date) ? -1 : 1)

     
  return personChits


}

/* -- func chitFilter ------------------
  @desc - gets all chits for a specific person Id
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/
export function chitFilter(chits, filterId){

    let displayedChits

  if(filterId === 'all' ){

    displayedChits = getAllChits(chits)
    
  }else{
    displayedChits = getPersonChits(chits, filterId)
  }


  return displayedChits
}

/* -- func categoryChitFilter ------------------
  @desc - gets all chits for a specific Id
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/
export function categoryChitFilter(chitsArray, categoryId){

  let displayedChits
  
if(categoryId === 'all' ){

  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)
  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId', categoryId)

  displayedChits = chitsArray
  
}else if(categoryId === 'milestones' ){

  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId ', categoryId)
  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)

  displayedChits = chitsArray.filter(function(chits){

    return chits.milestone === true

  })
}else{

  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)
  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId', categoryId)

  displayedChits = chitsArray.filter(function(chits){

    return chits.categoryId === categoryId

  })
}




return displayedChits
}


/* -- func workChitFilter ------------------
  @desc - gets all chits for a specific Id
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/
export function workChitFilter(chitsArray, type){

  let displayedChits

if(type === 'all' ){

  displayedChits = chitsArray
  
}else if(type === 'personal' ){
  displayedChits = chitsArray.filter(function(chits){

    return chits.type === 'personal'

  })
}else{

  displayedChits = chitsArray.filter(function(chits){

    return chits.type !== 'personal'

  })
}




return displayedChits
}
/* -- func getPersonDisplayName ------------------
  @desc - creates name from id from redux store displayId
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/

export function getPersonDisplayName(chits, id){

  let personChits = chits.find(function(chit){


    return chit.otherPartyId === id

  })

  let personName = personChits.otherPartyName


     
  return personName


}

/* -- func getChitDetail ------------------
  @desc - gets single chit detail from array of chits
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/

export function getChitDetail(chits, id){

  let chitDetail = chits.find(function(chit){

    return chit.chitId === id

  })

  
     
  return chitDetail


}




/* -- func nameDisplay ------------------
  @desc - creates name display from parts
  @params - firstName, lastName, nameSub
  @return -  name to be Displayed 

---------------------*/

export function nameDisplay(firstName, lastName, nameSub){

  let nameDisplayed

  if((firstName !== null) && (lastName !== null)){
    nameDisplayed = firstName + ' ' + lastName
  }



  if((firstName !== null) && (lastName === null)){
    nameDisplayed = firstName + ' - ' + nameSub
  }

  if((firstName === null) && (lastName !== null)){
    nameDisplayed = lastName + ' - ' + nameSub
  }

  if((firstName === null) && (lastName === null) && (nameSub !== null)){
    nameDisplayed =   nameSub  + ' -- '
  }


  if((firstName === null) && (lastName === null) && (nameSub === null)){
    nameDisplayed = 'unknown'  
  }
  
  if((firstName !== null) && (lastName === null) && (nameSub === null)){
    nameDisplayed = firstName 
  }
  return nameDisplayed


}

//==============================
export function chooseChitcoin(type, chitColor){
  
/*

  NOTE :  These addresses come from the public folder not src


*/

  const address ={
    standardCopper:   'images/chitCoins/copper_standard.svg ',
    standardSilver:   'images/chitCoins/silver_standard.svg ',
    standardGold:     'images/chitCoins/gold_standard.svg ',


    promiseCopper: 'images/chitCoins/copper_promise.svg',
    promiseSilver: 'images/chitCoins/silver_promise.svg',
    promiseGold: 'images/chitCoins/gold_promise.svg',


    awChit: 'images/chitCoins/awChit.svg '
  }

  let coinAddress
 
  let coinColor = chitColor


  //---------------------
  if(type === "standard" && coinColor ==='copper'){
    coinAddress = address.standardCopper
    return ( coinAddress )
  }

  if(type === "standard" && coinColor ==='silver'){
    coinAddress = address.standardSilver
    return ( coinAddress )
  }

  if(type === "standard" && coinColor ==='gold'){
    coinAddress = address.standardGold
    return ( coinAddress )
  }


  // --------------

  if(type === "promise" && coinColor ==='copper'){
    coinAddress = address.promiseCopper
    return ( coinAddress )
  }

  if(type === "promise" && coinColor ==='silver'){
    coinAddress = address.promiseSilver
    return ( coinAddress )
  }

  if(type === "promise" && coinColor ==='gold'){
    coinAddress = address.promiseGold
    return ( coinAddress )
  }

  // --------------


  if(chitColor === "red"){
    coinAddress = address.awChit
    return (coinAddress)
  }



}


export function choosePersonalCoin(chitColor){

  let coinColor = chitColor
  let coinAddress
  
/*

  NOTE :  These addresses come from the public folder not src


*/
  const address ={


    personalCopper: 'images/chitCoins/copper_personal.svg',
    personalSilver: 'images/chitCoins/silver_personal.svg',
    personalGold:   'images/chitCoins/gold_personal.svg',
    multipleChits:   'images/chitCoins/multiple_chits.svg',
    awChit: 'images/chitCoins/awChit.svg ',
    star: 'images/chitCoins/star.svg '
  }

  if( coinColor ==='copper'){
    coinAddress = address.personalCopper
    return ( coinAddress )
  }

  if(coinColor ==='silver'){
    coinAddress = address.personalSilver
    return ( coinAddress )
  }

  if(coinColor ==='gold'){
    coinAddress = address.personalGold
    return ( coinAddress )
  } 

  if(coinColor ==='red'){
    coinAddress = address.awChit
    return ( coinAddress )
  } 

  if(coinColor ==='multiple'){
    coinAddress = address.multipleChits
    return ( coinAddress )
  } 

  
  if(coinColor ==='milestone'){
    coinAddress = address.star
    return ( coinAddress )
  } 

}

