import React from "react";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};
type ToDoListType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: Function
};

export function ToDoList(props: ToDoListType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li><input type="checkbox" checked={t.isDone} /><span>{t.title}</span>
              <button onClick={() => {props.removeTask(t.id)}}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
