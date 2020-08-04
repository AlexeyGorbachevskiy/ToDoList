import React, {ChangeEvent, useCallback} from "react";
import obj from "./ToDoList.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "../AppWithRedux";

type TaskPropsType = {
    todoListId: string
    removeTask: (id: string, todoListId: string) => void
    changeTaskTitle: (id: string, title: string, todoListId: string) => void
    changeTaskStatus: (id: string, isChecked: boolean, todoListId: string) => void
    task: TaskType
    filter: 'all' | 'completed' | 'active'
}
export const Task = React.memo((props: TaskPropsType) => {


    const onRemoveTaskHandler = useCallback(() => props.removeTask(props.task.id, props.todoListId),
        [props.removeTask, props.task.id, props.todoListId]);
    const onChangeCheckBoxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todoListId),
        [props.changeTaskStatus, props.task.id, props.todoListId])

    const onChangeTitle = useCallback((title: string) => {
        props.changeTaskTitle(props.task.id, title, props.todoListId)
    }, [props.changeTaskTitle, props.task.id, props.todoListId])

    return (
        <div className={props.filter !== 'completed' && props.task.isDone ? obj.is_done : ''}>
            <Checkbox
                checked={props.task.isDone}
                onChange={onChangeCheckBoxHandler}
                value="checkedA"
                inputProps={{'aria-label': 'Checkbox A'}}
            />
            <EditableSpan title={props.task.title} onChangeTitle={onChangeTitle}/>
            <IconButton onClick={onRemoveTaskHandler} aria-label="delete">
                <Delete/>
            </IconButton>
        </div>
    )
})