import React from 'react'
import PalaceStyle from './PalaceStyle.css'

import { Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import RoomInventory from '../../../Components/InventoryMenus/RoomInventoryMenu/RoomInventory'
import ActionBox from '../../../Components/Actions/ActionBox/ActionBox'
function Palace({token}) {
  
  const PalaceRoom = useSelector((state)=> state.Room.PalaceRoom)

  return (
    <Container className='PalaceRoomContainer'>
      <RoomInventory RoomInventoryData = {PalaceRoom}></RoomInventory>
      <ActionBox token = {token} RoomData={PalaceRoom}></ActionBox>
    </Container>
  )
}

export default Palace