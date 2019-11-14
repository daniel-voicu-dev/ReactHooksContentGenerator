import { combineReducers } from "redux"

const containerReducer = (state = [], {type, payload}) => {
  switch(type) {
    case "ADD_ITEM": return [...state, payload];
    case "UPDATE_LIST": return [...payload];
    default: return state;
  }
}


export default combineReducers({containerReducer})