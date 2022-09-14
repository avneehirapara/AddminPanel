import * as ActionType from '../reducer/ActionType'

let initvalue = {
    isLoading :false,
    Price:[],
    error:'' 
}


export const PriceReducer = (state=initvalue, action) => {
    console.log(action.type, action.payload);
    switch(action.type){
        case ActionType.GET_PRICE:
            return{
                ...state,
                isLoading :false,
                Price:action.payload,
                error:'' 
            }
            default :
            return state
    }
}

