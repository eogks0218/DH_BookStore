import { combineReducers } from "redux";
import { bookStore } from "./bookStore";

const rootReducer = combineReducers({
    bookStore
});

export default rootReducer;