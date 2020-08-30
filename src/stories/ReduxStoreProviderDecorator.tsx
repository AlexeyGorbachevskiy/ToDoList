import {Provider} from "react-redux";
import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoListsReducer} from "../state/todolistsReducer";
import {tasksReducer} from "../state/tasksReducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "../api/todoListsAPI";
import thunk from "redux-thunk";
import {appReducer} from "../state/appReducer";
import {authReducer} from "../state/authReducer";


const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
    app: appReducer,
    login: authReducer
})

export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState: AppRootType = {

    todoLists: [
        {id: todoListId1, title: 'What to Learn', filter: 'all', entityStatus: 'idle', addedDate: '', order: 0},
        {id: todoListId2, title: 'What to Buy', filter: 'all', entityStatus: 'loading', addedDate: '', order: 0}
    ],
    tasks: {
        [todoListId1]: [
            {
                id: v1(),
                title: 'HTML',
                status: TaskStatuses.Completed,
                description: '',
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: 'todoListId1',
                order: 0,
                addedDate: '',
            },
            {
                id: v1(),
                title: 'HTML',
                status: TaskStatuses.Completed,
                description: '',
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: 'todoListId1',
                order: 0,
                addedDate: '',
            }
        ],
        [todoListId2]: [
            {
                id: v1(),
                title: 'HTML',
                status: TaskStatuses.Completed,
                description: '',
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: 'todoListId2',
                order: 0,
                addedDate: '',
            },
            {
                id: v1(),
                title: 'HTML',
                status: TaskStatuses.Completed,
                description: '',
                priority: TaskPriorities.Low,
                startDate: '',
                deadline: '',
                todoListId: 'todoListId2',
                order: 0,
                addedDate: '',
            }
        ]
    },
    app: {
        status: 'idle',
        error: null,
        isInitialized: false
    },
    login: {
        isLoggedIn: false
    }

}
export type AppRootType = ReturnType<typeof rootReducer>
export const storyBookStore = createStore(rootReducer, initialState, applyMiddleware(thunk));


export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return (
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    )
}