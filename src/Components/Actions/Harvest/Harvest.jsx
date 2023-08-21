import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import CropsHarvest from './CropsHarvest'

function Harvest() {
    var ShowHarvest = useSelector((state)=>state.ShowCrops.ShowHarvest) 
    const FieldData = useSelector((state)=>state.Room.FieldRoom)
    const Dispatch = useDispatch()
    function handleHarvest(e){
        e.preventDefault()
        ShowHarvest=!ShowHarvest
        Dispatch({type:"ShowHarvest",payload:ShowHarvest})
      }
      
      

  return (
    <div className='FieldBTN'>
    <Button onClick={handleHarvest}>Harvest</Button>
    {ShowHarvest ?
       <CropsHarvest></CropsHarvest>
      :null}
    </div>
    
  )
}

export default Harvest