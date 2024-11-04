import { ReactNode } from 'react';
import styles from './MessagemErro.module.css';

interface MessagemErroProps {
    children: ReactNode;
}

const MenssagemErro = ({ children }: MessagemErroProps) => {
    return (
        <p className={styles.menssagem}>
            {children}
        </p>
    )
}

export default MenssagemErro;