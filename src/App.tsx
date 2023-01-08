import React from "react";
import "./App.css";
import { TasksType, ToDoList } from "./ToDoList";

function App() {
  let tasks1: Array<TasksType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  let tasks2: Array<TasksType> = [
    { id: 1, title: "USD", isDone: true },
    { id: 2, title: "RUB", isDone: false },
    { id: 3, title: "EURO", isDone: false },
  ];

  return (
    <div className="App">
      <ToDoList title="What to learn?" tasks={tasks1} />
      <ToDoList title="React to learn!" tasks={tasks2} />
    </div>
  );
}

export default App;
