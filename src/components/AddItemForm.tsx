import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import obj from "./ToDoList.module.css";
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";


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
            {/*<input className={error ? obj.error : ''} onKeyPress={onEnterPressHandler} onChange={onChangeInputHandler}*/}
            {/*       value={newTaskTitle}/>*/}
            <TextField id="standard-basic"
                       label="Type text"
                       error={!!error}
                       helperText={error}
                       onKeyPress={onEnterPressHandler}
                       onChange={onChangeInputHandler}
                       value={newTaskTitle}
            />
            {/*<button className={obj.add_btn} onClick={onClickAddHandler}>+</button>*/}
            <IconButton
                color={"primary"}
                className={obj.add_btn}
                onClick={onClickAddHandler}>
                <ControlPoint/>
            </IconButton>
            {/*{error && <div className={obj.error_message}>{error}</div>}*/}
        </div>
    )
}

export default AddItemForm;