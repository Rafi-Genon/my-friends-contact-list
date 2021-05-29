import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
    contact: contactReducer,

})
export const store = createStore(rootReducer, composeWithDevTools())