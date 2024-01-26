import React from "react";
import { useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions";

const FilterTasks: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilter = (status: string) => {
    dispatch(filterTasks(status));
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <button onClick={() => handleFilter("pending")}>Pending</button>
      <button onClick={() => handleFilter("completed")}>Completed</button>
      <button onClick={() => handleFilter("all")}>All</button>
    </div>
  );
};

export default FilterTasks;
