import { Button, Checkbox } from '../..';
import { Task } from '../../../models/Task';
import classes from './TaskItem.module.css';

type Props = {
  isCompleted?: boolean;
  task: Task;
  onEdit: (task: Task) => void;
  onComplete: (id: string, status: boolean) => void;
};

const TaskItem = ({ isCompleted, task, onEdit, onComplete }: Props) => {
  return (
    <li className={classes.TaskItem}>
      <Checkbox checked={isCompleted} onChange={(e) => onComplete(task.id, e.target.checked)} />
      <p className={classes.TaskName}>{task.name}</p>
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
