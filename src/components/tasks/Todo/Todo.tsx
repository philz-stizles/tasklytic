import { BiPlus } from 'react-icons/bi';
import { FloatingButton, GoPro, TaskItem } from '../..';
import { Task } from '../../../models/Task';
import imageSrc from './../../../assets/user.png';
import classes from './Todo.module.css';

type Props = {
  tasks: Task[];
  onCreate: () => void;
  onEdit: (task: Task) => void;
  onComplete: (id: string, status: boolean) => void;
};

const Todo = ({ tasks, onCreate, onEdit, onComplete }: Props) => {
  return (
    <section className={classes.Todo}>
      <div className={classes.TodoHeader}>
        <img src={imageSrc} alt="" />
        <div>
          <h6>Hello, John</h6>
          <p>What are your plans for today?</p>
        </div>
      </div>
      <GoPro />
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
    </section>
  );
};

export default Todo;
