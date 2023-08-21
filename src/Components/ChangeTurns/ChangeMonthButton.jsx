import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
// Class Imports

// Store Imports 
import {SelectMonth, TurnPointsAction,YearSelector } from '../../StoreFolder/Reducers/Months'
import TaxCollect from '../Events/TaxCollectors/TaxCollect'
import { ChargeTax, TaxCollectSelector, TaxStatusSelector, TriggerTaxCollection } from '../../StoreFolder/Reducers/ShowEvents'

function ChangeMonthButton() {
  
  const ShowTaxCollectors = useSelector(TaxCollectSelector)
     const currentMonth = useSelector(SelectMonth)
     const TaxStatus = useSelector(TaxStatusSelector)
     const currentYear =useSelector(YearSelector)
     const dispatch = useDispatch() 
    // console.log(Fieldinventory)
    function changeMonthHandler(e){
      e.preventDefault()
      dispatch(ChargeTax(TaxStatus)) 
      // Set Action Points to 0
        dispatch({type:TurnPointsAction,payload:0})
      // Trigger Tax Collection event
        dispatch(TriggerTaxCollection(ShowTaxCollectors))
      
    }   

console.log(ShowTaxCollectors)
  return (
    <Container className='DateBox'>
      <div className='Date'>Month: {currentMonth} Year:{currentYear}</div>
      <Button onClick={changeMonthHandler}>End Month</Button>
    {ShowTaxCollectors?<TaxCollect/>:null }
    </Container>
    
  )
}

export default ChangeMonthButton