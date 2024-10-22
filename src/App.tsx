import { useCallback, useState } from 'react';
import { Task } from './models/Task';
import { EditTask, Todo } from './components';
import { Mode } from './enums/task.enums';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCreate = useCallback(() => {
    setSelectedTask(null);
  }, []);

  const handleEdit = useCallback((task: Task) => {
    setSelectedTask(task);
  }, []);

  const handleSave = useCallback((task: Task) => {
    setTasks((prevState) => {
      const currentTasks = [...prevState];
      const index = currentTasks.findIndex((t) => t.name === task.name);
      if (index === -1) {
        const existingTask = currentTasks.find((t) => t.id === task.id);
        if (!existingTask) {
          return [...currentTasks, task];
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

  const handleComplete = useCallback((id: string) => {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
    setSelectedTask(null);
  }, []);

  const mode = selectedTask ? Mode.Edit : Mode.Create;

  return (
    <main>
      <Todo
        tasks={tasks}
        onComplete={handleComplete}
        onCreate={handleCreate}
        onEdit={handleEdit}
      />
      <EditTask
        task={selectedTask}
        onSave={handleSave}
        onDelete={handleDelete}
        mode={mode}
      />
    </main>
  );
}

export default App;
