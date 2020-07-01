import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type TodoListsType = {
    id: string
    title: string
    filter: FilterValueType
}
type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValueType = 'all' | 'completed' | 'active';


function App() {

    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasksObj, setTasks] = useState<TasksStateType>(
        {
            [todoListId1]: [
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Redux", isDone: false},
            ],
            [todoListId2]: [
                {id: v1(), title: "New", isDone: false},
                {id: v1(), title: "Yahooo", isDone: false},
                {id: v1(), title: "EEEEE", isDone: true},
                {id: v1(), title: "Veeee", isDone: false},
            ],
        }
    );


    function removeTask(id: string, todoListId: string) {
        let tasks = tasksObj[todoListId];
        let filteredTasks = tasks.filter(taskElement => id !== taskElement.id);
        tasksObj[todoListId] = filteredTasks;
        setTasks({...tasksObj});
    }


    function addTask(newTaskTitle: string, todoListId: string) {
        const newTask = {id: v1(), title: newTaskTitle, isDone: true};
        let newTasks = [newTask, ...tasksObj[todoListId]];
        tasksObj[todoListId] = newTasks;
        setTasks({...tasksObj});
    }

    function changeStatus(id: string, isDone: boolean, todoListId: string) {
        let task = tasksObj[todoListId].find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj});
        }

    }


    function changeFilter(value: FilterValueType, id: string) {
        let todoList = todoLists.find(t => t.id === id);
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists])
        }
    }

    const removeTodoList = (id: string) => {
        let todoListsRest = todoLists.filter(t => t.id !== id);
        setTodoLists([...todoListsRest]);
        delete tasksObj[id];
        setTasks({...tasksObj});

    }

    const addTodoList = (todoListTitle: string) => {
        let newTodoListId = v1();
        setTodoLists([{id: newTodoListId, title: todoListTitle, filter: 'all'}, ...todoLists]);
        setTasks({...tasksObj, [newTodoListId]: []})
    }


    const changeTaskTitle = (todoListId: string, id: string, title: string) => {
        let task = tasksObj[todoListId].find((t) => t.id === id);
        if (task) {
            task.title = title;
            setTasks({...tasksObj})
        }
    }

    const changeTodoListTitle = (id: string, title: string) => {
        let todoList = todoLists.find(tl => tl.id === id);
        if (todoList) {
            todoList.title = title;
            setTodoLists([...todoLists]);
        }

    }

    return (
        <div className="App">

            <AddItemForm addItem={addTodoList}/>

            {todoLists.map(tl => {
                let tasksForToDoList = tasksObj[tl.id];

                if (tl.filter === 'active') {
                    tasksForToDoList = tasksForToDoList.filter((t) => {
                        return !t.isDone
                    });
                }
                if (tl.filter === 'completed') {
                    tasksForToDoList = tasksForToDoList.filter((t) => {
                        return t.isDone
                    });
                }
                return (
                    <Todolist key={tl.id}
                              id={tl.id}
                              title={tl.title}
                              tasks={tasksForToDoList}
                              removeTask={removeTask}
                              filter={tl.filter}
                              changeStatus={changeStatus}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              removeTodoList={removeTodoList}
                              changeTaskTitle={changeTaskTitle}
                              changeTodoListTitle={changeTodoListTitle}
                    />

                )

            })}


        </div>
    );
}

export default App;
