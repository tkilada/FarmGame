
const initialState = {
    ShowTake: false
}

export function ShowTakeReducer(state = initialState,action){
    switch(action.type){
        case "ShowTake" :
            return {...state,ShowTake:action.payload}
        default :
        return state
    }
}