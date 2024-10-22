import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';

type Variant = 'primary' | 'success' | 'danger' | 'white' | 'outlined';

type Size = 'sm' | 'md' | 'lg';

const variants: { [key: string]: string } = {
  primary: classes.primary,
  danger: classes.danger,
  outlined: classes.outlined,
};

const sizes: { [key: string]: string } = {
  sm: classes.sm,
  md: classes.md,
  lg: classes.lg,
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  expanded?: boolean;
  variant?: Variant;
  size?: Size;
};

const Button = ({
  label,
  variant = 'primary',
  size = 'lg',
  expanded = false,
  ...rest
}: Props) => {
  return (
    <button
      className={`${classes.Button} ${variants[variant]} ${sizes[size]}${
        expanded ? ` ${classes.expanded}` : ''
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
