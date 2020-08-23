import {Provider} from "react-redux";
import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoListsReducer} from "../state/todolistsReducer";
import {tasksReducer} from "../state/tasksReducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "../api/TodoListsAPI";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
})

export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState: AppRootType = {

    todoLists: [
        {id: todoListId1, title: 'What to Learn', filter: 'all', addedDate: '', order: 0},
        {id: todoListId2, title: 'What to Buy', filter: 'all', addedDate: '', order: 0}
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
    }

}
export type AppRootType = ReturnType<typeof rootReducer>
export const storyBookStore = createStore(rootReducer, initialState,applyMiddleware(thunk));


export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return (
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    )
}