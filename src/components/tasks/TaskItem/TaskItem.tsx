import { Button, Checkbox } from '../..';
import { Task } from '../../../models/Task';
import classes from './TaskItem.module.css';

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
  onComplete: (id: string, status: boolean) => void;
};

const TaskItem = ({ task, onEdit, onComplete }: Props) => {
  const isCompleted = task.isCompleted
  return (
    <li className={classes.TaskItem}>
      <Checkbox
        checked={isCompleted}
        onChange={(e) => onComplete(task.id, e.target.checked)}
      />
      <p className={`${classes.TaskName}${isCompleted ? ` ${classes.completed}` : ''}`}>
        {task.name}
      </p>
      <Button
        label="Edit"
        variant="outlined"
        size="md"
        onClick={() => onEdit(task)}
      />
    </li>
  );
};

export default TaskItem;
