import {AddTodoListActionType, SetTodoListsActionType} from "./todolistsReducer";
import {TaskPriorities, TaskStatuses, TaskType, todoListsAPI, UpdateTaskModelType} from "../api/TodoListsAPI";
import {Dispatch} from "redux";
import {AppRootType} from "./store";
import {TasksStateType} from "../app/App";


const initialState: TasksStateType = {}

type ActionTypes =
    RemoveTaskACType
    | AddTaskACType
    | UpdateTaskActionType
    | AddTodoListActionType
    | RemoveTodolistACType
    | SetTodoListsActionType
    | SetTasksACType


export const tasksReducer = (state: TasksStateType = initialState, action: ActionTypes): TasksStateType => {

    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.todoListId]: state[action.todoListId].filter(taskElement => action.id !== taskElement.id),
            }

        }
        case 'ADD-TASK': {
            return {
                ...state,
                [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]
            }
        }
        case "UPDATE-TASK": {
            return {
                ...state,
                [action.todoListId]: state[action.todoListId].map(t => t.id === action.id ? {...t, ...action.model} : t),
            }

        }

        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todoList.id]: []
            }
        }

        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }

        case "SET-TODOLISTS": {
            const stateCopy = {...state}
            action.todoLists.forEach(tl => {
                stateCopy[tl.id] = [];
            })
            return stateCopy
        }

        case "SET-TASKS": {
            return {
                ...state,
                [action.todoListId]: action.tasks,
            }
        }


        default: {
            return state
        }
    }
}


// actions

export type RemoveTaskACType = {
    type: 'REMOVE-TASK'
    id: string
    todoListId: string
}
export type AddTaskACType = {
    type: 'ADD-TASK'
    task: TaskType
}
export type UpdateTaskActionType = {
    type: 'UPDATE-TASK'
    id: string
    model: UpdateDomainTaskModelType
    todoListId: string
}


export type RemoveTodolistACType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type SetTasksACType = {
    type: 'SET-TASKS'
    tasks: Array<TaskType>
    todoListId: string
}


export const removeTaskAC = (id: string, todoListId: string): RemoveTaskACType => {
    return {type: 'REMOVE-TASK', id: id, todoListId: todoListId}
}
export const addTaskAC = (task: TaskType): AddTaskACType => {
    return {type: 'ADD-TASK', task: task}
}

export const updateTaskAC = (id: string, model: UpdateDomainTaskModelType, todoListId: string): UpdateTaskActionType => {
    return {type: 'UPDATE-TASK', id: id, model: model, todoListId: todoListId}
}


export const removeTodoListAC = (id: string): RemoveTodolistACType => {
    return {type: 'REMOVE-TODOLIST', id: id}
}

export const setTasksAC = (tasks: TaskType[], todoListId: string): SetTasksACType => {
    return {type: 'SET-TASKS', tasks: tasks, todoListId: todoListId}
}


//thunks
export const fetchTasksThunkCreator = (todoListId: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.getTasks(todoListId)
                .then((res) => {
                    dispatch(setTasksAC(res.data.items, todoListId))
                })
        }
    )
}

export const removeTaskThunkCreator = (todoListId: string, taskId: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.deleteTask(todoListId, taskId)
                .then((res) => {
                    dispatch(removeTaskAC(taskId, todoListId))
                })
        }
    )
}

export const addTaskThunkCreator = (todoListId: string, title: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>) => {
            todoListsAPI.createTask(todoListId, title)
                .then((res) => {

                    dispatch(addTaskAC(res.data.data.item))
                })
        }
    )
}


export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}

export const updateTaskThunkCreator = (taskId: string, domainModel: UpdateDomainTaskModelType, todoListId: string) => {
    return (
        (dispatch: Dispatch<ActionTypes>, getState: () => AppRootType) => {
            const state = getState();
            const task = state.tasks[todoListId].find(t => t.id === taskId);

            if (!task) {
                console.warn('Task is not found in the state');
                return;
            }

            const apiModel: UpdateTaskModelType = {
                deadline: task.deadline,
                description: task.description,
                priority: task.priority,
                startDate: task.startDate,
                title: task.title,
                status: task.status,
                ...domainModel

            }
            todoListsAPI.updateTask(todoListId, taskId, apiModel)
                .then((res) => {

                    dispatch(updateTaskAC(taskId, domainModel, todoListId))
                })
        }
    )
}



