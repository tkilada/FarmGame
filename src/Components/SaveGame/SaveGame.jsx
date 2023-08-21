import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { SelectMonth, SelectTurnPoints } from '../../StoreFolder/Reducers/Months'
import { PlayerSelector } from '../../StoreFolder/Reducers/storePlayerState'
import { SelectFarmRoom, SelectFieldRoomEdit, SelectPalace, SelectParis, SelectShopsEdit, SelectTavern } from '../../StoreFolder/Reducers/storeRoomState'

function SaveGame({token}) {
 
    const Player = useSelector(PlayerSelector)
    const FarmHouse = useSelector(SelectFarmRoom)
    const Field = useSelector(SelectFieldRoomEdit)
    const Paris = useSelector(SelectParis)
    const Shops = useSelector(SelectShopsEdit)
    const Tavern = useSelector(SelectTavern)
    const Palace = useSelector(SelectPalace)
    const Month = useSelector(SelectMonth)
    const TurnPoints = useSelector(SelectTurnPoints)
    
    const SaveNameRef = useRef()

    const handleSaveGame = async(e)=> {
        e.preventDefault()
        // console.log(Field,"Field before SaveGame")
        const name = SaveNameRef.current.value
        

        let url = 'http://localhost:4000/Save/SaveGame'
        let bodyObject = JSON.stringify({name,TurnPoints,Month,Player,FarmHouse,Field,Paris,Shops,Tavern,Palace})
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization",token)

        const requestOptions = {
            headers:myHeaders,
            body:bodyObject,
            method: "POST"
        }
        try {
            const response = await fetch(url,requestOptions)
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (

        <Form className='SaveForm' onSubmit={handleSaveGame}>
            <FormGroup>
                <Label>Save Game:</Label>
                <Input className='SaveInput' innerRef={SaveNameRef}/>
            </FormGroup>
            <Button className='SaveBTN' type = 'submit' color = 'primary'>Save Game</Button>
        </Form>
 
  )
}

export default SaveGame