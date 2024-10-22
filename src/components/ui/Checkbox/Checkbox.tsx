import classes from './Checkbox.module.css';
import checkedSVG from './../../../assets/checked.svg';
import { ChangeEvent } from 'react';

type Props = {
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ checked = false, onChange }: Props) => {
  return (
    <label className={classes.CheckboxLabel}>
      <input
        type="checkbox"
        className={classes.CheckboxInput}
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <img src={checkedSVG} alt="" />
      ) : (
        <span className={classes.CustomCheckbox}></span>
      )}
    </label>
    // <div
    //   role="button"
    //   className={`${classes.Checkbox}${checked ? ` ${classes.checked}` : ''}`}
    //   onClick={onClick}
    // >
    //
    // </div>
  );
};

export default Checkbox;
