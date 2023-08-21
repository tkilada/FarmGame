import React from 'react'
import { Button, Container } from 'reactstrap'
import { Link } from "react-router-dom"
import './MoveButtonsStyle.css'


function MoveButtons({RoomData}) {
    const paths = RoomData.paths
  return (
    <Container className='moveButtonsBox'>
    {paths.map((path, index)=>(
    <div key ={index}>
    <Link to = {("/Game/"+path)}><Button className='move'>Move To {path}</Button></Link>
    </div>
    ))}
  </Container>
  )
}

export default MoveButtons