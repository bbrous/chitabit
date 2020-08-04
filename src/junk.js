// Junk - Chit a Bit


useEffect((props) =>{
  console.log('[MAIN] - displaySpotLight status BEFORE :  ' , spotLightStatus )

  if(spotLightStatus === 'unseen') {
    props.showSpotLight()

    console.log('[MAIN] - displaySpotLight status on IF :  ' , spotLightStatus )

    setTimeout(() => props.closeSpotLight() , 2000)
  }
  console.log('[MAIN] - displaySpotLight status AFTER IF :  ' , spotLightStatus )


  
})



    

if(spotLightStatus === 'unseen') {
  props.showSpotLight()

  console.log('[MAIN] - displaySpotLight status on IF :  ' , spotLightStatus )

  setTimeout(() => props.closeSpotLight() , 2000)
}
console.log('[MAIN] - displaySpotLight status AFTER IF :  ' , spotLightStatus )

}