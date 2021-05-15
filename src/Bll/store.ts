import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Reducer} from "./reducer";


let rootReducer = combineReducers({
    reducer:Reducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
