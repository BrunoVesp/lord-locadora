import { FaCar } from 'react-icons/fa';
import { useModal } from '../../hooks/useModal';
import styles from './ModalCarro.module.css';
import { GiCarDoor, GiCarSeat } from 'react-icons/gi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import Botao from '../Botao';
import { TipoCarro } from '../../types/TipoCarro';
import CabecalhoModal from '../CabecalhoModal';
import { Link } from 'react-router-dom';

interface ModalCarroProps {
    item?: TipoCarro | null;
}

const ModalCarro = ({ item }: ModalCarroProps) => {
    const { estaAberto, fecharModal } = useModal();

    if (!estaAberto) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={fecharModal}>
            <dialog open className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <CabecalhoModal aoClicar={fecharModal} />
                <div className={styles.conteudo}>
                    <div className={styles.imagemContainer}>
                        <img
                            className={styles.imagemModal}
                            src={item?.imagem}
                            alt={item?.nome} />
                    </div>
                    <div className={styles.infosContainer}>
                        <img src={item?.iconeMarca} alt="icone" />
                        <h4>{item?.nome}</h4>
                        <div>
                            <span>{item?.ano}</span>
                            <p className={styles.descricao}>{item?.descricao}</p>
                            <div className={styles.infos}>
                                <p><FaCar className={styles.iconeCarro} /> {item?.tipo}</p>
                                <p><GiCarSeat className={styles.iconeCarro} /> {item?.assentos}</p>
                                <p><GiCarDoor className={styles.iconeCarro} /> {item?.portas}</p>
                                <p><BsFillFuelPumpFill className={styles.iconeCarro} /> {item?.combustivel}</p>
                            </div>
                            <p className={styles.preco}>R$ {item?.preco},00 / dia</p>
                        </div>
                        <Link to="carros">
                            <Botao>Alugar agora</Botao>
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalCarro;