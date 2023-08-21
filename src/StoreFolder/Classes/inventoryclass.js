import { ryeSeedsClass,barleySeedClass,Grain,Salt} from "./ItemClasses";


  // !Inventory Class --------------------------------------------------
  class InventoryClass {
    constructor(saltAmount, ryeSeedsAmount, barleySeedsAmount, grainAmount) {
      this.saltAmount = saltAmount;
      this.ryeSeedsAmount = ryeSeedsAmount;
      this.barleySeedsAmount = barleySeedsAmount;
      this.grainAmount = grainAmount;
      this.salt = [];
      this.ryeSeeds = [];
      this.barleySeeds = [];
      this.grain = [];
      for (let i = 0; i <= saltAmount - 1; i++) {
        this.salt.push(new Salt());
      }
      for (let i = 0; i <= ryeSeedsAmount - 1; i++) {
        this.ryeSeeds.push(new ryeSeedsClass("seedling"));
      }
      for (let i = 0; i <= barleySeedsAmount - 1; i++) {
        this.barleySeeds.push(new barleySeedClass("seedling"));
      }
      for (let i = 0; i <= grainAmount - 1; i++) {
        this.grain.push(new Grain());
      }
     
    } 
      saltAmount = 0
      ryeSeedsAmount = 0
      barleySeedsAmount=0
      grainAmount = 0
  }

  
  export const inventoryClass = InventoryClass