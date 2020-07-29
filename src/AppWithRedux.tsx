import React from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
} from "./state/todolistsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";

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


function AppWithRedux() {

    const dispatch=useDispatch();
    const todoLists=useSelector<AppRootType,Array<TodoListsType>>(state=>state.todoLists)




    function changeFilter(value: FilterValueType, id: string) {
        dispatch(changeTodoListFilterAC(id,value))
    }

    function removeTodoList(id: string) {
        let action=removeTodoListAC(id)
        dispatch(action);
    }

    function addTodoList(todoListTitle: string) {
        let action=addTodoListAC(todoListTitle)
        dispatch(action);
    }


    function changeTodoListTitle(id: string, title: string) {
        dispatch(changeTodoListTitleAC(id,title))
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

                        return (
                            <Grid item>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              title={tl.title}
                                              filter={tl.filter}
                                              changeFilter={changeFilter}
                                              removeTodoList={removeTodoList}
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

export default AppWithRedux;
