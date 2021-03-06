import {v1} from 'uuid';

import {
    addTodoListAC, changeTodoListEntityStatus,
    changeTodoListFilterAC,
    changeTodoListTitleAC, FilterValueType,
    removeTodoListAC, setTodoListsAC, TodoListDomainType,
    todoListsReducer
} from "./todolistsReducer";
import {TodoListType} from "../api/todoListsAPI";
import {StatusType} from "./appReducer";


let todoListId1: string;
let todoListId2: string;
let startState: Array<TodoListDomainType>
beforeEach(() => {
    todoListId1 = v1();
    todoListId2 = v1();
    startState = [
        {id: todoListId1, title: "What to learn", filter: "all", entityStatus:'idle', addedDate: '', order: 0},
        {id: todoListId2, title: "What to buy", filter: "all", entityStatus:'idle', addedDate: '', order: 0}
    ]
})

test('todoList should be removed', () => {


    const endState = todoListsReducer(startState, removeTodoListAC(todoListId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todoListId2);
});

test('todoList should be added', () => {

    const todoList: TodoListType = {
        id: 'any', title: 'New Todolist', addedDate: '', order: 0
    }


    const endState = todoListsReducer(startState, addTodoListAC(todoList))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(todoList.title);
    expect(endState[0].filter).toBe('all');
});

test('todoList should change its name', () => {

    let newTodoListTitle = "New TodoList";


    const endState = todoListsReducer(startState, changeTodoListTitleAC(todoListId2, newTodoListTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodoListTitle);
});


test('Filter of todoList should be changed', () => {

    let newFilter: FilterValueType = "completed";


    const endState = todoListsReducer(startState, changeTodoListFilterAC(todoListId2, newFilter));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

test('TodoListsList should be set to the state', () => {

    const action = setTodoListsAC(startState)


    const endState = todoListsReducer([], action);

    expect(endState.length).toBe(2);
});


test('Correct entity status of todoList should be changed', () => {

    let newStatus: StatusType = 'loading';


    const endState = todoListsReducer(startState, changeTodoListEntityStatus(todoListId2,newStatus ));

    expect(endState[0].entityStatus).toBe('idle');
    expect(endState[1].entityStatus).toBe(newStatus);
});










