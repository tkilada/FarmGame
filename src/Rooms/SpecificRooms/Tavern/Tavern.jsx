import React from 'react'
import TavernStyle from './TavernStyle.css'
import { Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import RoomInventory from '../../../Components/InventoryMenus/RoomInventoryMenu/RoomInventory'
import ActionBox from '../../../Components/Actions/ActionBox/ActionBox'
// import MoveButtons from '../../../TestButtons/ActionButtons/MoveButtons/MoveButtons'
function Tavern({token}) {
  const TavernRoom = useSelector((state)=> state.Room.TavernRoom)
  return (
    <Container className='TavernRoomContainer'>
    <RoomInventory RoomInventoryData={TavernRoom}></RoomInventory>
    <ActionBox token ={token} RoomData={TavernRoom}></ActionBox>
  </Container>
  )
}

export default Tavern