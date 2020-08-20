import axios from 'axios'
import {UpdateTaskTitle} from "../stories/TodoListsAPI.stories";


const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '3de0712e-e19a-4637-bf5e-355c7a8ad46c'
    }
})


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: Array<TaskType>

}

export type UpdateTaskType={
    title: string
    description: string
    status: number
    priority: number
    startDate: string|null
    deadline: string|null
}


export const todoListsAPI = {

    getTodoLists() {
        return axiosInstance.get<TodolistType[]>('todo-lists')
    },

    createTodoList(title: string) {
        return axiosInstance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title});
    },

    deleteTodoList(todolistId: string) {
        return axiosInstance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },

    updateTodolist(todolistId: string, title: string) {
        return axiosInstance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
    },

    getTasks(todoListId: string) {
        const promise = axiosInstance.get<GetTasksResponse>(`todo-lists/${todoListId}/tasks`)
        return promise
    },

    createTask(todoListId: string, title: string) {
        const promise = axiosInstance.post<ResponseType<TaskType>>(`todo-lists/${todoListId}/tasks`, {title: title});
        return promise
    },

    deleteTask(todolistId: string, taskId: string) {
        const promise = axiosInstance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    },

    updateTask(todolistId: string, taskId: string, model: UpdateTaskType) {
        const promise = axiosInstance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
        return promise
    },


}
