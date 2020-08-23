import {addTodoListAC, TodoListDomainType, todoListsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";
import {TasksStateType,} from "../app/App";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodoListsState: Array<TodoListDomainType> = [];

    const todoList = {
        id: 'any', title: 'new todolist', addedDate: '', order: 0
    }
    const action = addTodoListAC(todoList);

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodoListsState = todoListsReducer(startTodoListsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodoLists = endTodoListsState[0].id;

    expect(idFromTasks).toBe(action.todoList.id);
    expect(idFromTodoLists).toBe(action.todoList.id);
});



