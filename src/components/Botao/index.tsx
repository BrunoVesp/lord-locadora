import { ReactNode } from 'react';
import styles from './Botao.module.css';

interface BotaoProps {
    children: ReactNode;
    tipo?: "submit" | "reset" | "button" | undefined
    aoClicar?: React.MouseEventHandler<HTMLButtonElement>;
}

const Botao = ({ children, aoClicar, tipo }: BotaoProps) => {
    return (
        <button
            className={styles.botao}
            onClick={aoClicar}
            type={tipo}
        >
            {children}
        </button>
    )
}

export default Botao;