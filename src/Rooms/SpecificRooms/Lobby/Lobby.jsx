import React, { useEffect } from 'react'
import '../Lobby/LobbyStyle.css'
import { Button,Container,Form } from 'reactstrap'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { PlayerSelector } from '../../../StoreFolder/Reducers/storePlayerState'
import SignUp from '../../../Components/Signup-Login/SignUp/SignUp'
import Login from '../../../Components/Signup-Login/Login/Login'


function Lobby({updateToken}) {
   const Player = useSelector(PlayerSelector)
  return (
    <Container className='Lobby'>
      <h1 className='text'>Login Or Sign Up</h1>
      <div className='LoginSignUp'>
      <Login  updateToken={updateToken}></Login>
      <SignUp  updateToken={updateToken}></SignUp>
      </div>
    </Container>
  )
}

export default Lobby