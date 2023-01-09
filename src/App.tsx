import React, { useState } from "react";
import "./App.css";
import { TasksType, ToDoList } from "./ToDoList";

export type FilterValuesType = 'all'| 'completed' | 'active'

function App() {
  let [tasks, setTasks] = useState<Array<TasksType>>([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>("active");

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }



  let tasksForToDoList = tasks;
  if(filter === "completed") {
    tasksForToDoList = tasks.filter(t => t.isDone);
  }
  if(filter === "active") {
    tasksForToDoList = tasks.filter(t => !t.isDone);
  }
  return (
    <div className="App">
      <ToDoList title="What to learn?" tasks={tasksForToDoList} removeTask={removeTask} />
    </div>
  );
}

export default App;
