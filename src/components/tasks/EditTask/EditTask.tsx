import { useEffect, useState } from 'react';
import { Button, Input } from '../..';
import { Mode } from '../../../enums/task.enums';
import { useTasks } from '../../../context';
import classes from './EditTask.module.css';

const EditTask = () => {
  const [name, setName] = useState('');
  const { selectedTask: task, mode, handleSave, handleDelete } = useTasks();

  useEffect(() => {
    if (task?.name) {
      setName(task.name);
    } else {
      setName('');
    }
  }, [task]);

  const editMode = !!task;

  return (
    <section className={classes.EditTask}>
      <div className={classes.EditTaskHeader}>
        <h3>{mode === Mode.Edit ? 'Edit' : 'Create'} Task</h3>
      </div>

      <div className={classes.EditTaskForm}>
        <Input
          label="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={classes.EditTaskActions}>
          {editMode && (
            <Button
              variant="danger"
              label="Delete"
              disabled={!editMode}
              onClick={() => handleDelete(task.id)}
            />
          )}
          <Button
            expanded
            label="Save"
            onClick={() => {
              handleSave({
                id: editMode ? task.id : new Date().toISOString(),
                name,
              });
              if (!editMode) {
                setName('');
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EditTask;
