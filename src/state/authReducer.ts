import {Dispatch} from "redux";
import {SetAppErrorACType, setAppStatusAC, SetAppStatusACType} from "./appReducer";
import {authAPI, LoginParamsType} from "../api/todoListsAPI";
import {handleServerAppError, handleServerNetworkError} from "../utils/errorUtils";

const initialState: InitialStateType = {
    isLoggedIn: false
}
type InitialStateType = {
    isLoggedIn: boolean
}

type ActionTypes =
    ReturnType<typeof setIsLoggedInAC>


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case 'login/SET-IS-LOGGED-IN': {
            return {
                ...state,
                isLoggedIn: action.value
            }
        }

        default: {
            return state
        }
    }
}


// actions


export const setIsLoggedInAC = (value: boolean) => {
    return ({type: 'login/SET-IS-LOGGED-IN', value: value} as const)
}


//thunks
export const loginThunkCreator = (data: LoginParamsType) => {
    return (
        (dispatch: Dispatch<ActionTypes | SetAppStatusACType | SetAppErrorACType>) => {

            dispatch(setAppStatusAC('loading'))

            authAPI.login(data)
                .then((res) => {
                    if (res.data.resultCode === 0) {
                        dispatch(setIsLoggedInAC(true))
                        // progressBar
                        dispatch(setAppStatusAC('succeeded'))
                    } else {
                        handleServerAppError(res.data, dispatch)
                    }


                })
                .catch((error) => {
                    handleServerNetworkError(error, dispatch)
                })

        }
    )
}

export const logoutThunkCreator = () => {
    return (
        (dispatch: Dispatch<ActionTypes | SetAppStatusACType | SetAppErrorACType>) => {

            dispatch(setAppStatusAC('loading'))

            authAPI.logout()
                .then((res) => {
                    if (res.data.resultCode === 0) {
                        dispatch(setIsLoggedInAC(false))
                        // progressBar
                        dispatch(setAppStatusAC('succeeded'))
                    } else {
                        handleServerAppError(res.data, dispatch)
                    }


                })
                .catch((error) => {
                    handleServerNetworkError(error, dispatch)
                })

        }
    )
}

