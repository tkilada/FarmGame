import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { inventoryClass } from '../../../StoreFolder/Classes/inventoryclass'
import { RoomClass } from '../../../StoreFolder/Classes/RoomClass'
import { Salt, ryeSeedsClass,barleySeedClass,Grain } from '../../../StoreFolder/Classes/ItemClasses'
import { MonthAction, SelectMonth, setTurnPoints, UpdateMonth } from '../../../StoreFolder/Reducers/Months'
import { PlayerAction, UpdatePlayerState } from '../../../StoreFolder/Reducers/storePlayerState'
import { UpdateRoomState,FarmHouseAction,FieldAction,ParisAction,ShopsAction,TavernAction,PalaceAction } from '../../../StoreFolder/Reducers/storeRoomState'
import { playerClass } from '../../../StoreFolder/Classes/playerClass'
import { ShopClass } from '../../../StoreFolder/Classes/RoomSpecificClasses/ShopsClassFile'

function SpecificLoad({Save,token,setLast3Saves}) {

    const dispatch = useDispatch()
    
    const fillInventoryClasses = (RoomAssign,saveData) =>{
        console.log(saveData,"fill saveData")
        let newRoom = null
        if (RoomAssign ==="PlayerChange"){
            newRoom = new playerClass(saveData.location,new inventoryClass(0,0,0,0),saveData.gold)
        }else if(RoomAssign ==="Market"){
            newRoom = new ShopClass(new inventoryClass(0,0,0,0),saveData.paths,saveData.description,saveData.gold)
        }
        else{
            newRoom = new RoomClass(new inventoryClass(0,0,0,0),saveData.paths,saveData.description)
        }
        saveData.inventory.salt.forEach(() => {
            newRoom.inventory.salt.push(new Salt())
        });
        saveData.inventory.ryeSeeds.forEach((ryeSeeds)=>{
            newRoom.inventory.ryeSeeds.push(new ryeSeedsClass(ryeSeeds.harvestStatus))
        })
        saveData.inventory.barleySeeds.forEach((barleySeed)=>{
            newRoom.inventory.barleySeeds.push(new barleySeedClass(barleySeed.harvestStatus))
        })
        saveData.inventory.grain.forEach(()=>{
            newRoom.inventory.grain.push(new Grain())
        })
        
        // console.log(newRoom,"FillInventoryClassess")
        dispatch({type:RoomAssign,payload:newRoom})
    }


    const fillSave = (payload) =>{
        const  saveData = payload.save[0]
        console.log(payload)
        fillInventoryClasses(PlayerAction,saveData.Player)
        fillInventoryClasses(FarmHouseAction,saveData.FarmHouse)
        fillInventoryClasses(FieldAction, saveData.Field)
        fillInventoryClasses(ParisAction, saveData.Paris)
        fillInventoryClasses(ShopsAction, saveData.Shops)
        fillInventoryClasses(TavernAction, saveData.Tavern)
        fillInventoryClasses(PalaceAction, saveData.Palace)
        dispatch(UpdateMonth(saveData.Month))
        dispatch(setTurnPoints(saveData.TurnPoints))
    }


    const handleLoadThisSave = async (e)=>{
        let id = Save._id
        const url = `http://127.0.0.1:4000/Save/LoadThisGame/${id}`
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "Application/json")
        myHeaders.append('Authorization', token)
        const requestOptions = {
            headers: myHeaders,
            method:"GET"
        }

        try {
            const response = await fetch(url, requestOptions)
            const data = await response.json()
            fillSave(data)
            
        } catch (error) {
            console.log(error.message)
        }
        setLast3Saves([])
    }
  
  return (
    <Button className='LoadBTN' onClick={handleLoadThisSave}>{Save.name}</Button>
    )
}

export default SpecificLoad