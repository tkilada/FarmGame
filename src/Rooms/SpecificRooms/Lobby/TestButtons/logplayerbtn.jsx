import React from 'react'
import{Button} from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
function Logplayerbtn() {
    const Player = useSelector((state) => state.Player.PlayerClass)
    function handleClick(e){
        e.preventDefault()
        console.log(Player)
    }
  return (
    <Button onClick={handleClick}>Check Player</Button>
  )
}

export default Logplayerbtn