import { ButtonHTMLAttributes } from 'react';
import classes from './FloatingButton.module.css';
import { IconType } from 'react-icons';

type Variant = 'primary' | 'success' | 'danger' | 'white' | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType;
  variant?: Variant;
};

const FloatingButton = ({
  icon: Icon,
  variant = 'primary',
  ...rest
}: Props) => {
  const variants: { [key: string]: string } = {
    primary: classes.primary,
    danger: classes.danger,
  };
  return (
    <button
      className={`${classes.FloatingButton} ${variants[variant]}`}
      {...rest}
    >
      <Icon />
    </button>
  );
};

export default FloatingButton;
