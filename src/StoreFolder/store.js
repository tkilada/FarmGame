// Redux Imports
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// Class Imports
import { inventoryClass } from './Classes/inventoryclass'
import { playerClass } from './Classes/playerClass'
import { RoomClass } from './Classes/RoomClass'
// Reducer Imports
import {RoomInventoryReducer} from './Reducers/storeRoomState'
import { PlayerClassReducer } from './Reducers/storePlayerState'
import { ShowTakeReducer } from './Reducers/ShowTake'
import { ShowPlantCropsReducer } from './Reducers/ShowPlantCrops'
import { ChangeMonthReducer } from './Reducers/Months'
import { ShowEventsReducer } from './Reducers/ShowEvents'


export const store = createStore(
  combineReducers({
    Room: RoomInventoryReducer,
    Player: PlayerClassReducer,
    ShowTake:ShowTakeReducer,
    ShowCrops:ShowPlantCropsReducer,
    ChangeMonth:ChangeMonthReducer,
    showEvents: ShowEventsReducer
  }),
  applyMiddleware(thunk)
);



