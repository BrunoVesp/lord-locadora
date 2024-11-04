import { Link } from 'react-router-dom';
import styles from './CabecalhoPagina.module.css';
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface CabecalgoPaginaProps {
    nomePagina: string;
}

const CabecalhoPagina = ({ nomePagina }: CabecalgoPaginaProps) => {
    return (
        <section className={styles.fundo}>
            <div className={styles.fundoEscuro}>
                <div className={styles.containerInfos}>
                    <span>{nomePagina}</span>
                    <div className={styles.rotas}>
                        <Link to="/"><FaHome size={20} /><p>Home</p></Link>
                        <IoIosArrowForward size={24} />
                        <p>{nomePagina}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabecalhoPagina;