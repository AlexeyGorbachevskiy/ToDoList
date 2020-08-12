import {Provider} from "react-redux";
import React from "react";
import {combineReducers, createStore} from "redux";
import {todoListsReducer} from "../state/todolistsReducer";
import {tasksReducer} from "../state/tasksReducer";
import {TodoListsType} from "../AppWithRedux";
import {v1} from "uuid";


const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
})

export let todoListId1 = v1();
export let todoListId2 = v1();
const initialState = {

    todoLists: [
        {id: todoListId1, title: 'What to Learn', filter: 'all'},
        {id: todoListId2, title: 'What to Buy', filter: 'all'}
    ],
    tasks: {
        [todoListId1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true}
        ],
        [todoListId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'React Book', isDone: true}
        ]
    }

}
export type AppRootType = ReturnType<typeof rootReducer>
export const storyBookStore = createStore(rootReducer, initialState as AppRootType);


export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return (
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    )
}