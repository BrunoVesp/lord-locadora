import { ReactNode } from 'react';
import styles from './Formulario.module.css';

interface FormularioProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    children: ReactNode;
}

const Formulario = ({ children, onSubmit }: FormularioProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.formulario}>
            {children}
        </form>
    )
}

export default Formulario;