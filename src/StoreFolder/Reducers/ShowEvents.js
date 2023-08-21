import { UpdateMonth } from "./Months"

const initialState = {
    TaxCollection: false,
    TaxPaid: true
}

export function ShowEventsReducer(state = initialState,action){
    switch(action.type){
        case "Tax Collection" :
            return {...state,TaxCollection:action.payload}
        case "PaidTax":
            return {...state,TaxPaid:action.payload}
        default :
            return state
    }
}

// Selectors
export const TaxCollectSelector = state => state.showEvents.TaxCollection
export const TaxStatusSelector = state => state.showEvents.TaxPaid

// Action Types
export const TaxCollectionAction = "Tax Collection"

// Action Creator 
// // export const TriggerTaxCollection = () =>({
// //    type: "Tax Collection",
// //    payload: !TaxCollectSelector
// // })

export const TriggerTaxCollection = (payload) => (dispatch)=> {
    dispatch({
    type: "Tax Collection",
    payload: !payload
})
}
export const ChargeTax = (payload) => (dispatch) => {
    dispatch({
        type: "PaidTax", 
        payload: !payload
    })
}
