import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container,Button } from 'reactstrap'
import TurnPoints from '../../ChangeTurns/TurnPoints/TurnPoints'
import LoadGame from '../../LoadGame/LoadGame'
import SaveGame from '../../SaveGame/SaveGame'
import ActionBoxStyle from './ActionBoxStyle.css'
import MoveButtons from './Actions/MoveButton/MoveButtons'
import TakeButton from './Actions/TakeButton/TakeButton'

function ActionBox({RoomData,token}) {
  
  return (
    <Container className='ActionBox'>
      {/* <TurnPoints></TurnPoints> */}
    
        <div className = 'MoveButtonsFlexBox'>
          <MoveButtons RoomData={RoomData}></MoveButtons>
        </div>
        <div className='SaveLoadBox'>
          <SaveGame token={token}></SaveGame>
          <LoadGame token = {token}></LoadGame>
      </div>
    </Container>
  )
}

export default ActionBox