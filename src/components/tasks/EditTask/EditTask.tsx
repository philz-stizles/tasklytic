import { useEffect, useState } from 'react';
import { Button, Input } from '../..';
import { Task } from '../../../models/Task';
import classes from './EditTask.module.css';
import { Mode } from '../../../enums/task.enums';

type Props = {
  task: Task | null;
  onSave: (task: Task) => void;
  onDelete: (id: string) => void;
  mode: Mode
};

const EditTask = ({ task, onSave, onDelete, mode }: Props) => {
  const [name, setName] = useState('');

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
              onClick={() => onDelete(task.id)}
            />
          )}
          <Button
            expanded
            label="Save"
            onClick={() => {
              onSave({
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