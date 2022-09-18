import { combineReducers } from "redux";
import { CatedryReducer } from "./CategryReducer";
import { PriceReducer } from "./PriceReducer";
import { ProductReducer } from "./ProducrReducer";



export const rootReducre = combineReducers ({
    Catagaris:CatedryReducer,
    Price :PriceReducer,
    Product:ProductReducer,

})