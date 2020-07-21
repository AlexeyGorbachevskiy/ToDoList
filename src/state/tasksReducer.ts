import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodoListActionType} from "./todolistsReducer";


type StateType = TasksStateType


type ActionTypes =
    RemoveTaskACType
    | AddTaskACType
    | ChangeTaskStatusACType
    | ChangeTaskTitleACType
    | AddTodoListActionType
    | RemoveTodolistACType


export const tasksReducer = (state: StateType, action: ActionTypes): StateType => {

    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = state[action.todoListId];
            const filteredTasks = tasks.filter(taskElement => action.id !== taskElement.id);
            stateCopy[action.todoListId] = filteredTasks

            return stateCopy
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const newTask = {id: v1(), title: action.newTaskTitle, isDone: false};
            let newTasks = [newTask, ...stateCopy[action.todoListId]];
            stateCopy[action.todoListId] = newTasks;
            return stateCopy
        }
        case "CHANGE-TASK-STATUS": {
            const stateCopy = {...state}
            let task = stateCopy[action.todoListId].find(t => t.id === action.id);
            if (task) {
                task.isDone = action.isDone;
            }
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state}
            let task = stateCopy[action.todoListId].find(t => t.id === action.id);
            if (task) {
                task.title = action.title;
            }
            return stateCopy
        }

        case 'ADD-TODOLIST': {
            const stateCopy = {...state}
            stateCopy[action.todoListId] = [];
            return stateCopy
        }

        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.todoListId]
            return stateCopy
        }


        default: {
            return state
        }
    }
}


export type RemoveTaskACType = {
    type: 'REMOVE-TASK'
    id: string
    todoListId: string
}
export type AddTaskACType = {
    type: 'ADD-TASK'
    newTaskTitle: string
    todoListId: string
}
export type ChangeTaskStatusACType = {
    type: 'CHANGE-TASK-STATUS'
    id: string
    isDone: boolean
    todoListId: string
}
export type ChangeTaskTitleACType = {
    type: 'CHANGE-TASK-TITLE'
    id: string
    title: string
    todoListId: string
}

export type RemoveTodolistACType = {
    type: 'REMOVE-TODOLIST'
    todoListId: string
}

export const removeTaskAC = (id: string, todoListId: string): RemoveTaskACType => {
    return {type: 'REMOVE-TASK', id: id, todoListId: todoListId}
}
export const addTaskAC = (newTaskTitle: string, todoListId: string): AddTaskACType => {
    return {type: 'ADD-TASK', newTaskTitle: newTaskTitle, todoListId: todoListId}
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todoListId: string): ChangeTaskStatusACType => {
    return {type: 'CHANGE-TASK-STATUS', id: id, isDone: isDone, todoListId: todoListId}
}

export const changeTaskTitleAC = (id: string, title: string, todoListId: string): ChangeTaskTitleACType => {
    return {type: 'CHANGE-TASK-TITLE', id: id, title: title, todoListId: todoListId}
}

export const removeTodoListAC = (todoListId: string): RemoveTodolistACType => {
    return {type: 'REMOVE-TODOLIST', todoListId: todoListId}
}


