import { css } from 'styled-components'


/* **NOTE: ****

Only 
     tablet_landscape and 
     phone_portrait
medias are used in the front page and resume

*/  

const sizes_landscape = {
  giant: 1170, 
  desktop: 992,
  tablet: 880,
  phone: 600,
}


const sizes_portrait = {
  giant: 1170,
  desktop: 992,
  tablet: 880,
  phone: 480,
}
const media = {}
// iterate through the sizes and create a media template

media.landscape = Object.keys(sizes_landscape).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // covert the browsers font-size to ems: 
  const emSize = sizes_landscape[label] / 16

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) and (orientation: landscape) {
      ${css(...args)};
    }
  `
  
  
  return accumulator
}, {})


media.portrait = Object.keys(sizes_portrait).reduce((accumulator, label) => {

  const emSize = sizes_portrait[label] / 16

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) and (orientation: portrait) {
      ${css(...args)};
    }
  `
  
  // console.log('portriat')
  return accumulator
}, {})



export default media