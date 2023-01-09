import React from "react";
import "./App.css";
import { TasksType, ToDoList } from "./ToDoList";

function App() {
  const tasks: Array<TasksType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ];

  function removeTask(id: number) {
    let resultTasks = tasks.filter(() => {
      return true;
    });
    console.log(resultTasks);
  }

  return (
    <div className="App">
      <ToDoList title="What to learn?" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
