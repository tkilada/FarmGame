class grainClass {
    value = 5
    name = "grain"
}
class salt {
    value = 7
    name = "salt"
}
class barleySeed {
  constructor(harvestStatus) {
    this.harvestStatus = harvestStatus;
  }
  value = 4
  name = "barleySeeds"
    CropStatus = {
      seedling: "growth",
      growth: "collect",
      collect: "collect",
    };
  grow() {
    this.harvestStatus = this.CropStatus[this.harvestStatus];
  }

}
class ryeSeed {
  constructor(harvestStatus) {
    this.harvestStatus = harvestStatus;
  }
    value = 3 
    name = "ryeSeeds"
  
   CropStatus = {
      seedling: "growth",
      growth: "collect",
      collect: "collect",
    };
  grow() {
    this.harvestStatus = this.CropStatus[this.harvestStatus];
  }
  harvestCheck(){
    if(this.harvestStatus === "collect"){return true
    }
    else{return false}
}
}




export const ryeSeedsClass = ryeSeed;
export const barleySeedClass = barleySeed;
export const Salt = salt;
export const Grain = grainClass;
