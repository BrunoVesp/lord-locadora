import { ReactNode } from 'react';
import styles from './Fieldset.module.css';

interface FieldsetProps {
    children: ReactNode;
}

const Fieldset = ({ children }: FieldsetProps) => {
    return (
        <fieldset className={styles.campoInput}>
            {children}
        </fieldset>
    )
}

export default Fieldset;