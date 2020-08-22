import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC, FilterValueType,
    removeTodoListAC, TodoListDomainType,
} from "./state/todolistsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasksReducer";
import {TaskStatuses, TaskType} from "./api/TodoListsAPI";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


const App = React.memo(() => {
    console.log('App')

    const todoLists = useSelector<AppRootType, Array<TodoListDomainType>>(state => state.todoLists);
    const tasks = useSelector<AppRootType, TasksStateType>(state => state.tasks);
    const dispatch = useDispatch();


    const changeFilter = useCallback((value: FilterValueType, id: string) => {
        dispatch(changeTodoListFilterAC(id, value))
    }, [dispatch]);
    const removeTodoList = useCallback((id: string) => {
        let action = removeTodoListAC(id)
        dispatch(action);
    }, [dispatch]);
    const addTodoList = useCallback((todoListTitle: string) => {
        let action = addTodoListAC(todoListTitle);
        dispatch(action);
    }, [dispatch]);
    const changeTodoListTitle = useCallback((id: string, title: string) => {
        dispatch(changeTodoListTitleAC(id, title))
    }, [dispatch]);

    const addTask = useCallback((title: string, id: string) => {
        dispatch(addTaskAC(title, id))
    }, [dispatch]);
    const removeTask = useCallback((id: string, todoListId: string) => {
        dispatch(removeTaskAC(id, todoListId))
    }, [dispatch]);
    const changeTaskTitle = useCallback((id: string, title: string, todoListId: string) => {
        dispatch(changeTaskTitleAC(id, title, todoListId))
    }, [dispatch]);
    const changeTaskStatus = useCallback((id: string, status: TaskStatuses, todoListId: string) => {
        dispatch(changeTaskStatusAC(id, status, todoListId))
    }, [dispatch]);

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

                        let tasksForTodoList = tasks[tl.id];
                        return (
                            <Grid key={tl.id} item>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              title={tl.title}
                                              tasks={tasksForTodoList}
                                              filter={tl.filter}
                                              changeFilter={changeFilter}
                                              removeTodoList={removeTodoList}
                                              changeTodoListTitle={changeTodoListTitle}
                                              addTask={addTask}
                                              removeTask={removeTask}
                                              changeTaskTitle={changeTaskTitle}
                                              changeTaskStatus={changeTaskStatus}
                                    />
                                </Paper>
                            </Grid>

                        )

                    })}
                </Grid>
            </Container>
        </div>
    );
})

export default App;
