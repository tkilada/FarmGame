import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'

import { ryeSeedsClass,barleySeedClass,Grain,Salt} from "../../../StoreFolder/Classes/ItemClasses";
import { inventoryClass } from '../../../StoreFolder/Classes/inventoryclass'
import { playerClass } from '../../../StoreFolder/Classes/playerClass'
import { RoomClass } from '../../../StoreFolder/Classes/RoomClass'
import { PlayerSelector, UpdatePlayerState } from '../../../StoreFolder/Reducers/storePlayerState'
import { updateField } from '../../../StoreFolder/Reducers/storeRoomState'
import { harvestActionCost, HarvestCropsTurnPoints, SelectTurnPoints } from '../../../StoreFolder/Reducers/Months';

function CropsHarvest() {
    const FieldData = useSelector((state)=>state.Room.FieldRoom)
    const Player = useSelector(PlayerSelector)
    const TurnPoints = useSelector(SelectTurnPoints)
    const Dispatch = useDispatch()
    var hadCrops = []
    if(FieldData.inventory.ryeSeeds.length > 0){
        hadCrops.push("Rye Seeds")
    } 
    if(FieldData.inventory.barleySeeds.length > 0){
        hadCrops.push("Barley Seeds")    
  }

  function handleHarvestedCrops(e){
    e.preventDefault()
    const ChosenCrop = e.target.innerText
    let newFieldData = new RoomClass(FieldData.inventory,FieldData.paths,FieldData.description)
    let newPlayer = new playerClass(Player.location,Player.inventory,Player.gold)

    if(ChosenCrop === 'Rye Seeds'){
          if(TurnPoints >= harvestActionCost){
            const harvestedRye = FieldData.inventory.ryeSeeds.filter((ryeSeed)=> {
              if(ryeSeed.harvestStatus === "collect"){
                return ryeSeed
            }})
            const growingRye = FieldData.inventory.ryeSeeds.filter((ryeSeed)=> {
              if(ryeSeed.harvestStatus !== "collect"){
                return ryeSeed
            }})
            console.log(growingRye,harvestedRye)

            harvestedRye.forEach(() => {
              newPlayer.inventory.grain.push(new Grain)
              Dispatch(HarvestCropsTurnPoints(TurnPoints))
          })
          FieldData.inventory.ryeSeeds = growingRye
          }
        
    }else if(ChosenCrop === 'Barley Seeds'){ 
        if((FieldData.inventory.barleySeeds.length > 0)&&(TurnPoints > harvestActionCost)){
          FieldData.inventory.barleySeeds.map((Barley) => {
            if(Barley.harvestStatus === 'collect'){
              console.log('Harvested')
              newPlayer.inventory.grain.push(new Grain) 
              newFieldData.inventory.barleySeeds.pop()
              Dispatch(HarvestCropsTurnPoints(TurnPoints))
            }else{}
          });
         
        }
        
        }
      
      Dispatch(updateField(newFieldData))
      Dispatch(UpdatePlayerState(newPlayer))
  }

  return (
    <>  {hadCrops.map((hadCrops,index)=>(
        <Button onClick = {handleHarvestedCrops} key = {index}>{hadCrops}</Button>
     ))}</>
  )
}

export default CropsHarvest