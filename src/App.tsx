import React, {useCallback, useEffect} from 'react';
import './App.css';
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TaskType} from "./api/todoListsAPI";
import TodoLists from "./features/TodoListsList/TodoListsList";
import {ErrorSnackBar} from "./components/ErrorSnackBar/ErrorSnackBar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";
import {initializeAppThunkCreator, StatusType} from "./state/appReducer";
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "./features/Login/Login";
import {logoutThunkCreator} from "./state/authReducer";


export type TasksStateType = {
    [key: string]: Array<TaskType>
}


type AppPropsType = {
    demo?: boolean
}

const App = React.memo(({demo = false, ...props}: AppPropsType) => {

    const status = useSelector<AppRootType, StatusType>(state => state.app.status);
    const initialized = useSelector<AppRootType, boolean>(state => state.app.isInitialized);
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootType, boolean>(state => state.login.isLoggedIn);

    useEffect(() => {
        dispatch(initializeAppThunkCreator())
    }, [])


    const logoutHandler = useCallback(() => {
        dispatch(logoutThunkCreator())
    }, []);

    if (!initialized) {
        return (
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress/>
            </div>
        )
    }


    return (
        <BrowserRouter>
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
                        {isLoggedIn && <Button onClick={logoutHandler} color="inherit">Log out</Button>}
                    </Toolbar>
                    {
                        status === 'loading' && <LinearProgress/>
                    }
                </AppBar>
                <Container fixed>
                    <Route exact path={'/'} render={() => <TodoLists demo={demo}/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                    {/*for Storybook*/}
                    {demo && <Route path={'/'} render={() => <TodoLists demo={demo}/>}/>}
                </Container>
            </div>
        </BrowserRouter>
    );
})


export default App;
