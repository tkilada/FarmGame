import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import { barleySeedClass, Grain, ryeSeedsClass, Salt } from '../../../../StoreFolder/Classes/ItemClasses'
import { playerClass } from '../../../../StoreFolder/Classes/playerClass'
import { ShopClass } from '../../../../StoreFolder/Classes/RoomSpecificClasses/ShopsClassFile'
import { PlayerSelector, UpdatePlayerState } from '../../../../StoreFolder/Reducers/storePlayerState'
import { SelectShopsEdit, ShopsAction, UpdateRoomState } from '../../../../StoreFolder/Reducers/storeRoomState'

function Sell() {
    const ShopsState = useSelector(SelectShopsEdit)
    const Player = useSelector(PlayerSelector)
    const ShopInventory = ShopsState.inventory
    const Dispatch = useDispatch()
    console.log(ShopInventory,"Shop Inventory")
    var hadItemsSell = []

  if(Player.inventory.salt.length > 0){
    hadItemsSell.push({name:"Salt", itemClass: new Salt})
  } 
  if(Player.inventory.ryeSeeds.length > 0){
    hadItemsSell.push({name:"Rye Seeds", itemClass: new ryeSeedsClass("seedling")})
  } 
  if(Player.inventory.barleySeeds.length > 0){
    hadItemsSell.push({name:"Barley Seeds", itemClass: new barleySeedClass("seedling")})
  } 
  if(Player.inventory.grain.length > 0){
    hadItemsSell.push({name:"Grain", itemClass: new Grain})
  }
  

  const SellItem = (ItemString) => {
    switch (ItemString){
      case "Salt" :
        Player.Sell(new Salt,ShopsState)
        break
      case "Rye Seeds" :
        Player.Sell(new ryeSeedsClass("seedling"),ShopsState)
        break
      case "Barley Seeds":
        Player.Sell(new barleySeedClass("seedling"),ShopsState)
        break
      case "Grain":
        Player.Sell(new Grain,ShopsState)
        break
      default:

    }
  }


  function SelectSellItemHandle(e){
    e.preventDefault()

    
    const chosenItem = e.target.innerText

    SellItem(chosenItem)

    let newShops = new ShopClass(ShopsState.inventory,ShopsState.paths,ShopsState.description,ShopsState.gold)
    let newPlayer = new playerClass(Player.location,Player.inventory,Player.gold)

    Dispatch(UpdatePlayerState(newPlayer))
    Dispatch(UpdateRoomState(ShopsAction,newShops))
    
  }
  
  return (
    <Container className='ShopBuySellContainer'>
        Sell
        <Container className="ShopItemList">
            {hadItemsSell.map((Item,index)=>(
            <div key={index}>
                <Button onClick={SelectSellItemHandle} >{Item.name}</Button>
                <div>
                  Cost:{Item.itemClass.value}
                </div>
            </div>
            ))}
        </Container>
    </Container>
  )
}

export default Sell