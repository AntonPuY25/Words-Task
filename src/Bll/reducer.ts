import {Dispatch} from "redux";
import Api from "../API/api";

export const initialState:TypeInitialState = {
    status:'free',
    error:'',
    data:[],
}
export const getDataAC = (data:string[])=>{
    return{
        type:'/reducer/GET_DATA',
        data
    } as const
}

export const setStatusAC = (status:TypeStatus)=>{
    return{
        type:'/reducer/SET_STATUS',
        status
    } as const
}
export const setErrorAC = (error:string)=>{
    return{
        type:'/reducer/SET_ERROR',
        error
    } as const
}
export const Reducer=(state:TypeInitialState=initialState,action:TypeActions):TypeInitialState=>{
        switch (action.type) {
            case '/reducer/GET_DATA':{
                return {...state,
                data:action.data
                }
            }
            case '/reducer/SET_STATUS':{
                return {...state,
                    status:action.status
                }
            }
            case '/reducer/SET_ERROR':{
                return {...state,
                    error:action.error
                }
            }
            default:
                return state
        }
}




export const getDataTC = ()=> async (dispatch:Dispatch)=>{
    try {
        dispatch(setStatusAC('loading'))
        let result = await Api.getData()
        dispatch(getDataAC(result))
        dispatch(setStatusAC('success'))

    }catch (e) {
        dispatch(setErrorAC(e))
        dispatch(setStatusAC('error'))
    }
}

type TypeActions =
    |ReturnType<typeof getDataAC>
    |ReturnType<typeof setStatusAC>
    |ReturnType<typeof setErrorAC>
type TypeStatus = 'free'|'loading'|'success'|'error'
export type TypeInitialState = {
    status:TypeStatus
    error:string
    data:string[]
}