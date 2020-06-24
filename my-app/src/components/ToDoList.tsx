import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from '../App';
import './ToDoList.css';


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
        props.addTask(newTaskTitle, props.id);
    }
    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
    const onRemoveTodoListClickHandler = () => props.removeTodoList(props.id);

    return (
        <div>
            <h3>{props.title}
                <button onClick={onRemoveTodoListClickHandler}>x</button>
            </h3>
            <div>
                <input className={error ? 'error' : ''} onKeyPress={onEnterPressHandler} onChange={onChangeInputHandler}
                       value={newTaskTitle}/>
                <button className={'add_btn'} onClick={onClickAddHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map((t: TaskType) => {
                        const onRemoveTaskHandler = () => props.removeTask(t.id, props.id);
                        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)

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