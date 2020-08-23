import React from 'react';
import './App.css';
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TaskType} from "../api/TodoListsAPI";
import TodoLists from "../features/TodoListsList/TodoListsList";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


const App = React.memo(() => {
    console.log('App')


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
                <TodoLists/>
            </Container>
        </div>
    );
})


export default App;
