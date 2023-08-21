import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { UpdatePlayerName } from '../../../StoreFolder/Reducers/storePlayerState';

function Login({updateToken}) {
   
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate()
    
    const Dispatch = useDispatch() 
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        let url = 'http://127.0.0.1:4000/User/login'
        let bodyObject = JSON.stringify({email,password})
        let myHeaders = new Headers()
        myHeaders.append("Content-Type","application/json")

        const requestOptions = {
            headers: myHeaders,
            body:bodyObject,
            method:"POST"
        }
        try {
            const response = await fetch(url, requestOptions)
            const data = await response.json()
            if(data.message === "Success"){
                updateToken(data.token)   
                navigate('/Game/FarmHouse')
                const name = data.user.firstName + " " + data.user.lastName 
                Dispatch(UpdatePlayerName(name))
            }
            else{
                alert(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }

    }
  return (
    <div className="Form">
      <h2>Login</h2>
    <Form onSubmit={handleSubmit} className='Login Group'>
    <FormGroup className='FormGroup'>
        <Label>Email: </Label>
        <Input 
          innerRef={emailRef}
        />
      </FormGroup>
      <FormGroup className='FormGroup'>
        <Label>Password: </Label>
        <Input 
          type="password"
          innerRef={passwordRef}
        />
      </FormGroup>
        <Button className='BTN' type='submit' color='primary'><h3>Login</h3> </Button>
    </Form>
  </div>
  )
}

export default Login