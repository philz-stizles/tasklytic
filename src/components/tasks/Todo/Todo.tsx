import { BiPlus } from 'react-icons/bi';
import { FloatingButton, GoPro, TaskList } from '../..';
import imageSrc from './../../../assets/user.png';
import classes from './Todo.module.css';
import { useTasks } from '../../../context';

const Todo = () => {
  const { handleCreate } = useTasks();

  return (
    <section className={classes.Todo}>
      <div className={classes.TodoHeader}>
        <img src={imageSrc} alt="" />
        <div className={classes.TodoMessage}>
          <h6 className={classes.TodoGreeting}>Hello, John</h6>
          <p className={classes.TodoQuestion}>What are your plans for today?</p>
        </div>
      </div>
      <GoPro />
      <section className={classes.TodoSection}>
        <TaskList />
        <FloatingButton icon={BiPlus} onClick={handleCreate} />
      </section>
    </section>
  );
};

export default Todo;
