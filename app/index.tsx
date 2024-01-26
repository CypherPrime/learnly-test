import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import FilterTasks from "../components/FilterTasks";

const Home: React.FC = () => {
  return (
    <div>
      <TaskForm />
      <FilterTasks />
      <TaskList />
    </div>
  );
};

export default Home;
