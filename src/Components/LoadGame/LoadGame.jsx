import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { UpdatePlayerState } from '../../StoreFolder/Reducers/storePlayerState'
import { UpdateRoomState,FarmHouseAction,FieldAction,ParisAction,ShopsAction,TavernAction,PalaceAction } from '../../StoreFolder/Reducers/storeRoomState'
import SpecificLoad from './Specific Loads/SpecificLoad'

function LoadGame({token}) {
    const [Last3Saves, setLast3Saves] = useState([])

    const handleLoadGame = async(e) =>{
        e.preventDefault()
        let url = 'http://127.0.0.1:4000/Save/LoadGame'
        let myHeaders = new Headers()
        myHeaders.append("Authorization",token)
        let Data = []
        const requestOptions = {
            method:"GET",
            headers: myHeaders
        }
        try {
            const response = await fetch(url, requestOptions)
            const data = await response.json()
         
            setLast3Saves(data.save.slice(-3))
        } catch (error) {
            console.log(error.message)
        }
    }
  

    console.log(Last3Saves)
  return (
    <div className='LoadBox'>
        <Button className='SaveBTN' onClick={handleLoadGame}>Load Game</Button>
        {Last3Saves.map((save)=>(
            <SpecificLoad key = {save._id} Save = {save} token = {token} setLast3Saves = {setLast3Saves}></SpecificLoad>
        ))}
    </div>
  )
}

export default LoadGame