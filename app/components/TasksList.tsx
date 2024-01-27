import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import SingleTask from "./SingleTask";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => {
    const { filteredTasks, tasks } = state;
    return filteredTasks.length > 0 ? filteredTasks : tasks;
  });

  return (
    <div>
      <h2 className="card-title text-center w-100">Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <SingleTask key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
