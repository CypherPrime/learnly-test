import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions";
import Image from "next/image";

const FilterTasks: React.FC = () => {
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterTasks(status));
  };

  return (
    <div className="card-actions justify-end">
      <select
        className="select select-ghost h-10"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <Image
        alt="filter"
        src={require("../asserts/filt.png").default}
        onClick={handleFilter}
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
    </div>
  );
};

export default FilterTasks;
