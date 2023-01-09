import React from "react";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};
type ToDoListType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: ()=> void
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
        {props.tasks.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={() => props.removeTask()}>X</button>
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>
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
