import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./ToDoList";

function App() {
  let tasks1 = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Redux", isDone: false}
  ];

  const tasks2=[
    {id:1, title:"Hello world", isDone:true},
    {id:2, title:"I am happy", isDone:false}
  ];


  return (
      <div className="App">
        <Todolist title="What to learn"  tasks={tasks1}></Todolist>
        <Todolist title="Songs"  tasks={tasks2}></Todolist>
      </div>
  );
}

export default App;
