import React from "react";
import "./App.css";
import { TasksType, ToDoList } from "./ToDoList";

function App() {
  let tasks1: Array<TasksType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "React", isDone: false },
  ];

  const removeTask =()=> {
    console.log('Hello world')
  }

  return (
    <div className="App">
      <ToDoList title="What to learn?" tasks={tasks1}
      removeTask={removeTask} />
    </div>
  );
}

export default App;
