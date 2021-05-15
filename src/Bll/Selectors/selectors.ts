import {AppRootStateType} from "../store";

export const dataSelector = (state:AppRootStateType)=>{
    return state.reducer.data
}