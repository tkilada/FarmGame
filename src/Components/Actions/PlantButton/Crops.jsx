import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
// Class Imports
import { ryeSeedsClass,barleySeedClass} from "../../../StoreFolder/Classes/ItemClasses"
import { inventoryClass } from '../../../StoreFolder/Classes/inventoryclass'
import { playerClass } from '../../../StoreFolder/Classes/playerClass'
import { RoomClass } from '../../../StoreFolder/Classes/RoomClass'
// Selctor/Action Imports
import { PlayerSelector, UpdatePlayerState } from '../../../StoreFolder/Reducers/storePlayerState'
import { RoomEdit, SelectFieldRoomEdit, updateField } from '../../../StoreFolder/Reducers/storeRoomState'
import {UpdateRoomState,FieldAction} from '../../../StoreFolder/Reducers/storeRoomState'
import { plantActionCost, PlantedCropsTurnPoints, SelectTurnPoints } from '../../../StoreFolder/Reducers/Months'


function Crops() {
    const Player = useSelector(PlayerSelector)
    const FieldData = useSelector(SelectFieldRoomEdit)
    const TurnPoints = useSelector(SelectTurnPoints)
    const Dispatch = useDispatch()
  
    function handleCropPlant(e){
        e.preventDefault()
        const ChosenCrop = e.target.innerText
        let newFieldData = new RoomClass(FieldData.inventory,FieldData.paths,FieldData.description)
        let newPlayer = new playerClass(Player.location,Player.inventory,Player.gold)

        if(ChosenCrop === 'Rye Seeds'){
            if((newPlayer.inventory.ryeSeeds.length > 0)&&(TurnPoints >= plantActionCost) ){
              newFieldData.inventory.ryeSeeds.push(new ryeSeedsClass('seedling')) 
              newPlayer.inventory.ryeSeeds.pop()
              Dispatch(PlantedCropsTurnPoints(TurnPoints))
            }
        }else if(ChosenCrop === 'Barley Seeds'){ 
            if((Player.inventory.barleySeeds.length > 0)&&(TurnPoints >= plantActionCost)){
            newFieldData.inventory.barleySeeds.push(new barleySeedClass('seedling')) 
            newPlayer.inventory.barleySeeds.pop()
            Dispatch(PlantedCropsTurnPoints(TurnPoints))
            }
          }
        Dispatch(UpdateRoomState(FieldAction,newFieldData))
        Dispatch(UpdatePlayerState(newPlayer))
       
    }


    var hadCrops = []
  if(Player.inventory.ryeSeeds.length > 0){
    hadCrops.push("Rye Seeds")
  } 
  if(Player.inventory.barleySeeds.length > 0){
    hadCrops.push("Barley Seeds")
  } 
 

  return (
    <>
    {hadCrops.map((hadCrops,index)=>(
         <Button onClick={handleCropPlant} key = {index}>{hadCrops}</Button>
      ))}
    </>
  )
}

export default Crops