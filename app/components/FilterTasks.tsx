import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions";

const FilterTasks: React.FC = () => {
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterTasks(status));
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterTasks;
