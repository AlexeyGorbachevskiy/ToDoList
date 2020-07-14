import {FilterValueType, TodoListsType} from "../App";
import {v1} from "uuid";

type StateType = Array<TodoListsType>

export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
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

export const todoListsReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter((t: TodoListsType) => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [
                {id: v1(), title: action.title, filter: 'all'},
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
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}


export const RemoveTodoListAC = (todolistId: string): RemoveTodoListActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodoListAC = (title: string): AddTodoListActionType => {
    return {type: 'ADD-TODOLIST', title: title}
}
export const ChangeTodoListTitleAC = (id: string, title: string): ChangeTodoListTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const ChangeTodoListFilterAC = (id: string, value: FilterValueType): ChangeTodoListFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id: id, value: value}
}

