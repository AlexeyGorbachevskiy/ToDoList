import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from '../App';
import obj from './ToDoList.module.css';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";


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
                <button onClick={onRemoveTodoListClickHandler}>x</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.tasks.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => props.removeTask(t.id, props.id);
                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)
                        const onChangeTitle = (title: string) => {
                            props.changeTaskTitle(props.id, t.id, title)
                        }
                        return (
                            <li className={props.filter !== 'completed' && t.isDone ? obj.is_done : ''} key={t.id}>
                                <input onChange={onChangeCheckBoxHandler}
                                       type='checkbox' checked={t.isDone}/>
                                {/*<span>{t.title} </span>*/}
                                <EditableSpan title={t.title} onChangeTitle={onChangeTitle}/>
                                <button onClick={onRemoveTaskHandler}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? obj.active_filter : obj.filter_btn}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? obj.active_filter : obj.filter_btn}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? obj.active_filter : obj.filter_btn}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
}