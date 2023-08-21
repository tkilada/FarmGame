import { inventoryClass } from '../Classes/inventoryclass'
import { playerClass } from '../Classes/playerClass'



const initialState = {
    PlayerClass: new playerClass("Lobby",new inventoryClass(0,0,0,0,0),40),
    Name: ""
}

export function PlayerClassReducer(state = initialState,action){
    switch(action.type){
        case "PlayerChange":
            return {...state,PlayerClass:action.payload}
        case 'Name':
            return{...state,Name:action.payload}
        default :
            return state
    }
}

// Action 
export const PlayerAction = "PlayerChange"

// Selectors 
export const PlayerSelector = state => state.Player.PlayerClass
export const PlayerNameSelector = state => state.Player.Name

// Action Creators
export const UpdatePlayerState = (Payload) => ({
    type: "PlayerChange",
    payload: Payload
})
export const UpdatePlayerName = (Payload) => ({
    type: "Name",
    payload: Payload
})