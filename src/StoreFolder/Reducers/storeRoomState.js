import { inventoryClass } from '../Classes/inventoryclass'
import { RoomClass } from '../Classes/RoomClass'
import { ShopClass } from '../Classes/RoomSpecificClasses/ShopsClassFile'

const initialState = {
    FarmHouseRoom: new RoomClass(new inventoryClass(2,2,2,2),["Field"],'Farm House'),
    FieldRoom: new RoomClass(new inventoryClass(0,0,0,0),["FarmHouse","Paris"],"Field"),
    ParisRoom: new RoomClass(new inventoryClass(0,0,0,0),['Field','Shops','Tavern','Palace'],'Paris City Gates'),
    ShopsRoom: new ShopClass(new inventoryClass(50,50,50,50),['Paris','Tavern'],"Market",100),
    TavernRoom: new RoomClass(new inventoryClass(50,0,0,0),['Paris','Shops'],"Tavern"),
    PalaceRoom: new RoomClass(new inventoryClass(0,0,0,0),['Paris'],'Palace')
}

export function RoomInventoryReducer(state = initialState,action){
    switch(action.type){
        case "Farm House":
            return {...state,FarmHouseRoom:action.payload};
        case "Field":
            return {...state,FieldRoom:action.payload};
         case "Paris City Gates":
            return {...state,ParisRoom:action.payload};
        case "Market":
            return {...state,ShopsRoom:action.payload};
        default:
            return state
    }
}

// Selectors 
export const SelectRoomEdit = state => state.Room.RoomClass
export const SelectFarmRoom = state => state.Room.FarmHouseRoom
export const SelectFieldRoomEdit = state => state.Room.FieldRoom
export const SelectShopsEdit = state => state.Room.ShopsRoom
export const SelectParis = state => state.Room.ParisRoom
export const SelectTavern = state => state.Room.TavernRoom
export const SelectPalace = state => state.Room.PalaceRoom


// Action Types
export const FarmHouseAction = "Farm House"
export const FieldAction = "Field"
export const ParisAction = "Paris City Gates"
export const ShopsAction = "Market"
export const TavernAction = "Tavern"
export const PalaceAction = "Palace"
// Action Creators 
export const UpdateRoomState = (SpecificRoom,Payload) => ({
    type: SpecificRoom,
    payload: Payload
})

export const updateField = (FieldRoom) => (dispatch)=> {
    dispatch({
    type: FieldAction,
    payload: FieldRoom
})
};

 
