import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    removeTodoListAC,
    tasksReducer
} from './tasksReducer';

import {addTodoListAC} from "./todolistsReducer";
import {TasksStateType} from "../AppWithRedux";




let startState: TasksStateType
beforeEach(() => {
        startState = {
            "todoListId1": [
                {id: "1", title: "CSS", isDone: false},
                {id: "2", title: "JS", isDone: true},
                {id: "3", title: "React", isDone: false}
            ],
            "todoListId2": [
                {id: "1", title: "bread", isDone: false},
                {id: "2", title: "milk", isDone: true},
                {id: "3", title: "tea", isDone: false}
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

    const action = addTaskAC("juice", "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todoListId1"].length).toBe(3);
    expect(endState["todoListId2"].length).toBe(4);
    expect(endState["todoListId2"][0].id).toBeDefined();
    expect(endState["todoListId2"][0].title).toBe('juice');
    expect(endState["todoListId2"][0].isDone).toBe(false);
})


test('Status of specified task should be changed', () => {

    const action = changeTaskStatusAC("2", false, "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState['todoListId1'][1].isDone).toBeTruthy();
    expect(endState['todoListId2'][1].isDone).toBeFalsy();


});

test('Title of specified task should be changed', () => {


    const action = changeTaskTitleAC("2", 'water', "todoListId2");

    const endState = tasksReducer(startState, action)

    expect(endState['todoListId1'][1].title).toBe('JS');
    expect(endState['todoListId2'][1].title).toBe('water');

});


test('New array should be added when new todolist is added', () => {


    const action = addTodoListAC("no matter");

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

