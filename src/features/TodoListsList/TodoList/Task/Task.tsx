import React, {ChangeEvent, useCallback} from "react";
import obj from "../ToDoList.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "../../../../components/EditableSpan/EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskStatuses, TaskType} from "../../../../api/todoListsAPI";


type TaskPropsType = {
    todoListId: string
    removeTask: (id: string, todoListId: string) => void
    changeTaskTitle: (id: string, title: string, todoListId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todoListId: string) => void
    task: TaskType
    filter: 'all' | 'completed' | 'active'
}
export const Task = React.memo((props: TaskPropsType) => {


    const onRemoveTaskHandler = useCallback(() => props.removeTask(props.task.id, props.todoListId),
        [props.removeTask, props.task.id, props.todoListId]);
    const onChangeCheckBoxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(props.task.id, e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New, props.todoListId),
        [props.changeTaskStatus, props.task.id, props.todoListId])

    const onChangeTitle = useCallback((title: string) => {
        props.changeTaskTitle(props.task.id, title, props.todoListId)
    }, [props.changeTaskTitle, props.task.id, props.todoListId])

    return (
        <div className={props.filter !== 'completed' && props.task.status===TaskStatuses.Completed ? obj.is_done : ''}>
            <Checkbox
                checked={props.task.status===TaskStatuses.Completed}
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