import { InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, ...rest }: Props) => {
  return (
    <div className={classes.Input}>
      {label && <label>{label}</label>}
      <input {...rest} />
    </div>
  );
};

export default Input;
