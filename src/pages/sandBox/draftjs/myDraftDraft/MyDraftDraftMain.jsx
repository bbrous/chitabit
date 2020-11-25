import React, { useState, useEffect } from "react";

import MyCustomEditor from './MyCustomEditor.js'
import stringToDraftState from './utils/stringToDraftState'




const MyDraftDraftMain = () => {

    // ###################################################
  // ###################################################
 

  let databaseSavedText = '{"blocks":[{"key":"6ifmk","text":"Hello Shelby","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":5,"length":4,"style":"color-rgb(226,80,65)"}],"entityRanges":[],"data":{}},{"key":"hqfo","text":"Good Girl","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":4,"length":5,"style":"color-rgb(41,105,176)"}],"entityRanges":[],"data":{}}],"entityMap":{}}'

  let initialText = stringToDraftState(databaseSavedText)



  
  // ###################################################
  // ###################################################
  return (
    <div>
      My Draft Draft Main
      <MyCustomEditor
       key={new Date().toISOString()}
       value={initialText}
      // value = ''
       onChange={() => {}}
      />
    </div>
  )
}





export default  MyDraftDraftMain