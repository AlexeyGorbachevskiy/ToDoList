import {v1} from "uuid";
import {TodoListType} from "../api/TodoListsAPI";


export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState: Array<TodoListDomainType> = [
    // {id: todoListId1, title: 'What to learn', filter: 'all'},
    // {id: todoListId2, title: 'What to buy', filter: 'all'},
]

export type FilterValueType = 'all' | 'completed' | 'active';

export type TodoListDomainType = TodoListType & {
    filter: FilterValueType
}


export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todoListId: string
}
export type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    value: FilterValueType
}

type ActionType =
    RemoveTodoListActionType | AddTodoListActionType | ChangeTodoListTitleActionType | ChangeTodoListFilterActionType;

export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionType): Array<TodoListDomainType> => {
    switch (action.type) {

        case 'REMOVE-TODOLIST': {
            return state.filter((t: TodoListDomainType) => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [
                {
                    id: action.todoListId,
                    title: action.title,
                    filter: 'all',
                    addedDate: '',
                    order: 0,
                },
                ...state
            ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todoList = state.find(tl => tl.id === action.id);
            if (todoList) {
                todoList.title = action.title;
            }
            return [
                ...state
            ]
        }

        case 'CHANGE-TODOLIST-FILTER': {
            let todoList = state.find(t => t.id === action.id);
            if (todoList) {
                todoList.filter = action.value;
            }
            return [
                ...state

            ]
        }

        default: {
            return state
        }
    }
}


export const removeTodoListAC = (todolistId: string): RemoveTodoListActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodoListAC = (title: string): AddTodoListActionType => {
    return {type: 'ADD-TODOLIST', title: title, todoListId: v1()}
}
export const changeTodoListTitleAC = (id: string, title: string): ChangeTodoListTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const changeTodoListFilterAC = (id: string, value: FilterValueType): ChangeTodoListFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id: id, value: value}
}

