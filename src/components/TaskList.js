import React from "react";

// import { tasks } from "../data";

function TaskList(props) {
  return (
    <div>
      {props.myTasks.map((task) => (
        <ul>
          <li>Task: {task.title}</li>
          <li>Status: {task.status}</li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
