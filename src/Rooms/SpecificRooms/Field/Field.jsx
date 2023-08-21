import React from 'react'
import FieldStyle from './FieldStyle.css'
import { Container } from 'reactstrap'

import { useSelector } from 'react-redux'


import ActionBox from '../../../Components/Actions/ActionBox/ActionBox'
import Plant from '../../../Components/Actions/PlantButton/Plant'
import Harvest from '../../../Components/Actions/Harvest/Harvest'
import { SelectFieldRoomEdit } from '../../../StoreFolder/Reducers/storeRoomState'
import FieldInventory from '../../../Components/InventoryMenus/FieldsInventory/FieldInventory'


function Field({token}) {
    const FieldRoom = useSelector(SelectFieldRoomEdit)
    console.log(FieldRoom)
    
 
  return (
    <Container className='FieldActionBoxContainer'>
      <div className='ActionTake'>
        <FieldInventory></FieldInventory>
        <div className='FieldButtons'>
          <div className='FieldBTN'>
            <Plant></Plant>
          </div>
          <div className='FieldBTN'>
            <Harvest></Harvest>
          </div>
        </div>
        <ActionBox token = {token} id = 'FieldActionBox actionbox' RoomData={FieldRoom}></ActionBox>
      </div>
    </Container>  
  )
}

export default Field