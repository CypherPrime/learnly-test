import { Task } from "./types";

// Action types
export const ADD_TASK = "ADD_TASK";
export const FILTER_TASKS = "FILTER_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const SWITCH_THEME = "SWITCH_THEME";

// Actions
export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});

export const filterTasks = (status: string) => ({
  type: FILTER_TASKS,
  payload: status,
});

export const deleteTask = (taskId: string) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const updateTask = (updatedTask: Task) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask,
  };
};
