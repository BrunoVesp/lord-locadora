import { useModal } from '../../hooks/useModal';
import CabecalhoModal from '../CabecalhoModal';
import styles from './ModalSalvou.module.css';
import { FaCheck } from "react-icons/fa";

interface ModalSalvouProps {
    nomeInfo: string;
}

const ModalSalvou = ({ nomeInfo }: ModalSalvouProps) => {
    const { fecharModal, estaAbertoSalvou } = useModal();

    if (!estaAbertoSalvou) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={fecharModal}>
            <dialog
                open
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <CabecalhoModal aoClicar={fecharModal} />
                <div className={styles.menssagem}>
                    <FaCheck className={styles.icone} />
                    <p>{nomeInfo}</p>
                </div>
            </dialog>
        </div>
    )
}

export default ModalSalvou;