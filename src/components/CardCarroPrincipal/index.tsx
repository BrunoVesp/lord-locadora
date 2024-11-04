import { FaCar } from 'react-icons/fa';
import Botao from '../Botao';
import styles from './CardCarroPrincipal.module.css';
import { GiCarDoor, GiCarSeat } from 'react-icons/gi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface CardCarroPrincipalProps {
    id?: string;
    imagem?: string;
    nome?: string;
    ano?: string;
    descricao?: string;
    tipo?: string;
    assentos?: string;
    portas?: string;
    combustivel?: string;
    preco?: number;
    marca?: string;
    iconeMarca?: string;
    carro?: string;
}

const CardCarroPrincipal = ({
    imagem,
    nome,
    iconeMarca,
    ano,
    descricao,
    assentos,
    portas,
    combustivel,
    preco,
    tipo,
    carro }: CardCarroPrincipalProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.conteudo}>
                <div className={styles.imagemContainer}>
                    <img
                        className={styles.imagemModal}
                        src={imagem}
                        alt={nome} />
                </div>
                <div className={styles.infosContainer}>
                    <img src={iconeMarca} alt="icone" />
                    <h4>{nome}</h4>
                    <div>
                        <span>{ano}</span>
                        <p className={styles.descricao}>{descricao}</p>
                        <div className={styles.infos}>
                            <p><FaCar className={styles.iconeCarro} /> {tipo}</p>
                            <p><GiCarSeat className={styles.iconeCarro} /> {assentos}</p>
                            <p><GiCarDoor className={styles.iconeCarro} /> {portas}</p>
                            <p><BsFillFuelPumpFill className={styles.iconeCarro} /> {combustivel}</p>
                        </div>
                        <p className={styles.preco}>R$ {preco},00 / dia</p>
                    </div>
                    <Link to={`/carros/${carro}`}>
                        <Botao>Alugar agora</Botao>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCarroPrincipal;