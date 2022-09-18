import { concat } from 'react-native-reanimated'
import * as ActionType from '../reducer/ActionType'



let initvalue = {
    isLoading: false,
    Catagaris: [],
    error: ''
}
export const CatedryReducer = (state = initvalue, action) => {
    // console.log( action.type, action.payload);
    switch (action.type) {
        case ActionType.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Catagaris: action.payload,
                error: ''
            }
        case ActionType.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Catagaris: state.Catagaris.concat(action.payload),
                error: ''
            }
        case ActionType.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Catagaris: state.Catagaris.filter((c) => c.id != action.payload),
                error: ''
            }
        case ActionType.UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Catagaris: state.Catagaris.map((c) => {
                    if (c.id === action.payload.id) {
                        return action.payload
                    } else {
                        return c
                    }
                }),
                error: ''
            }


        default:
            return state
    }
}