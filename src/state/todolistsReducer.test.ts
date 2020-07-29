import {v1} from 'uuid';
import {FilterValueType, TasksStateType, TodoListsType} from "../App";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
    todoListsReducer
} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";



let todoListId1:string;
let todoListId2:string;
let startState: Array<TodoListsType>
beforeEach(()=>{
    todoListId1 = v1();
    todoListId2 = v1();
    startState = [
        {id: todoListId1, title: "What to learn", filter: "all"},
        {id: todoListId2, title: "What to buy", filter: "all"}
    ]})

test('todoList should be removed', () => {


    const endState = todoListsReducer(startState, removeTodoListAC(todoListId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todoListId2);
});

test('todoList should be added', () => {


    let newTodolistTitle = "New Todolist";

    const endState = todoListsReducer(startState, addTodoListAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
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









