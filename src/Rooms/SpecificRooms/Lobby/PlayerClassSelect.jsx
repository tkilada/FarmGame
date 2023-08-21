import React, { useEffect } from 'react'
import { Button,Container } from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import { inventoryClass } from '../../../StoreFolder/Classes/inventoryclass'
import { playerClass } from '../../../StoreFolder/Classes/playerClass'

function PlayerClassSelect() {
    
    const Player = new playerClass("Lobby",new inventoryClass(0,0,0,0),0)
    // useSelector((state) => state.Player.PlayerClass)
    // const ClassSet = useSelector((state)=> state.Player.PlayerClass)
    const dispatch = useDispatch();
    
    function selectClass(Name){
        if(Name === "Farmer"){
          Player.gold = 10
          Player.location = "FarmHouse"
          Player.inventory = new inventoryClass(10,2,2,1)
        }else if(Name === "Noble"){
          Player.gold = 300
          Player.location = "Palace"
          Player.inventory = new inventoryClass(20,0,0,0)
        } 
        dispatch({type:"PlayerChange", payload: Player})
      }

    function ChosePlayerClass(e){
        e.preventDefault()
        console.log("Name")
        // console.log(Player)
        const classChoice = e.target.textContent
        selectClass(classChoice)
      }
  
  return (
  
        < > 
         <Button onClick = {ChosePlayerClass} >Farmer</Button>
        <Button onClick = {ChosePlayerClass} >Noble</Button>
    </>
   
  )
}

export default PlayerClassSelect