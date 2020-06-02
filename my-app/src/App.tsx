import React, {useState} from 'react';
import './App.css';
import {Todolist} from './ToDoList';

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type FilterValueType = 'all' | 'completed' | 'active';


function App() {
    let initTasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ];

    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTask(id: number) {
        let filteredTasks = tasks.filter((taskElement) => {
            return id !== taskElement.id
        });
        setTasks(filteredTasks);

    }

    let tasksForToDoList = tasks;

    if (filter === 'active') {
        tasksForToDoList = tasks.filter((t) => {
            return t.isDone === false
        });
    }
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter((t) => {
            return t.isDone === true
        });
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForToDoList} removeTask={removeTask}
                      changeFilter={changeFilter}></Todolist>
        </div>
    );
}

export default App;
