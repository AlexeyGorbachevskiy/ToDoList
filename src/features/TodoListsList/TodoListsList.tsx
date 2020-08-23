import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../state/store";
import {
    addTodoListThunkCreator,
    changeTodoListFilterAC,
    changeTodoListTitleThunkCreator,
    fetchTodoListsThunkCreator,
    FilterValueType,
    removeTodoListThunkCreator,
    TodoListDomainType
} from "../../state/todolistsReducer";
import {addTaskThunkCreator, removeTaskThunkCreator, updateTaskThunkCreator} from "../../state/tasksReducer";
import {TaskStatuses} from "../../api/TodoListsAPI";
import {Grid, Paper} from "@material-ui/core";
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./TodoList/ToDoList";
import {TasksStateType} from "../../app/App";


type TodoListsListPropsType = {}



const TodoLists: React.FC<TodoListsListPropsType> = (props) => {

    const todoLists = useSelector<AppRootType, Array<TodoListDomainType>>(state => state.todoLists);
    const tasks = useSelector<AppRootType, TasksStateType>(state => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTodoListsThunkCreator());
    }, [])


    const changeFilter = useCallback((value: FilterValueType, id: string) => {
        dispatch(changeTodoListFilterAC(id, value))
    }, [dispatch]);
    const removeTodoList = useCallback((id: string) => {
        let action = removeTodoListThunkCreator(id)
        dispatch(action);
    }, [dispatch]);
    const addTodoList = useCallback((todoListTitle: string) => {
        let action = addTodoListThunkCreator(todoListTitle);
        dispatch(action);
    }, [dispatch]);
    const changeTodoListTitle = useCallback((id: string, title: string) => {
        dispatch(changeTodoListTitleThunkCreator(id, title))
    }, [dispatch]);

    const addTask = useCallback((title: string, todoListId: string) => {
        dispatch(addTaskThunkCreator(todoListId, title))
    }, [dispatch]);
    const removeTask = useCallback((taskId: string, todoListId: string) => {
        dispatch(removeTaskThunkCreator(todoListId, taskId))
    }, [dispatch]);

    const changeTaskTitle = useCallback((id: string, title: string, todoListId: string) => {
        dispatch(updateTaskThunkCreator(id, {title: title}, todoListId))
    }, [dispatch]);

    const changeTaskStatus = useCallback((id: string, status: TaskStatuses, todoListId: string) => {
        dispatch(updateTaskThunkCreator(id, {status: status}, todoListId))
    }, [dispatch]);

    return (
        <>
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
        </>
    )
}

export default TodoLists;