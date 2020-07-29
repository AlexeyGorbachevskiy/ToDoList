import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
    todoListsReducer
} from "./state/todolistsReducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasksReducer";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValueType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValueType = 'all' | 'completed' | 'active';


function AppWithReducers() {

    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, dispatchToToDoList] = useReducer(todoListsReducer, [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasksObj, dispatchToTasks] = useReducer(tasksReducer,
        {
            [todoListId1]: [
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Redux", isDone: false},
            ],
            [todoListId2]: [
                {id: v1(), title: "New", isDone: false},
                {id: v1(), title: "Yahooo", isDone: false},
                {id: v1(), title: "EEEEE", isDone: true},
                {id: v1(), title: "Veeee", isDone: false},
            ],
        }
    );


    function removeTask(id: string, todoListId: string) {
        dispatchToTasks(removeTaskAC(id, todoListId))
    }

    function addTask(newTaskTitle: string, todoListId: string) {
        dispatchToTasks(addTaskAC(newTaskTitle, todoListId))
    }

    function changeStatus(id: string, isDone: boolean, todoListId: string) {
        dispatchToTasks(changeTaskStatusAC(id, isDone, todoListId))
    }

    function changeTaskTitle(todoListId: string, id: string, title: string) {
        dispatchToTasks(changeTaskTitleAC(todoListId, id, title))
    }


    function changeFilter(value: FilterValueType, id: string) {
        dispatchToToDoList(changeTodoListFilterAC(id,value))
    }

    function removeTodoList(id: string) {
        let action=removeTodoListAC(id)
        dispatchToToDoList(action);
        dispatchToTasks(action);
    }

    function addTodoList(todoListTitle: string) {
        let action=addTodoListAC(todoListTitle)
        dispatchToToDoList(action);
        dispatchToTasks(action);
    }


    function changeTodoListTitle(id: string, title: string) {
        dispatchToToDoList(changeTodoListTitleAC(id,title))
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '10px'}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoLists.map(tl => {
                        let tasksForToDoList = tasksObj[tl.id];

                        if (tl.filter === 'active') {
                            tasksForToDoList = tasksForToDoList.filter((t) => {
                                return !t.isDone
                            });
                        }
                        if (tl.filter === 'completed') {
                            tasksForToDoList = tasksForToDoList.filter((t) => {
                                return t.isDone
                            });
                        }
                        return (
                            <Grid item>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              title={tl.title}
                                              tasks={tasksForToDoList}
                                              removeTask={removeTask}
                                              filter={tl.filter}
                                              changeStatus={changeStatus}
                                              changeFilter={changeFilter}
                                              addTask={addTask}
                                              removeTodoList={removeTodoList}
                                              changeTaskTitle={changeTaskTitle}
                                              changeTodoListTitle={changeTodoListTitle}
                                    />
                                </Paper>
                            </Grid>

                        )

                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithReducers;
