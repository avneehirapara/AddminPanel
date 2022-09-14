import { combineReducers } from "redux";
import { CatedryReducer } from "./CategryReducer";
import { PriceReducer } from "./PriceReducer";



export const rootReducre = combineReducers ({
    Catagaris:CatedryReducer,
    Price :PriceReducer,

})