import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Mode } from '../enums/task.enums';
import { Task, TaskInput } from '../models/Task';

interface TasksContextType {
  tasks: Task[];
  selectedTask: Task | null;
  handleCreate: () => void;
  handleEdit: (task: Task) => void;
  handleSave: (task: TaskInput) => void;
  handleDelete: (id: string) => void;
  handleComplete: (id: string, status: boolean) => void;
  mode: Mode;
}

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

export const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCreate = useCallback(() => {
    setSelectedTask(null);
  }, []);

  const handleEdit = useCallback((task: Task) => {
    setSelectedTask(task);
  }, []);

  const handleSave = useCallback((task: TaskInput) => {
    setTasks((prevState) => {
      const currentTasks = [...prevState];
      const index = currentTasks.findIndex((t) => t.name === task.name);
      if (index === -1) {
        const existingTask = currentTasks.find((t) => t.id === task.id);
        if (!existingTask) {
          return [...currentTasks, { ...task, isCompleted: false }];
        } else {
          existingTask.name = task.name;
        }
      }
      return currentTasks;
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
    setSelectedTask(null);
  }, []);

  const handleComplete = useCallback((id: string, status: boolean) => {
    setTasks((prevState) => {
      const taskIndex = prevState.findIndex((task) => task.id === id);

      if (taskIndex === -1) return prevState;

      const updatedTasks = [...prevState];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        isCompleted: status,
      };

      return updatedTasks;
    });
  }, []);

  const mode = selectedTask ? Mode.Edit : Mode.Create;

  const value = useMemo(
    () => ({
      tasks,
      selectedTask,
      handleCreate,
      handleEdit,
      handleSave,
      handleDelete,
      handleComplete,
      mode,
    }),
    [
      tasks,
      selectedTask,
      handleCreate,
      handleEdit,
      handleSave,
      handleDelete,
      handleComplete,
      mode,
    ]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
