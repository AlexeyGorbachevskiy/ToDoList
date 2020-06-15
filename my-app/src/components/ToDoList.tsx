import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from '../App';
import './ToDoList.css';


export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (newTaskTitle: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: 'all' | 'completed' | 'active'
}

export function Todolist(props: PropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('');
    let [error, setError] = useState<null | string>(null);

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickAddHandler();
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setNewTaskTitle(e.currentTarget.value);
    }
    const onClickAddHandler = () => {
        setNewTaskTitle('');
        if (newTaskTitle.trim() === '') {
            setError('Title is required');
            return
        }
        props.addTask(newTaskTitle);
    }
    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input className={error ? 'error' : ''} onKeyPress={onEnterPressHandler} onChange={onChangeInputHandler}
                       value={newTaskTitle}/>
                <button className={'add_btn'} onClick={onClickAddHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => props.removeTask(t.id);
                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked)

                        return (
                            <li className={props.filter !== 'completed' && t.isDone ? 'is_done' : ''} key={t.id}>
                                <input onChange={onChangeCheckBoxHandler}
                                       type='checkbox' checked={t.isDone}/>
                                <span>{t.title} </span>
                                <button onClick={onRemoveTaskHandler}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : 'filter_btn'}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? 'active-filter' : 'filter_btn'}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? 'active-filter' : 'filter_btn'}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
}