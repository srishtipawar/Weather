import {combineReducers} from "redux";
import placeReducer from "./place";
import placedataReducer from "./placedata";
import themeReducer from "./theme";

const rootReducer = combineReducers({
    place:placeReducer,
    placedata: placedataReducer,
    theme: themeReducer,
});

export default rootReducer;