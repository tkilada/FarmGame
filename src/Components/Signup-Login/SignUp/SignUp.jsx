import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function SignUp({updateToken}) {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        let url = 'http://127.0.0.1:4000/User/signup'
        let bodyObejct = JSON.stringify({firstName,lastName,email,password})

        let myHeaders = new Headers()
        myHeaders.append("Content-Type","application/json")
        const requestOptions = {
            headers:myHeaders,
            body: bodyObejct,
            method:"POST"
        }
        try {
            const response = await fetch(url,requestOptions)
            const data = await response.json()
            if(data.message === "Success"){
                updateToken(data.token)   
            }
            else{
                alert(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="SignUp Form">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit} className='Group'>
        <FormGroup className='FormGroup'>
          <Label>First Name: </Label>
          <Input 
            innerRef={firstNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name: </Label>
          <Input 
            innerRef={lastNameRef}
          />
        </FormGroup>
        <FormGroup className='FormGroup'>
          <Label>Email: </Label>
          <Input 
            innerRef={emailRef}
          />
        </FormGroup>
        <FormGroup className='FormGroup'>
          <Label>Password: </Label>
          <Input 
            innerRef={passwordRef}
            type="password"
          />
        </FormGroup>
          <Button className='BTN' type='submit' color='primary'><h3>Sign Up</h3> </Button>
      </Form>
    </div>
  )

}

export default SignUp