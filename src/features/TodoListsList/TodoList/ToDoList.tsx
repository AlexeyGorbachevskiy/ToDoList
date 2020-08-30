import React, {useCallback, useEffect} from 'react';
import AddItemForm from "../../../components/AddItemForm/AddItemForm";
import EditableSpan from "../../../components/EditableSpan/EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task/Task";
import {TaskStatuses, TaskType} from "../../../api/todoListsAPI";
import {fetchTodoListsThunkCreator, FilterValueType, TodoListDomainType} from "../../../state/todolistsReducer";
import {useDispatch} from "react-redux";
import {fetchTasksThunkCreator} from "../../../state/tasksReducer";


export type PropsType = {
    todoList: TodoListDomainType
    tasks: Array<TaskType>
    changeFilter: (value: FilterValueType, id: string) => void
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle: (todoListId: string, title: string) => void
    addTask: (title: string, id: string) => void
    removeTask: (id: string, todoListId: string) => void
    changeTaskTitle: (id: string, title: string, todoListId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todoListId: string) => void
    demo?: boolean
}

export const Todolist = React.memo(({demo = false, ...props}: PropsType) => {


    const dispatch = useDispatch();

    useEffect(() => {
        if (demo) {
            return;
        }
        dispatch(fetchTasksThunkCreator(props.todoList.id));

    }, [])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.todoList.id), [props.changeFilter, props.todoList.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.todoList.id), [props.changeFilter, props.todoList.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.todoList.id), [props.changeFilter, props.todoList.id]);
    const onRemoveTodoListClickHandler = useCallback(() => props.removeTodoList(props.todoList.id), [props.removeTodoList, props.todoList.id])
    const onChangeTodoListTitle = useCallback((title: string) => props.changeTodoListTitle(props.todoList.id, title), [props.changeTodoListTitle, props.todoList.id])


    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todoList.id)
    }, [props.addTask, props.todoList.id]);


    let tasksForToDoList = props.tasks;

    if (props.todoList.filter === 'active') {
        tasksForToDoList = props.tasks.filter((t) => {
            return t.status === TaskStatuses.New
        });
    }
    if (props.todoList.filter === 'completed') {
        tasksForToDoList = props.tasks.filter((t) => {
            return t.status === TaskStatuses.Completed
        });
    }


    return (
        <div>
            <h3>
                <EditableSpan title={props.todoList.title} onChangeTitle={onChangeTodoListTitle}/>
                <IconButton onClick={onRemoveTodoListClickHandler} aria-label="delete"
                            disabled={props.todoList.entityStatus === 'loading'}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask} disabled={props.todoList.entityStatus === 'loading'}/>
            <div>
                {
                    tasksForToDoList.map(t => {
                        return <Task key={t.id}
                                     task={t}
                                     changeTaskStatus={props.changeTaskStatus}
                                     changeTaskTitle={props.changeTaskTitle}
                                     filter={props.todoList.filter}
                                     removeTask={props.removeTask}
                                     todoListId={props.todoList.id}
                        />
                    })
                }
            </div>
            <div>
                <Button variant={props.todoList.filter === 'all' ? 'contained' : 'text'}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={"primary"} variant={props.todoList.filter === 'active' ? 'contained' : 'text'}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={"secondary"}
                        variant={props.todoList.filter === 'completed' ? 'contained' : 'text'}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
})


