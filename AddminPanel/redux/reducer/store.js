import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducre } from './rootReducer'

export const configstoreg = () =>{
let store = createStore(rootReducre , applyMiddleware(thunk))
     return store
}
