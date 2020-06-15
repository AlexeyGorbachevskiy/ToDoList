import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/ToDoList';
import {v1} from "uuid";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterValueType = 'all' | 'completed' | 'active';


function App() {
    let initTasks: Array<TaskType> = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ];

    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
    let [filter, setFilter] = useState<FilterValueType>('all');

    function removeTask(id: string) {
        let filteredTasks = tasks.filter((taskElement) => {
            return id !== taskElement.id
        });
        setTasks(filteredTasks);
    }


    function addTask(newTaskTitle: string) {
        const newTask = {id: v1(), title: newTaskTitle, isDone: true};
        let newTasks = [newTask, ...tasks];
        newTaskTitle && setTasks(newTasks);
    }

    function changeStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks]);
        }

    }


    let tasksForToDoList = tasks;

    if (filter === 'active') {
        tasksForToDoList = tasks.filter((t) => {
            return !t.isDone
        });
    }
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter((t) => {
            return t.isDone
        });
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForToDoList} removeTask={removeTask}
                      filter={filter} changeStatus={changeStatus} changeFilter={changeFilter} addTask={addTask}/>
        </div>
    );
}

export default App;
