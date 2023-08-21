import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
// Room File Imports 

import Lobby from './SpecificRooms/Lobby/Lobby';
import FarmHouse from './SpecificRooms/FarmHouse/FarmHouse'
import Field from './SpecificRooms/Field/Field'
import Paris from './SpecificRooms/Paris/Paris'
import Shops from './SpecificRooms/Shops/Shops'
import Tavern from './SpecificRooms/Tavern/Tavern'
import Palace from './SpecificRooms/Palace/Palace'
import TopBar from '../Components/Game/Game';


function RoomRoutes() {
  const [sessionToken, setSessionToken] = useState("")

  const updateToken = (newToken) =>{
    localStorage.setItem("token",newToken)
    setSessionToken(newToken)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  },[])
  
  return (
    <div>
    <Routes>
    <Route path='/' element = {<Lobby updateToken = {updateToken} />}></Route>
    <Route path='/LoggedIn' element = {<TopBar></TopBar>}>
    <Route path='FarmHouse' element = {<FarmHouse token = {sessionToken} updateToken = {updateToken}/>}></Route>
    <Route path='Field' element = {<Field token = {sessionToken} updateToken = {updateToken} />}></Route>
    <Route path='Paris' element = {<Paris token = {sessionToken} updateToken = {updateToken}/>}></Route>
    <Route path='Shops' element = {<Shops/>}></Route>
    <Route path='Tavern' element = {<Tavern token = {sessionToken} updateToken = {updateToken}/>}></Route>
    <Route path='Palace' element = {<Palace token = {sessionToken} updateToken = {updateToken}/>}></Route>
    </Route>
    </Routes>
    </div>

  )
}

export default RoomRoutes