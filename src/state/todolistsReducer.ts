import {v1} from "uuid";
import {Dispatch} from "redux";
import {SetAppErrorACType, setAppStatusAC, SetAppStatusACType, StatusType} from "./appReducer";
import {todoListsAPI, TodoListType} from "../api/todoListsAPI";
import {handleServerAppError, handleServerNetworkError} from "../utils/errorUtils";


export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState: Array<TodoListDomainType> = []
export type FilterValueType = 'all' | 'completed' | 'active';
export type TodoListDomainType = TodoListType & {
    filter: FilterValueType
    entityStatus: StatusType
}
export type AddTodoListActionType = ReturnType<typeof addTodoListAC>;
export type SetTodoListsActionType = ReturnType<typeof setTodoListsAC>;


type ActionTypes =
    | ReturnType<typeof removeTodoListAC>
    | ReturnType<typeof addTodoListAC>
    | ReturnType<typeof changeTodoListTitleAC>
    | ReturnType<typeof changeTodoListFilterAC>
    | ReturnType<typeof setTodoListsAC>
    | ReturnType<typeof changeTodoListEntityStatus>;


export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionTypes): Array<TodoListDomainType> => {
    switch (action.type) {

        case 'REMOVE-TODOLIST': {
            return state.filter((t: TodoListDomainType) => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [
                {...action.todoList, filter: 'all', entityStatus: 'idle'},
                ...state
            ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        }

        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.value} : tl)
        }

        case 'SET-TODOLISTS': {
            return action.todoLists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
        }

        case 'CHANGE-TODOLIST-ENTITY-STATUS': {
            return state.map(tl => tl.id === action.id ? {...tl, entityStatus: action.status} : tl)
        }
        default: {
            return state
        }
    }
}


//actions
export const removeTodoListAC = (todolistId: string) => ({type: 'REMOVE-TODOLIST', id: todolistId} as const)
export const addTodoListAC = (todoList: TodoListType) => ({type: 'ADD-TODOLIST', todoList: todoList} as const)
export const changeTodoListTitleAC = (id: string, title: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    id: id,
    title: title
} as const)
export const changeTodoListFilterAC = (id: string, value: FilterValueType) => ({
    type: 'CHANGE-TODOLIST-FILTER',
    id: id,
    value: value
} as const)
export const setTodoListsAC = (todoLists: TodoListType[]) => ({
    type: 'SET-TODOLISTS',
    todoLists: todoLists
} as const)
export const changeTodoListEntityStatus = (id: string, status: StatusType) => ({
    type: 'CHANGE-TODOLIST-ENTITY-STATUS',
    id: id,
    status
} as const)


//thunks
export const fetchTodoListsThunkCreator = () => {
    return (
        (dispatch: Dispatch<ActionTypes | SetAppStatusACType | SetAppErrorACType>) => {
            dispatch(setAppStatusAC('loading'))
            todoListsAPI.getTodoLists()
                .then((res) => {
                    dispatch(setTodoListsAC(res.data))
                    dispatch(setAppStatusAC('succeeded'))
                })
                .catch((error) => {
                    handleServerNetworkError(error, dispatch)
                })
        }
    )
};

export const removeTodoListThunkCreator = (todoListId: string) => {
    return (
        (dispatch: Dispatch<ActionTypes | SetAppStatusACType>) => {
            dispatch(setAppStatusAC('loading'))
            dispatch(changeTodoListEntityStatus(todoListId, 'loading'))
            todoListsAPI.deleteTodoList(todoListId)
                .then((res) => {
                    dispatch(removeTodoListAC(todoListId))
                    dispatch(setAppStatusAC('succeeded'))
                })
        }
    )
};

export const addTodoListThunkCreator = (title: string) => {
    return (
        (dispatch: Dispatch<ActionTypes | SetAppStatusACType | SetAppErrorACType>) => {

            //progressBar
            dispatch(setAppStatusAC('loading'))

            todoListsAPI.createTodoList(title)
                .then((res) => {


                    if (res.data.resultCode === 0) {
                        dispatch(addTodoListAC(res.data.data.item))
                        //progressBar
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
};

export const changeTodoListTitleThunkCreator = (id: string, title: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.updateTodolist(id, title)
                .then((res) => {
                    dispatch(changeTodoListTitleAC(id, title))
                })
        }
    )
};

