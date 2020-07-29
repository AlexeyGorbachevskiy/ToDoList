import {combineReducers, createStore} from 'redux';
import {todoListsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";

export type AppRootType=ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
})

// type AppRootState={
//     todoLists:Array<TodoListsType>,
//     tasks:TasksStateType
// }






export const store = createStore(rootReducer);


//@ts-ignore
window.store = store;