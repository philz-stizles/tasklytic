import { BiPlus } from 'react-icons/bi';
import { FloatingButton, TaskItem } from '../..';
import { Task } from '../../../models/Task';
import classes from './TaskList.module.css';

type Props = {
  onEdit: (task: Task) => void;
  tasks: Task[];
  onCreate: () => void;
  onComplete: (id: string) => void;
};

const TaskList = ({ tasks, onEdit, onComplete, onCreate }: Props) => {
  return (
    <section className={classes.TodoList}>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onComplete={onComplete}
          />
        ))}
      </ul>
      <FloatingButton icon={BiPlus} onClick={onCreate} />
    </section>
  );
};

export default TaskList;
