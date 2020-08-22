import React, {useCallback, useEffect} from 'react';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";
import {TaskStatuses, TaskType} from "../api/TodoListsAPI";
import {fetchTodoListsThunkCreator, FilterValueType} from "../state/todolistsReducer";
import {useDispatch} from "react-redux";
import {fetchTasksThunkCreator} from "../state/tasksReducer";


export type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValueType, id: string) => void
    filter: FilterValueType
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle: (todoListId: string, title: string) => void
    addTask: (title: string, id: string) => void
    removeTask: (id: string, todoListId: string) => void
    changeTaskTitle: (id: string, title: string, todoListId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todoListId: string) => void
}

export const Todolist = React.memo((props: PropsType) => {

    console.log('todoList')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksThunkCreator(props.id));
    }, [])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id]);
    const onRemoveTodoListClickHandler = useCallback(() => props.removeTodoList(props.id), [props.removeTodoList, props.id])
    const onChangeTodoListTitle = useCallback((title: string) => props.changeTodoListTitle(props.id, title), [props.changeTodoListTitle, props.id])


    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id]);


    let tasksForToDoList = props.tasks;

    if (props.filter === 'active') {
        tasksForToDoList = props.tasks.filter((t) => {
            return t.status === TaskStatuses.New
        });
    }
    if (props.filter === 'completed') {
        tasksForToDoList = props.tasks.filter((t) => {
            return t.status === TaskStatuses.Completed
        });
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} onChangeTitle={onChangeTodoListTitle}/>
                <IconButton onClick={onRemoveTodoListClickHandler} aria-label="delete">
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    tasksForToDoList.map(t => {
                        return <Task key={t.id}
                                     task={t}
                                     changeTaskStatus={props.changeTaskStatus}
                                     changeTaskTitle={props.changeTaskTitle}
                                     filter={props.filter}
                                     removeTask={props.removeTask}
                                     todoListId={props.id}
                        />
                    })
                }
            </div>
            <div>
                <Button variant={props.filter === 'all' ? 'contained' : 'text'}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={"primary"} variant={props.filter === 'active' ? 'contained' : 'text'}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={"secondary"}
                        variant={props.filter === 'completed' ? 'contained' : 'text'}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
})


