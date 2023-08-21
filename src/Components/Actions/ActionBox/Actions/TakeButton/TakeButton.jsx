import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import TakeableItems from './TakeableItems/TakeableItems'
import TakeStyle from './TakeStyle.css'
import { PlayerSelector } from '../../../../../StoreFolder/Reducers/storePlayerState'

function TakeButton({RoomData}) {
  const Player = useSelector(PlayerSelector)
  var ShowTake = useSelector((state)=>state.ShowTake.ShowTake)
  const Dispatch =  useDispatch()
  

  function handleTakeItem(e){
    e.preventDefault()
    ShowTake=!ShowTake
    Dispatch({type:"ShowTake",payload:ShowTake})
  }


  //  function TakeItemHandle(e){
  //   e.preventDefault()
  //   Player.gold += 1
  //   Player.location = Player.location
  //   // Player.inventory = new inventoryClass(1,1,1,1)
  //   // Dispatch({type:RoomClass.description, payload: RoomClass})
  //   Dispatch({type:'ClassChoose', payload: Player})
  // }
   
   
  return (
    <Container className='TakeBox'>
      <Button onClick={handleTakeItem}>Take</Button>
      {/* <TakeableItems ></TakeableItems> */}
      {ShowTake ? <TakeableItems RoomData={RoomData}></TakeableItems> : null}
    </Container>
  )
}

export default TakeButton