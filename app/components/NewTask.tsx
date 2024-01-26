import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { Task } from "../redux/types";

const NewTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: Task = {
      title,
      description,
      dueDate,
      status: "pending", // Set the initial status to 'pending'
    };
    dispatch(addTask(task));
    // Clear form fields after submitting
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
