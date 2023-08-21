import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Container } from 'reactstrap'
import ChangeMonthButton from '../ChangeTurns/ChangeMonthButton'
import TurnPoints from '../ChangeTurns/TurnPoints/TurnPoints'
import PlayerMenu from '../InventoryMenus/PlayerMenu/PlayerMenu'
import './GameStyle.css'
function Game() {
  
  return (
    <div className='GameBox'>
      <Container className='BarContainer'>
      <div className='playerInventory'>
        <PlayerMenu></PlayerMenu>
      </div>
      <div className='MonthBar'>
        <ChangeMonthButton></ChangeMonthButton> 
      </div>
      </Container>
      <div className='RoomPage'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Game