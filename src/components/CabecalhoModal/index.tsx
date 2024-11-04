import { IoIosClose } from 'react-icons/io';
import styles from './CabecalhoModal.module.css';

interface CabecalhoModalProps {
    aoClicar: React.MouseEventHandler<SVGElement>
}

const CabecalhoModal = ({ aoClicar }: CabecalhoModalProps) => {
    return (
        <div className={styles.iconeContainer}>
            <IoIosClose
                className={styles.icone}
                onClick={aoClicar}
            />
        </div>
    )
}

export default CabecalhoModal;