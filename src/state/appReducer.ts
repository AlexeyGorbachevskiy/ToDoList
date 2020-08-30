import {Dispatch} from "redux";
import {authAPI} from "../api/todoListsAPI";
import {setIsLoggedInAC} from "./authReducer";

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type InitialStateType = {
    // is interaction with server occur now?
    status: StatusType,
    // if error will occurred - text of error will written to this var
    error: string | null,
    isInitialized: boolean,
}


const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}
export type SetAppErrorACType = ReturnType<typeof SetErrorAC>;
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>;
type ActionTypes = SetAppErrorACType | SetAppStatusACType | ReturnType<typeof setAppInitializedAC>

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-ERROR':
            return {...state, error: action.error}
        case'APP/SET-INITIALIZED': {
            return {
                ...state,
                isInitialized: action.value
            }
        }
        default:
            return {...state}
    }
}


export const SetErrorAC = (error: string | null) => {
    return ({type: 'SET-ERROR', error: error} as const)
}

export const setAppStatusAC = (status: StatusType) => {
    return ({type: 'SET-STATUS', status: status} as const)
}

export const setAppInitializedAC = (value: boolean) => {
    return ({type: 'APP/SET-INITIALIZED', value} as const)
}


export const initializeAppThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            }
            dispatch(setAppInitializedAC(true))
        })
    }
}









