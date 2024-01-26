import React from "react";
import { Task } from "../redux/types";

interface SingleTaskProps {
  task: Task;
}

const SingleTask: React.FC<SingleTaskProps> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      {/* Add additional UI for editing or marking the task as completed */}
    </div>
  );
};

export default SingleTask;
