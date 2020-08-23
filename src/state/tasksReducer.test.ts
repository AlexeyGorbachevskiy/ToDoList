import {
    addTaskAC,
    removeTaskAC,
    removeTodoListAC,
    setTasksAC,
    tasksReducer,
    updateTaskAC
} from './tasksReducer';

import {addTodoListAC, setTodoListsAC} from "./todolistsReducer";
import {TasksStateType} from "../app/App";
import {TaskPriorities, TaskStatuses} from "../api/TodoListsAPI";


let startState: TasksStateType
beforeEach(() => {
        startState = {
            "todoListId1": [
                {
                    id: "1", title: "CSS", status: TaskStatuses.New,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId1',
                    order: 0,
                    addedDate: '',
                },
                {
                    id: "2", title: "JS", status: TaskStatuses.Completed,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId1',
                    order: 0,
                    addedDate: '',
                },
                {
                    id: "3", title: "React", status: TaskStatuses.New,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId1',
                    order: 0,
                    addedDate: '',
                }
            ],
            "todoListId2": [
                {
                    id: "1", title: "bread", status: TaskStatuses.New,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId2',
                    order: 0,
                    addedDate: '',
                },
                {
                    id: "2", title: "milk", status: TaskStatuses.Completed,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId2',
                    order: 0,
                    addedDate: '',
                },
                {
                    id: "3", title: "tea", status: TaskStatuses.New,
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: 'todoListId2',
                    order: 0,
                    addedDate: '',
                }
            ]
        };
    }
)


test('Task should be deleted from correct array', () => {


    const action = removeTaskAC("2", "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todoListId1"].length).toBe(3);
    expect(endState["todoListId2"].length).toBe(2);
    expect(endState["todoListId2"].every(t => t.id != "2")).toBeTruthy();
});


test('Task should be added to correct array', () => {

    const action = addTaskAC({
        todoListId: 'todoListId2',
        title: 'juice',
        status: TaskStatuses.New,
        addedDate: '',
        deadline: '',
        description: '',
        order: 0,
        priority: 0,
        startDate: '',
        id: 'id exists',
    });

    const endState = tasksReducer(startState, action)

    expect(endState["todoListId1"].length).toBe(3);
    expect(endState["todoListId2"].length).toBe(4);
    expect(endState["todoListId2"][0].id).toBeDefined();
    expect(endState["todoListId2"][0].title).toBe('juice');
    expect(endState["todoListId2"][0].status).toBe(TaskStatuses.New);
})


test('Status of specified task should be changed', () => {

    const action = updateTaskAC("2", {status: TaskStatuses.New}, "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState['todoListId1'][1].status).toBe(TaskStatuses.Completed);
    expect(endState['todoListId2'][1].status).toBe(TaskStatuses.New);


});

test('Title of specified task should be changed', () => {


    const action = updateTaskAC("2", {title: 'water'}, "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState['todoListId1'][1].title).toBe('JS');
    expect(endState['todoListId2'][1].title).toBe('water');

});


test('New array should be added when new todolist is added', () => {


    const action = addTodoListAC({
        id: 'any', title: 'no matter', addedDate: '', order: 0
    });

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todoListId1" && k != "todoListId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});


test('property with todolistId should be deleted', () => {


    const action = removeTodoListAC("todoListId2");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todoListId2"]).not.toBeDefined();
});


test('empty arrays should be added when we set todoLists', () => {


    const action = setTodoListsAC([
        {id: '1', title: 'title 1', order: 0, addedDate: ''},
        {id: '2', title: 'title 1', order: 0, addedDate: ''},
    ])

    const endState = tasksReducer({}, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(2);
    expect(endState["1"]).toStrictEqual([]);
    expect(endState["2"]).toStrictEqual([]);
});

test('tasks should be added for todoList', () => {


    const action = setTasksAC(startState['todoListId1'], 'todoListId1')

    const endState = tasksReducer({'todoListId2': [], 'todoListId1': []}, action)


    expect(endState['todoListId1'].length).toBe(3);
    expect(endState['todoListId2'].length).toBe(0);
});

