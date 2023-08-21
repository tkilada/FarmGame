import React from 'react'
import{Button} from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import { inventoryClass } from '../../../../StoreFolder/Classes/inventoryclass'
import { playerClass } from '../../../../StoreFolder/Classes/playerClass'

function ChangeClassButton() {
    
    let Player = useSelector((state) => state.Player.PlayerClass)
    const Dispatch = useDispatch()

    function HandleChooseFarmerClass (e){
       e.preventDefault()
       Player = new playerClass("FarmHouse", new inventoryClass(5,4,4,0),10)
       Dispatch({type:"PlayerChange", payload: Player})
    //    console.log(Player)
    }
    function HandleChooseNobleClass (e){
        e.preventDefault()
        Player = new playerClass("Palace", new inventoryClass(10,0,0,0),300)
        Dispatch({type:"PlayerChange", payload: Player})
     //    console.log(Player)
     }

 
  return (
    <>
    <Button onClick={HandleChooseFarmerClass}>Choose Farmer Class</Button>
    <Button onClick={HandleChooseNobleClass}>Choose Noble Class</Button>
    </>
  )
}

export default ChangeClassButton