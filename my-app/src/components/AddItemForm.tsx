import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import obj from "./ToDoList.module.css";


type AddItemFormPropsType = {
    addItem: (title: string) => void
}


function AddItemForm(props: AddItemFormPropsType) {

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
        props.addItem(newTaskTitle);
    }

    return (
        <div>
            <input className={error ? obj.error : ''} onKeyPress={onEnterPressHandler} onChange={onChangeInputHandler}
                   value={newTaskTitle}/>
            <button className={obj.add_btn} onClick={onClickAddHandler}>+</button>
            {error && <div className={obj.error_message}>{error}</div>}
        </div>
    )
}

export default AddItemForm;