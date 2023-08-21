import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Label } from 'reactstrap'
import { barleySeedClass, Grain, ryeSeedsClass, Salt } from '../../../../StoreFolder/Classes/ItemClasses'
import { playerClass } from '../../../../StoreFolder/Classes/playerClass'
import { ShopClass } from '../../../../StoreFolder/Classes/RoomSpecificClasses/ShopsClassFile'
import { PlayerSelector, UpdatePlayerState } from '../../../../StoreFolder/Reducers/storePlayerState'
import { SelectShopsEdit, UpdateRoomState } from '../../../../StoreFolder/Reducers/storeRoomState'
import { HadItems } from '../../../../StoreFolder/Classes/Function Exports/HadItems'

function Buy() {
    const [ItemState, SetItemState] = useState()
    const ShopsState = useSelector(SelectShopsEdit)
    const Player = useSelector(PlayerSelector)
    const ShopInventory = ShopsState.inventory
    const Dispatch = useDispatch()
    // console.log(ShopInventory,"Shop Inventory")

    let hadItems = []
    hadItems = HadItems(ShopInventory)
 const BuyItem = (itemString) => {
      switch(itemString){
        case "Salt":
          Player.Buy(new Salt)
          ShopsState.Sell(new Salt,Player)
          break
        case "Rye Seeds":
          Player.Buy(new ryeSeedsClass("seedling"))
          ShopsState.Sell(new ryeSeedsClass("seedling"),Player)
          break
        case "Barley Seeds":
          if(Player.gold >= (new barleySeedClass("seedling")).value){
          Player.Buy(new barleySeedClass("seedling"))
          ShopsState.Sell(new barleySeedClass("seedling"),Player)
          }
          break
        case "Grain":
          Player.Buy(new Grain)
          ShopsState.Sell(new Grain,Player)
          break
        default:
     
      }
    
  }
  function SelectBuyItemHandle(e){
    e.preventDefault()
    const chosenItem = e.target.innerText
    BuyItem(chosenItem)
    let newShops = new ShopClass(ShopsState.inventory,ShopsState.paths,ShopsState.description,ShopsState.gold)
    let newPlayer = new playerClass(Player.location,Player.inventory,Player.gold)
    Dispatch(UpdatePlayerState(newPlayer))
    Dispatch(UpdateRoomState("Market",newShops))
  }

  return (
    <Container className='ShopBuySellContainer'>
        <Label>Buy</Label>
        <Container className= "ShopItemList">
            {hadItems.map((Item,index)=>(
            <div key={index}>
                <Button onClick={SelectBuyItemHandle} >{Item.name}</Button>
                <div>
                  Cost:{Item.itemClass.value}
                </div>
                
            </div>
            ))}
        </Container>
    </Container>
  )
}

export default Buy