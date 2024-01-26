import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SingleTask from "./SingleTask";

const TasksList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
