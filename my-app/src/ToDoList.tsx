import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from './App';


export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (newTaskTitle: string) => void
}

export function Todolist(props: PropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('');
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value);
    const onClickSendBtnHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('');
    }
    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onKeyPress={onEnterPressHandler} onChange={onChangeInputHandler} value={newTaskTitle}/>
                <button onClick={onClickSendBtnHandler}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => props.removeTask(t.id)
                        return (
                            <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title} </span>
                                <button onClick={onRemoveTaskHandler}>x
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}