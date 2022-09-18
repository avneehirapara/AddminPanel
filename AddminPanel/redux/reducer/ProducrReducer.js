import * as ActionType from '../reducer/ActionType'

const  intvalue = {
    isLoading: false,
    product:[],
    error: ''
}

export const ProductReducer = (state = intvalue,action) => {
    // console.log( "yessss" + action.type, action.payload);
        switch(action.type){
            case  ActionType.GET_PRODUCT :
              return{
                ...state,
                isLoading: false,
                product:action.payload,
                error: ''
              }  
              case  ActionType.ADD_PRODUCT :
                return{
                  ...state,
                  isLoading: false,
                  product:state.product.concat(action.payload),
                  error: ''
                } 
                case  ActionType.DELETE_PRODUCT :
                  return{
                    ...state,
                    isLoading: false,
                    product:state.product.filter((p)=> p.id != action.payload),
                    error: ''
                  } 
                  case  ActionType.UPDATE_PRODUCT :
                    return{
                      ...state,
                      isLoading: false,
                      product:state.product.map((p)=>{
                        if(p.id === action.payload,id){
                        return action.payload
                        }else{
                          return p
                        }
                      }),
                      error: ''
                    } 
            default:
              return state
        }
}