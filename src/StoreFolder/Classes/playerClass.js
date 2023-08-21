import { Salt } from "./ItemClasses";

class PlayerClass {
    constructor(location,inventory, gold) {
      this.location = location;
      this.inventory = inventory;
      this.gold = gold;
    }

    Buy(item){
      if (this.gold >= item.value){
        this.gold = this.gold - item.value
        this.inventory[item.name].push(item)
      }
      }

      Sell(item,market){
        if((this.inventory[item.name].length >= 0)&&(market.gold >= item.value)){
          this.gold += item.value
          this.inventory[item.name].pop()
        }else{
          console.log('item not had')
        }
      }
      
  }

  export const playerClass = PlayerClass

