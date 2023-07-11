import { combineReducers,legacy_createStore } from "redux";
import cartReducer from "./Redux/cartReducer";
import studentReducer from "./Redux/studentReducer";

const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=legacy_createStore(reducers)

export default store