
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type InitialStateType = {
    // is interaction with server occur now?
    status: StatusType,
    // if error will occurred - text of error will written to this var
    error: string | null
}


const initialState: InitialStateType = {
    status: 'idle',
    error: null
}
export type SetAppErrorACType = ReturnType<typeof SetErrorAC>;
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>;
type ActionTypes = SetAppErrorACType | SetAppStatusACType

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}


const type = {}

export const SetErrorAC = (error: string | null) => {
    return ({type: 'SET-ERROR', error: error} as const)
}

export const setAppStatusAC = (status:StatusType) => {
    return ({type: 'SET-STATUS', status: status} as const)
}










