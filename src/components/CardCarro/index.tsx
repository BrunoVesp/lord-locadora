import Botao from '../Botao';
import styles from './CardCarro.module.css';
import { FaCar } from "react-icons/fa";
import { GiCarDoor, GiCarSeat } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";

interface CardCarroProps {
    ano: string;
    assentos: string;
    combustivel: string;
    imagem: string;
    nome: string;
    portas: string;
    preco: number;
    tipo: string;
    abrirModalAoClicar?: React.MouseEventHandler<HTMLButtonElement>
}

const CardCarro = ({
    ano,
    assentos,
    combustivel,
    imagem,
    nome,
    portas,
    preco,
    tipo,
    abrirModalAoClicar }: CardCarroProps) => {

    return (
        <div className={styles.card}>
            <div className={styles.nome}>
                <h4>{nome}</h4>
            </div>
            <div className={styles.imagem}>
                <img src={imagem} alt={nome} />
            </div>
            <div className={styles.infos}>
                <span>{ano}</span>
                <div>
                    <p><FaCar className={styles.icone} /> {tipo}</p>
                    <p><GiCarSeat className={styles.icone} />{assentos}</p>
                    <p><GiCarDoor className={styles.icone} /> {portas}</p>
                    <p><BsFillFuelPumpFill className={styles.icone} /> {combustivel}</p>
                </div>
                <p className={styles.preco}>R$ {preco},00 / dia</p>
            </div>
            <Botao aoClicar={abrirModalAoClicar}>Ver mais informações</Botao>
        </div>
    )
}

export default CardCarro;