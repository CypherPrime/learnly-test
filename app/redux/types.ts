export interface Task {
  id?: any;
  title: string;
  description: string;
  dueDate: string;
  status?: string;
}

export interface RootState {
  tasks: Task[];
  filteredTasks: Task[];
}

export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
