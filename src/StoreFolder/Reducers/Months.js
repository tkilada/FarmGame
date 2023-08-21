 const monthsList = {
    January: ["February", "Winter"],
    February: ["March", "Winter"],
    March: ["April", "Spring"],
    April: ["May", "Spring"],
    May: ["June", "Spring"],
    June: ["July", "Summer"],
    July: ["August", "Summer"],
    August: ["September", "Summer"],
    September: ["October", "Fall"],
    October: ["November", "Fall"],
    November: ["December", "Fall"],
    December: ["January", "Winter"],
  };
  const MonthlyTurnPoints = 10
  export const plantActionCost = 2
  export const harvestActionCost = 2
  
    
export const Months = monthsList 
 

  const initialState = {
    currentMonth : "January",
    ActionPoints : 1,
    Year:1786,
}


export function ChangeMonthReducer(state = initialState,action){
    switch(action.type){
      case "ChangeMonth":
        return {...state,currentMonth:action.payload}
      case "ActionPoints":
        return {...state,ActionPoints:action.payload}
      case "ChangeYear":
        return {...state,Year:action.payload}
      default: 
        return state
    }
}

// Selectors 
export const SelectMonth = state=> state.ChangeMonth.currentMonth
export const SelectTurnPoints = state=> state.ChangeMonth.ActionPoints
export const YearSelector = state=> state.ChangeMonth.Year

// Actions 
export const MonthAction = "ChangeMonth"
export const TurnPointsAction = "ActionPoints"

// Action Creators
export const UpdateMonth = (Payload) => ({
  type: "ChangeMonth",
  payload: Payload
})

export const UpdateYear = (Payload) =>({
  type: "ChangeYear",
  payload: Payload
})

export const setTurnPoints = (Payload) => ({
  type: "ActionPoints",
  payload: Payload
})

export const ResetTurnPoints = () => ({
  type: "ActionPoints",
  payload: MonthlyTurnPoints
})
export const PlantedCropsTurnPoints = (Payload) => ({
  type: "ActionPoints",
  payload: Payload - plantActionCost
})
export const HarvestCropsTurnPoints = (Payload) => ({
  type: "ActionPoints",
  payload: Payload - harvestActionCost
})
