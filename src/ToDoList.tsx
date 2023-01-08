import React from "react";

type ToDoListPropsType = {
  shapka?: string;
  tasks: TasksType[];
};

type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const ToDoList = (props: ToDoListPropsType) => {
  return (
    <div>
      <h3>{props.shapka}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((el: TasksType) => {
          return (
            <li>
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
};
