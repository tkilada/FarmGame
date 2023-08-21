import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import { showPlantAction, ShowPlantSelctor, UpdateShowPlants } from '../../../StoreFolder/Reducers/ShowPlantCrops'
import Crops from './Crops'

function Plant() {
    var showCrops = useSelector(ShowPlantSelctor)
    const Dispatch = useDispatch()

    function handlePlantClick(e){
        e.preventDefault()
        showCrops =!showCrops
       UpdateShowPlants(showCrops)(Dispatch)
        
    }
  return (
    <Container className='FieldBTN'>
    <Button onClick={handlePlantClick}>Plant Crops</Button>
    {showCrops? <Crops/>:null}
    </Container>
    
  )
}

export default Plant