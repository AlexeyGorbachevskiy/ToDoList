import React from 'react';
import './App.css';
import {AppBar, Button, Container, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TaskType} from "./api/todoListsAPI";
import TodoLists from "./features/TodoListsList/TodoListsList";
import {ErrorSnackBar} from "./components/ErrorSnackBar/ErrorSnackBar";
import {useSelector} from "react-redux";
import {AppRootType} from "./state/store";
import {StatusType} from "./state/appReducer";


export type TasksStateType = {
    [key: string]: Array<TaskType>
}


type AppPropsType = {
    demo?: boolean
}

const App = React.memo(({demo = false, ...props}: AppPropsType) => {

    const status = useSelector<AppRootType, StatusType>(state => state.app.status);


    return (
        <div className="App">
            <ErrorSnackBar/>
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
                {
                    status === 'loading' && <LinearProgress/>
                }
            </AppBar>
            <Container fixed>
                <TodoLists demo={demo}/>
            </Container>
        </div>
    );
})


export default App;
