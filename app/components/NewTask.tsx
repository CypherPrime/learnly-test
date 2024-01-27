import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { Task } from "../redux/types";

const NewTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: Task = {
      title,
      description,
      dueDate,
      status,
      id: Math.floor(Math.random() * 100000),
    };
    dispatch(addTask(task));
    // Clear form fields after submitting
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="p-10">
      <div className="card card-compact w-100 bg-base-100 shadow-xl p-10 bg-gray-500">
        <h2 className="card-title ">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-ghost w-50 max-w-xs mx-2 "
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-ghost w-50 max-w-xs mx-2 "
          />

          <select
            value={status}
            onChange={(e: any) => setStatus(e.target.value)}
            className="select select-ghost h-12 select-sm w-50 max-w-xs"
          >
            <option disabled selected value={""}>
              Status
            </option>
            <option value={"pending"}>pending</option>
            <option value={"completed"}>completed</option>
          </select>

          <input
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input input-ghost w-50 max-w-xs mx-2 "
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
