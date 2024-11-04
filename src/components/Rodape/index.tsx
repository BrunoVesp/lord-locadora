import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <ul className={styles.link}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="carros">Alugar Carro</Link></li>
                <li><Link to="faleconosco">Contato</Link></li>
                <li><Link to="sobremim">Sobre Mim</Link></li>
            </ul>
            <div className={styles.redes}>
                <span>Lord Locadora</span>
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=100011252202148&locale=pt_BR" target='_blank'
                        ><FaFacebookSquare /></a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/brunow_h/"
                            target='_blank'
                        ><FaInstagramSquare /></a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/bruno-hebert-40b38827b/"
                            target='_blank'
                        ><FaLinkedin /></a>
                    </li>

                </ul>
            </div>
            <p className={styles.autoria}>
                Site Desenvolvido por Bruno Hebert | Todos os direitos reservados
            </p>
        </footer>
    )
}

export default Rodape;