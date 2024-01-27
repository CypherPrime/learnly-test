"use client";
import React from "react";
import TasksList from "./components/TasksList";
import NewTask from "./components/NewTask";
import FilterTasks from "./components/FilterTasks";
import { Provider } from "react-redux";
import store from "./redux/store";

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <NewTask />
      <div className="card p-10">
        <FilterTasks />
        <TasksList />
      </div>
    </Provider>
  );
};

export default Home;
