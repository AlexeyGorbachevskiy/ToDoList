import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todoListsAPI} from "../api/todoListsAPI";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todoListsAPI.getTodoLists()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')


    const onCreateTodoList = () => {
        todoListsAPI.createTodoList(title)
            .then((res) => {
                setState(res.data);
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'title'} value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <button onClick={onCreateTodoList}>
                Create TodoList
            </button>
        </div>
    </div>
}


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<string>('')


    const onDeleteTodoList = () => {
        todoListsAPI.deleteTodoList(todoListId)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <button onClick={onDeleteTodoList}>
                Delete TodoList
            </button>
        </div>
    </div>
}


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todoListId, setTodoListId] = useState<string>('')


    const onUpdateTitle = () => {
        todoListsAPI.updateTodolist(todoListId, title)
            .then((res) => {
                setState(res.data)
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <input placeholder={'task Id'} value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <button onClick={onUpdateTitle}>
                Update TodoList title
            </button>
        </div>
    </div>
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<string>('')

    const onGetTasks = () => {
        todoListsAPI.getTasks(todoListId)
            .then((res) => {
                setState(res.data);
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>

            <button onClick={onGetTasks}>
                Get Tasks
            </button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todoListId, setTodoListId] = useState<string>('')


    const onCreateTask = () => {
        todoListsAPI.createTask(todoListId, title)
            .then((res) => {
                setState(res.data);
            })

    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <input placeholder={'task title'} value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <button onClick={onCreateTask}>
                Create Task
            </button>
        </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todoListId, setTodoListId] = useState<string>('')

    const onDeleteTask = () => {
        todoListsAPI.deleteTask(todoListId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <input placeholder={'task Id'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={onDeleteTask}>
                Delete Task
            </button>
        </div>
    </div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todoListId, setTodoListId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)


    const onUpdateTask = () => {
        todoListsAPI.updateTask(todoListId, taskId,
            {
                title: title,
                description: description,
                status: status,
                priority: priority,
                startDate: '',
                deadline: '',
            })
            .then((res) => {
                setState(res.data)
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolist Id'} value={todoListId} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }}/>
            <input placeholder={'task Id'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={'title'} value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <input placeholder={'description'} value={description} onChange={(e) => {
                setDescription(e.currentTarget.value)
            }}/>
            <input type={'number'} placeholder={'status'} value={status} onChange={(e) => {
                setStatus(parseInt(e.currentTarget.value))
            }}/>
            <input type={'number'} placeholder={'priority'} value={priority} onChange={(e) => {
                setPriority(parseInt(e.currentTarget.value))
            }}/>
            <br/>
            <button onClick={onUpdateTask}>
                Update Task
            </button>
        </div>
    </div>
}