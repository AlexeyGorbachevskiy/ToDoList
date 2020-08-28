import {SetAppErrorACType, setAppStatusAC, SetAppStatusACType, SetErrorAC} from "../state/appReducer";
import {ResponseType} from '../api/todoListsAPI'
import {Dispatch} from "redux";

export const handleServerAppError = <D>(data: ResponseType, dispatch: Dispatch<SetAppErrorACType | SetAppStatusACType>) => {
    if (data.messages.length) {
        dispatch(SetErrorAC(data.messages[0]))
    } else {
        dispatch(SetErrorAC('Entered text length must be less than 101 symbol'))
    }
    // progressBar
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorACType | SetAppStatusACType>) => {
    dispatch(SetErrorAC(error.message ? error.message : 'Some error is occurred'))
    dispatch(setAppStatusAC('failed'))
}