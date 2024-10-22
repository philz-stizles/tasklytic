export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}


export type TaskInput = Omit<Task, 'isCompleted'>;