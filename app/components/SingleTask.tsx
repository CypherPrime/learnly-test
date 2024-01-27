import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";
import { Task as TaskType } from "../redux/types";

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id as string));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask({ ...task, title: editedTask }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask(task.title);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className="card w-90 bg-gray-300 shadow-xl p-8 m-4">
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="edit title"
            className="input input-ghost w-40 my-1 max-w-xs mx-2 "
            value={editedTask}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h2 className="card-title">{task.title}</h2>
          <span className="card-actions justify-end">
            {task.dueDate}
            {task.status === "completed" ? (
              <div className="badge badge-primary">{task.status}</div>
            ) : (
              <div className="badge badge-secondary">{task.status}</div>
            )}
          </span>
          <p>{task.description}</p>

          <div className="card-actions justify-end">
            <button className="badge badge-outline" onClick={handleEdit}>
              Edit
            </button>
            <button className="badge badge-outline" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
