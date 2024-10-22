import { TaskItem } from '../..';
import { useTasks } from '../../../context';
import classes from './TaskList.module.css';

const TaskList = () => {
  const { tasks, handleEdit, handleComplete } = useTasks();

  return (
    <ul className={classes.TaskList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onComplete={handleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
