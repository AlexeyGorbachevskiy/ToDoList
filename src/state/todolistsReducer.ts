import {v1} from "uuid";
import {todoListsAPI, TodoListType} from "../api/TodoListsAPI";
import {Dispatch} from "redux";


export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState: Array<TodoListDomainType> = []
export type FilterValueType = 'all' | 'completed' | 'active';
export type TodoListDomainType = TodoListType & { filter: FilterValueType }
export type AddTodoListActionType = ReturnType<typeof addTodoListAC>;
export type SetTodoListsActionType = ReturnType<typeof setTodoListsAC>;


type ActionTypes =
    | ReturnType<typeof removeTodoListAC>
    | ReturnType<typeof addTodoListAC>
    | ReturnType<typeof changeTodoListTitleAC>
    | ReturnType<typeof changeTodoListFilterAC>
    | ReturnType<typeof setTodoListsAC>;


export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionTypes): Array<TodoListDomainType> => {
    switch (action.type) {

        case 'REMOVE-TODOLIST': {
            return state.filter((t: TodoListDomainType) => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [
                {...action.todoList, filter: 'all'},
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
            return action.todoLists.map(tl => ({...tl, filter: 'all'}))
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


//thunks
export const fetchTodoListsThunkCreator = () => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.getTodoLists()
                .then((res) => {
                    dispatch(setTodoListsAC(res.data))
                })
        }
    )
};

export const removeTodoListThunkCreator = (todoListId: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.deleteTodoList(todoListId)
                .then((res) => {
                    dispatch(removeTodoListAC(todoListId))
                })
        }
    )
};

export const addTodoListThunkCreator = (title: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.createTodoList(title)
                .then((res) => {
                    dispatch(addTodoListAC(res.data.data.item))
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

