import {applyMiddleware, combineReducers, createStore} from 'redux';
import {todoListsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {authReducer} from "./authReducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
    app: appReducer,
    login: authReducer,
})

// type AppRootState={
//     todoLists:Array<TodoListsType>,
//     tasks:TasksStateType
// }


export const store = createStore(rootReducer, applyMiddleware(thunk));


//@ts-ignore
window.store = store;