import {v1} from "uuid";
import {AddTodoListActionType, setTodoListsAC, SetTodoListsActionType} from "./todolistsReducer";
import {TasksStateType} from "../App";
import {TaskPriorities, TaskStatuses, TaskType, todoListsAPI} from "../api/TodoListsAPI";
import {Dispatch} from "redux";


type StateType = TasksStateType


const initialState: StateType = {
    // [todoListId1]: [
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Redux", isDone: false},
    // ],
    // [todoListId2]: [
    //     {id: v1(), title: "New", isDone: false},
    //     {id: v1(), title: "Yahooo", isDone: false},
    //     {id: v1(), title: "EEEEE", isDone: true},
    //     {id: v1(), title: "Veeee", isDone: false},
    // ],
}

type ActionTypes =
    RemoveTaskACType
    | AddTaskACType
    | ChangeTaskStatusACType
    | ChangeTaskTitleACType
    | AddTodoListActionType
    | RemoveTodolistACType
    | SetTodoListsActionType
    | SetTasksACType


export const tasksReducer = (state: StateType = initialState, action: ActionTypes): StateType => {

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
            const newTask = {
                id: v1(),
                title: action.newTaskTitle,
                status: TaskStatuses.New,

                description: '',
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: action.todoListId,
                order: 0,
                addedDate: '',
            };
            let newTasks = [newTask, ...stateCopy[action.todoListId]];
            stateCopy[action.todoListId] = newTasks;
            return stateCopy
        }
        case "CHANGE-TASK-STATUS": {
            let todoListTasks = state[action.todoListId];
            state[action.todoListId] = todoListTasks.map(t => t.id === action.id ? {...t, status: action.status} : t);
            return ({...state})
        }
        case "CHANGE-TASK-TITLE": {
            let todoListTasks = state[action.todoListId];
            state[action.todoListId] = todoListTasks.map(t => t.id === action.id ? {...t, title: action.title} : t);
            return ({...state})
        }

        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todoListId]: []
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
            const stateCopy = {...state};
            stateCopy[action.todoListId] = action.tasks;

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
    status: TaskStatuses
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
export const addTaskAC = (newTaskTitle: string, todoListId: string): AddTaskACType => {
    return {type: 'ADD-TASK', newTaskTitle: newTaskTitle, todoListId: todoListId}
}

export const changeTaskStatusAC = (id: string, status: TaskStatuses, todoListId: string): ChangeTaskStatusACType => {
    return {type: 'CHANGE-TASK-STATUS', id: id, status: status, todoListId: todoListId}
}

export const changeTaskTitleAC = (id: string, title: string, todoListId: string): ChangeTaskTitleACType => {
    return {type: 'CHANGE-TASK-TITLE', id: id, title: title, todoListId: todoListId}
}

export const removeTodoListAC = (id: string): RemoveTodolistACType => {
    return {type: 'REMOVE-TODOLIST', id: id}
}

export const setTasksAC = (tasks: TaskType[], todoListId: string): SetTasksACType => {
    return {type: 'SET-TASKS', tasks: tasks, todoListId: todoListId}
}


export const fetchTasksThunkCreator = (todoListId: string) => {
    return (
        (dispatch: Dispatch) => {
            todoListsAPI.getTasks(todoListId)
                .then((res) => {
                    dispatch(setTasksAC(res.data.items, todoListId))
                })
        }
    )

}

