class Shop {
    constructor(inventory, paths, description, gold) {
      this.inventory = inventory;
      this.paths = paths;
      this.description = description;
      this.gold = gold
    }
    Buy(item){
       if (this.gold >= item.value){
        this.gold = this.gold - item.value
        this.inventory[item.name].push(item)
      }else{
        console.log('not enough gold')
    }
    }
    Sell(item, Player){
      if((this.inventory[item.name].length >= 0)&&(Player.gold >= item.value)){
        this.gold += item.value
        this.inventory[item.name].pop()
      }else{
        console.log('item not had')
      }
    }
  }

export const ShopClass = Shop