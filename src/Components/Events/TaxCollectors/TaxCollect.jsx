import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import { playerClass } from '../../../StoreFolder/Classes/playerClass'
import { RoomClass } from '../../../StoreFolder/Classes/RoomClass'
import { Months, ResetTurnPoints, SelectMonth, UpdateMonth, UpdateYear, YearSelector } from '../../../StoreFolder/Reducers/Months'
import { TriggerTaxCollection } from '../../../StoreFolder/Reducers/ShowEvents'
import { PlayerSelector, UpdatePlayerState } from '../../../StoreFolder/Reducers/storePlayerState'
import { SelectFieldRoomEdit, updateField } from '../../../StoreFolder/Reducers/storeRoomState'

function TaxCollect() {
    
  // const ShowTaxCollectors = useSelector(TaxCollectSelector)
  const Player = useSelector(PlayerSelector)
  const Fieldinventory = useSelector(SelectFieldRoomEdit)
  const currentMonth = useSelector(SelectMonth)
  const currentYear = useSelector(YearSelector)
  const dispatch = useDispatch()
  
  let newPlayer = new playerClass(Player.location, Player.inventory,Player.gold)
    
   
    function handlePayCollectors(e){
      e.preventDefault()
      // UpdateCrops
        let NewFieldinventory = new RoomClass(Fieldinventory.inventory,Fieldinventory.paths,Fieldinventory.description)
        // Apply Crop Growth 
        NewFieldinventory.inventory.ryeSeeds.map((ryeSeed)=>{
          console.log(ryeSeed)
          ryeSeed.grow()
        })
        NewFieldinventory.inventory.barleySeeds.map((ryeSeed)=>{
          console.log(ryeSeed)
          ryeSeed.grow()
        })
        // Change Month State 
        const NewMonth = Months[currentMonth][0]
        dispatch(UpdateMonth(NewMonth))
        // Check Year 
        if(NewMonth==="January"){
          const NewYear = currentYear + 1
          dispatch(UpdateYear(NewYear))
        }
        
        // To Redux
        dispatch(updateField(NewFieldinventory))
        // Tax Take
        dispatch(TriggerTaxCollection(dispatch))
        newPlayer.gold -= 10
        dispatch(UpdatePlayerState(newPlayer))
         // Restart TurnPoints
         dispatch(ResetTurnPoints())
    }


  return (
    <Container>
        Pay The Tax Collectors?
        <Button onClick={handlePayCollectors}>Pay Tax</Button>
    </Container>
  )
}

export default TaxCollect