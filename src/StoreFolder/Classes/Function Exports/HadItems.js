import { barleySeedClass, Grain, ryeSeedsClass, Salt } from "../ItemClasses"

export const HadItems = (roomInventory)=>{
    var hadItems = []
  if(roomInventory.salt.length > 0){
    hadItems.push({name:"Salt", itemClass: new Salt})
  }
  if(roomInventory.ryeSeeds.length > 0){
    hadItems.push({name:"Rye Seeds", itemClass: new ryeSeedsClass("seedling")})
  } 
  if(roomInventory.barleySeeds.length > 0){
    hadItems.push({name:"Barley Seeds", itemClass: new barleySeedClass("seedling")})
  } 
  if(roomInventory.grain.length > 0){
    hadItems.push({name:"Grain", itemClass: new Grain})
  }
  return hadItems
}
