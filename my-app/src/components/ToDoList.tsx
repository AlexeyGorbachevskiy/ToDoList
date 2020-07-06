import React, {ChangeEvent} from 'react';
import {FilterValueType, TaskType} from '../App';
import obj from './ToDoList.module.css';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


export type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListId: string) => void
    changeFilter: (value: FilterValueType, id: string) => void
    addTask: (newTaskTitle: string, todoListId: string) => void
    changeStatus: (id: string, isDone: boolean, todoListId: string) => void
    filter: 'all' | 'completed' | 'active'
    removeTodoList: (todoListId: string) => void
    changeTaskTitle: (todoListId: string, taskId: string, title: string) => void
    changeTodoListTitle: (todoListId: string, title: string) => void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
    const onRemoveTodoListClickHandler = () => props.removeTodoList(props.id);

    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const onChangeTodoListTitle = (title: string) => {
        props.changeTodoListTitle(props.id, title)
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} onChangeTitle={onChangeTodoListTitle}/>
                {/*<button onClick={onRemoveTodoListClickHandler}>x</button>*/}
                <IconButton onClick={onRemoveTodoListClickHandler} aria-label="delete">
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    props.tasks.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => props.removeTask(t.id, props.id);
                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)
                        const onChangeTitle = (title: string) => {
                            props.changeTaskTitle(props.id, t.id, title);
                        }
                        return (
                            <div className={props.filter !== 'completed' && t.isDone ? obj.is_done : ''} key={t.id}>
                                {/*<input onChange={onChangeCheckBoxHandler}*/}
                                {/*       type='checkbox' checked={t.isDone}/>*/}
                                <Checkbox
                                    checked={t.isDone}
                                    onChange={onChangeCheckBoxHandler}
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />
                                {/*<span>{t.title} </span>*/}
                                <EditableSpan title={t.title} onChangeTitle={onChangeTitle}/>
                                {/*<button onClick={onRemoveTaskHandler}>x</button>*/}
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