//dateHelper.js


export const monthArray = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
  ]

export const monthArrayLong = [
  'January','February','March','April','May','June','July','August','September','October','November','December',
  ]

export function UTCtoDate(milSeconds){


  let year = new Date(milSeconds).getFullYear()
  let monthNumeric = new Date(milSeconds).getMonth()
  let month = monthArray[monthNumeric]
  let day = new Date(milSeconds).getDate()


  let dateReconstituted = day + ' ' + month + ' - ' + year

 

  return dateReconstituted
  }

  export function UTCtoDateTradional(milSeconds){


    let year = new Date(milSeconds).getFullYear()
    let monthNumeric = new Date(milSeconds).getMonth()
    let month = monthArray[monthNumeric]
    let day = new Date(milSeconds).getDate()
  
  
    let dateReconstituted =  month + ' ' +   day+ ', ' + year
  
   
  
    return dateReconstituted
    }


// convert a dateFormat to UTC Epoch milliseconds
// input format is:  '27 April 2019'

export function DatetoUTC(aDate){


  let inputDate = new Date(aDate)
  let outputUTC = inputDate.getTime();

  return outputUTC

}


export function unformattedUTCtoDate(milSeconds){
  /* func unformattedUTCtoDate
      converts a  UTC timestamp 
      to human readable date

      @param  num (milliseconds)
      @return str (mm dd yy)
  */

  let year = new Date(milSeconds).getFullYear()
  let monthNumeric = new Date(milSeconds).getMonth() + 1
   
  let day = new Date(milSeconds).getDate()


  let dateReconstituted =  monthNumeric + '/' +   day + ' - ' + year

 

  return dateReconstituted
  }



