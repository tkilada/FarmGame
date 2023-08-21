import React, { useEffect } from 'react'
import FarmHouseStyle from '../FarmHouse/FarmHouseStyle.css'

import { Container, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import RoomInventory from '../../../Components/InventoryMenus/RoomInventoryMenu/RoomInventory'
import PlayerMenu from '../../../Components/InventoryMenus/PlayerMenu/PlayerMenu'
import ActionBox from '../../../Components/Actions/ActionBox/ActionBox'
import ChangeMonthButton from '../../../Components/ChangeTurns/ChangeMonthButton'
import TopBar from "../../../Components/Game/Game"
// Selector Imports
import { SelectFarmRoom } from '../../../StoreFolder/Reducers/storeRoomState'
import TaxCollect from '../../../Components/Events/TaxCollectors/TaxCollect'
import { TaxCollectSelector } from '../../../StoreFolder/Reducers/ShowEvents'
import { PlayerSelector } from '../../../StoreFolder/Reducers/storePlayerState'
import { SelectMonth } from '../../../StoreFolder/Reducers/Months'
import TakeButton from '../../../Components/Actions/ActionBox/Actions/TakeButton/TakeButton'



function FarmHouse({token}) {
  const Player = useSelector(PlayerSelector)
  const FarmHouseRoom = useSelector(SelectFarmRoom)
  const ThisMonth = useSelector(SelectMonth)
  const RoomData = FarmHouseRoom
  console.log(FarmHouseRoom)
  return (
    <Container className='FarmRoomContainer'>
    
        <RoomInventory RoomInventoryData = {FarmHouseRoom}></RoomInventory>
     
      <div className='ActionTake'>
      <TakeButton RoomData={RoomData} ></TakeButton>
      <ActionBox token = {token} RoomData={FarmHouseRoom}></ActionBox>
      </div>
    </Container>
  )
}

export default FarmHouse