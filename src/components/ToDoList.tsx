import React, {ChangeEvent} from 'react';
import obj from './ToDoList.module.css';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../state/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../state/store";
import {FilterValueType, TasksStateType, TaskType} from "../AppWithRedux";


export type PropsType = {
    id: string
    title: string
    changeFilter: (value: FilterValueType, id: string) => void
    filter: 'all' | 'completed' | 'active'
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle: (todoListId: string, title: string) => void
}

export function Todolist(props: PropsType) {


    const dispatch = useDispatch();
    const tasks = useSelector<AppRootType, Array<TaskType>>(state => state.tasks[props.id])


    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
    const onRemoveTodoListClickHandler = () => props.removeTodoList(props.id);
    const onChangeTodoListTitle = (title: string) => props.changeTodoListTitle(props.id, title)

    let tasksForToDoList = tasks;

    if (props.filter === 'active') {
        tasksForToDoList = tasksForToDoList.filter((t) => {
            return !t.isDone
        });
    }
    if (props.filter === 'completed') {
        tasksForToDoList = tasksForToDoList.filter((t) => {
            return t.isDone
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
            <AddItemForm addItem={(title)=>dispatch(addTaskAC(title, props.id))}/>
            <div>
                {
                    tasksForToDoList.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => dispatch(removeTaskAC(t.id, props.id))
                        const onChangeCheckBoxHandler =
                            (e: ChangeEvent<HTMLInputElement>) => dispatch(changeTaskStatusAC(t.id, e.currentTarget.checked, props.id))
                        const onChangeTitle = (title: string) => {
                            dispatch(changeTaskTitleAC(t.id, title,props.id))
                        }
                        return (
                            <div className={props.filter !== 'completed' && t.isDone ? obj.is_done : ''} key={t.id}>
                                <Checkbox
                                    checked={t.isDone}
                                    onChange={onChangeCheckBoxHandler}
                                    value="checkedA"
                                    inputProps={{'aria-label': 'Checkbox A'}}
                                />
                                <EditableSpan title={t.title} onChangeTitle={onChangeTitle}/>
                                <IconButton onClick={onRemoveTaskHandler} aria-label="delete">
                                    <Delete/>
                                </IconButton>
                            </div>
                        )
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
}