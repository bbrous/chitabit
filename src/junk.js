// Junk.js



/*    "2020-09-14T04:46:20.619Z"

(1) Upload to database

  DatetoUTC("2020-09-14T04:46:20.619Z") ... note:  my helper function
    - converts to Greenwich Mean Time - 1600058780619

(2) Download from database

    - new Date(1600058780619) 
      converts to local time when I use it

      P.S.  '1600058780619' is invalid 

 

*/

/* ** TIMER --- IMPERATIVE TO CLEAR INTERVAL in USE EFFECTS ***

Code below will run every second until the component unmounts

useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(seconds => seconds + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);


*/