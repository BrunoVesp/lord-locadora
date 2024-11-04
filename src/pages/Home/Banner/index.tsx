import styles from './Banner.module.css';
import Botao from "../../../components/Botao";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.texto}>
                <h2>Carros Seguros, Rápidos e Confortáveis</h2>
                <p>Veja nossa lista de carros disponíveis</p>
                <Link to="carros"><Botao>Alugar Agora</Botao></Link>
            </div>
        </div>
    )
}

export default Banner;