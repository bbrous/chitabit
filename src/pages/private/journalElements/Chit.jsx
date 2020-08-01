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

  padding: '1.5rem .7rem .7rem .7rem',
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
  width: '100%',
 
     
})

const LeftSide= styled('div')({
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 1%',
  width: '45%',
     
})

const CoinWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 1.5rem',
  // width: '50%',
     
})


const RightSide= styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',
  // padding: '0 1%',
  width: '60%',
     
})

const CoinStyle= styled('img')({
    
  height: '3.5rem',


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
  width: '8rem',
  fontWeight: 'bold',


})

const Detail = styled('div')({
  display: 'block' ,
  // width: '50%',
  color: 'black',


})

const Content = styled('div')({
  display: 'block' ,
  width: '95%',
  color: 'black',
  margin: '.5rem 0',
   

})

const ContentTitle = styled('div')({
  display: 'block' ,
  width: '100%',
  color: 'black',
  margin: '.35rem 0',
  color: chitRedDark

})

const ContentDetail = styled('div')({
  display: 'block' ,
  width: '100%',
  color: 'black',
  margin: '.35rem 0',
   

})

const View = styled('div')({
  display: 'flex' ,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '5px',
  right: '2px',
  width: '6rem',
  height: '1.2rem',

  textDecoration: 'underline',
  fontSize: '.7rem',
  color: 'blue',
  cursor: 'pointer',
  
'&:hover':{
  color: chitOrange
}


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
        <View> View Chit Detail</View>
      <LeftSide>
          <CoinWrapper>
            
          <CoinStyle src= {coinDisplayed}   alt= {srcDisplayed} /> 
          
          </CoinWrapper>
          {milestone &&
          <CoinWrapper>
          
            <CoinStyle src= {milestoneDisplayed}   alt="Star" /> 
                

          </CoinWrapper>
      }

    

         
      </LeftSide>



    <RightSide>
        
      <DetailRow>         
        <DetailHeader> 
          Who With:  
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
        <ContentTitle>Here goes a title</ContentTitle>
        <ContentDetail>
        Lorem ipsum dolor sit amet. Kasd eu esse invidunt nulla. Sed voluptua dolor stet sea at vel magna. Ex dolore duo dolore clita vero. Ut eu ut duis diam. Vulputate et consetetur vero. Clita eos 
          
        </ContentDetail>
        
      </Content>
         


      </ChitContent>

    </Wrapper>
  )
}

export default Chit
