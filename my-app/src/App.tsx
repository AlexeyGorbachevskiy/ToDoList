import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import {v1} from "uuid";

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
        {id: todoListId1, title: 'What to learn', filter: 'active'},
        {id: todoListId2, title: 'What to buy', filter: 'completed'},
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


    return (
        <div className="App">
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
                    />

                )

            })}


        </div>
    );
}

export default App;
