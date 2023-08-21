import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import { inventoryClass } from '../../../../../../StoreFolder/Classes/inventoryclass'
import { playerClass } from '../../../../../../StoreFolder/Classes/playerClass'
import { PlayerSelector } from '../../../../../../StoreFolder/Reducers/storePlayerState'
import { UpdateRoomState } from '../../../../../../StoreFolder/Reducers/storeRoomState'
import { RoomClass } from '../../../../../../StoreFolder/Classes/RoomClass'

import { ryeSeedsClass,barleySeedClass,Grain,Salt} from "../../../../../../StoreFolder/Classes/ItemClasses";
import { HadItems } from '../../../../../../StoreFolder/Classes/Function Exports/HadItems'


function TakeableItems({RoomData}) {
    const Player = useSelector(PlayerSelector)
    const Room = RoomData
    const Dispatch = useDispatch()
   
    
   
    function TakeItemHandle(e){
    e.preventDefault()
    const selectedItem = e.target.innerText
    let newPlayer = new playerClass(Player.location,Player.inventory,Player.gold)
    let newRoom = new RoomClass(RoomData.inventory,RoomData.paths,RoomData.description)

    if(selectedItem === 'Salt'){
      if(Room.inventory.salt.length > 0 ){
        newPlayer.inventory.salt.push(new Salt) 
        newRoom.inventory.salt.pop()
      }
    }else if(selectedItem === 'Rye Seeds'){ 
        if(Room.inventory.ryeSeeds.length > 0 ){
          newPlayer.inventory.ryeSeeds.push(new ryeSeedsClass('seedling')) 
          newRoom.inventory.ryeSeeds.pop()
      }
    }else if(selectedItem === 'Barley Seeds'){ 
      if(Room.inventory.barleySeeds.length > 0 ){
        newPlayer.inventory.barleySeeds.push(new barleySeedClass('seedling')) 
        newRoom.inventory.barleySeeds.pop()
    }}else if(selectedItem === 'Grain'){ 
      if(Room.inventory.grain.length > 0 ){
        newPlayer.inventory.grain.push(new Grain)
        newRoom.inventory.grain.pop()
    }else{}
  }
      
    Dispatch(UpdateRoomState(newRoom.description,newRoom))
    Dispatch({type:'PlayerChange', payload: newPlayer})
   }
  // --------------------------------------------------------------
 
 
  var hadItems = []
  if(RoomData.inventory.salt.length > 0){
    hadItems.push("Salt")
  } 
  if(RoomData.inventory.ryeSeeds.length > 0){
    if(RoomData.description !=="Field"){
      hadItems.push("Rye Seeds")
    }
  } 
  if(RoomData.inventory.barleySeeds.length > 0){
    if(RoomData.description !=="Field"){
      hadItems.push("Barley Seeds")
    }
   
  } 
  if(RoomData.inventory.grain.length > 0){
    hadItems.push("Grain")
  }
  
  
 
  

  return (
    <>
        {hadItems.map((hadItem,index)=>( 
         <Button key = {index} onClick={TakeItemHandle}>{hadItem}</Button>
      ))}  
     
    </>
    
  )
}

export default TakeableItems