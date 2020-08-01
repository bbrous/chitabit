import React from 'react'
import{ chitOrangeLight, chitOrange, chitRedDark, lightGrey, mediumLightGrey, veryLightGrey } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import {nameDisplay, choosePersonalCoin} from '../../../app/helpers/commonHelpers'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled(Paper)({
  display: 'block',

  marginBottom: '5px',
  padding: '0',
  width: '100%',
  backgroundColor: 'white',
  fontSize: '.8rem',
 

   
})
const ChitHeader= styled('div')({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '1.2rem',
  backgroundColor: 'white',
  color: mediumLightGrey,
  borderBottom: '1px solid #CFD0D1',
  fontSize: '.8rem',

  

   
})

const Spacer= styled('div')({
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  padding: '0 1%',
  width: '26%',
 

})



const CategoryWrapper= styled('div')({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1%',
  width: '41%',
     
})

const DateWrapper= styled('div')({
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 1%',
  width: '26%',

})


const ChitContent= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  // margin: '1.75rem 0',
  padding: '.7rem',
  width: '100%',

 

   
})


  const Delete= styled('div')({
    display: 'block', 
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    height: '1rem',
    width: '1rem',
    color: chitOrange,

  '&:hover' : {
    color: chitOrangeLight,
    cursor: 'pointer',
  
   
  },
  
    
    [theme.breakpoints.down('sm')] : {
      // height: '1.25rem',
      // backgroundColor: 'red'
    },
  
  })

  
const DeleteIcon= styled(DeleteForeverIcon)({
  fontSize: '1.3rem',
   
})

const TopSection= styled('div')({
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  // padding: '0 1%',
  // width: '41%',
     
})

const LeftSide= styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 1%',
  // width: '41%',
     
})

const Middle = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 1%',
  // width: '41%',
     
})

const RightSide= styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 1%',
  // width: '41%',
     
})

const CoinStyle= styled('img')({
    
  height: '3.5rem',


})

const CoinHeader = styled('div')({
  display: 'flex' ,
  width: '45%',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '8px',
  color: chitRedDark,


})

const DetailRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',


})

const DetailHeader = styled('div')({
  display: 'block' ,
  width: '45%',
  fontWeight: 'bold',


})

const Detail = styled('div')({
  display: 'block' ,
  width: '50%',
  color: 'black',


})

const Content = styled('div')({
  display: 'block' ,
  width: '50%',
  color: 'black',

  backgroundColor: 'yellow'

})
// =============================================

const Chit = () => {

  // choose chit coin to be displayed

  const pathToCoinImages = '../../../'


  const chitColor = 'copper'  // %%%%% TEMP _ GET FROM REDUX
  const coinDisplayed = pathToCoinImages +  choosePersonalCoin(chitColor)
 

  const milestone = true // %%%%% TEMP _ GET FROM REDUX
  const milestoneDisplayed = pathToCoinImages +  choosePersonalCoin('milestone')
  const srcDisplayed = {chitColor} + "Coin"


  return (
    <Wrapper> 
       <ChitHeader>
         <Spacer> {''} </Spacer>
        <CategoryWrapper>
          Chit
        </CategoryWrapper>
        <DateWrapper>
          June 10 2020
        </DateWrapper>
      </ChitHeader>

      <ChitContent>
      <Delete
              // onClick = {handleDelete}
            > 
              <DeleteIcon/>
            </Delete>

      <TopSection>
        
      <LeftSide>
      <CoinStyle src= {coinDisplayed}   alt= {srcDisplayed} /> 
              
          <CoinHeader> 
          Personal
          </CoinHeader>
         
      </LeftSide>

      {milestone &&
        <Middle>
        
          <CoinStyle src= {milestoneDisplayed}   alt="Star" /> 
              
              <CoinHeader> 
              Milestone
              </CoinHeader>
            
        </Middle>
      }

    <RightSide>
        
      <DetailRow>         
        <DetailHeader> 
          Who:  
        </DetailHeader>
        <Detail> 
          Boogie 
        </Detail>
      </DetailRow> 
       
      <DetailRow>         
          <DetailHeader> 
            Work Related:  
          </DetailHeader>
          <Detail> 
            Yes
          </Detail>
        </DetailRow> 

        <DetailRow>   
          <DetailHeader> 
            Shared:  
          </DetailHeader>
          <Detail> 
            Yes 
          </Detail>
        </DetailRow> 

    </RightSide>
  
        
      </TopSection>


      <Content>
        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 
      </Content>
         


      </ChitContent>

    </Wrapper>
  )
}

export default Chit
