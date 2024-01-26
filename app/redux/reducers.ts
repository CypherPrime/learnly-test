import { ADD_TASK, FILTER_TASKS } from "./actions";
import { Task, RootState } from "./types";

const initialState: RootState = {
  tasks: [],
  filteredTasks: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case FILTER_TASKS:
      const status: string = action.payload;
      let filteredTasks: Task[] = [];
      if (status === "all") {
        filteredTasks = state.tasks;
      } else {
        filteredTasks = state.tasks.filter((task) => task.status === status);
      }
      return {
        ...state,
        filteredTasks,
      };
    default:
      return state;
  }
};

export default rootReducer;
