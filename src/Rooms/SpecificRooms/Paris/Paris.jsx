import React from 'react'
import ParisStyle from './ParisStyle.css'
import { Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import RoomInventory from '../../../Components/InventoryMenus/RoomInventoryMenu/RoomInventory'

import ActionBox from '../../../Components/Actions/ActionBox/ActionBox'
import PlayerMenu from '../../../Components/InventoryMenus/PlayerMenu/PlayerMenu'

function Paris({token}) {
  const ParisRoom = useSelector((state)=> state.Room.ParisRoom)
  return (
  <Container id='ParisRoomContainer'>
    <ActionBox token={token} RoomData={ParisRoom}></ActionBox>
  </Container>
  )
}

export default Paris