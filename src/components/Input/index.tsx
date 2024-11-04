import { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ $error, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`${styles.input} ${$error ? styles.error : ''}`}
            {...props}
        />
    );
});

export default Input;