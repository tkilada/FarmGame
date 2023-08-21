
const initialState = {
    ShowCrops: false,
    ShowHarvest: false
}

export function ShowPlantCropsReducer(state = initialState,action){
    switch(action.type){
        case "ShowPlant":
            return {...state,ShowCrops:action.payload}
        case "ShowHarvest":
            return {...state,ShowHarvest:action.payload}
        default :
            return state
    }
}

// Selectors
export const ShowPlantSelctor = state => state.ShowCrops.ShowCrops   
export const ShowHarvest = state=>state.ShowCrops.ShowHarvest

// Action Types
export const showPlantAction = "ShowPlant"
export const showHarvestAction = "ShowHarvest"

// Action Creators
export const UpdateShowPlants = (PlantStatus) => (dispatch) => {
    dispatch({
        type: showPlantAction,
        payload: PlantStatus
    })
}
