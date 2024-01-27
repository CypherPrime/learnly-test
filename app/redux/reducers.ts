import { ADD_TASK, FILTER_TASKS } from "./actions";
import { Task, RootState, DELETE_TASK, UPDATE_TASK } from "./types";

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
    case DELETE_TASK:
      const updatedTasksAfterDelete = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasksAfterDelete,
      };
    case UPDATE_TASK:
      const updatedTasksAfterUpdate = state.tasks.map((task: Task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasksAfterUpdate,
      };

    default:
      return state;
  }
};

export default rootReducer;
