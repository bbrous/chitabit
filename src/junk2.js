{dateDifference < 0 && 
  <DetailRow>
    <DetailRowLeft>Missed by: </DetailRowLeft>

    <DetailRowRight
      className = 'redHighlight'
    
    > 
    {weeks} w: {days} d: {hours} h: {minutes} m
    
    </DetailRowRight>
    
    
  </DetailRow>
}
{dateDifference >= 0 &&
  <DetailRow>
    <DetailRowLeft>Goal achieved: </DetailRowLeft>

    <DetailRowRight
      className='redHighlight'

    >
      {weeks} w: {days} d: {hours} h: {minutes} m

</DetailRowRight>


  </DetailRow>
}