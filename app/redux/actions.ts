import { Task } from "./types";

// Action types
export const ADD_TASK = "ADD_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

// Action creators
export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});

export const filterTasks = (status: string) => ({
  type: FILTER_TASKS,
  payload: status,
});
