import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";

const Cabecalho = () => {
    const location = useLocation();

    const [clicou, setClicou] = useState(false);

    const AbrirFecharMenu = () => {
        setClicou(!clicou);
    }

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link to="/"><img src="/imagens/logo.png" alt="" /></Link>
                <nav>
                    <ul className={styles.menu}>
                        <li className={location.pathname === '/' ? styles.itemAtivo : ''}>
                            <Link to="/">Início</Link>
                        </li>
                        <li className={location.pathname === '/carros' ? styles.itemAtivo : ''}>
                            <Link to="carros">Carros</Link>
                        </li>
                        <li className={location.pathname === '/faleconosco' ? styles.itemAtivo : ''}>
                            <Link to="faleconosco">Fale Conosco</Link>
                        </li>
                        <li className={location.pathname === '/sobremim' ? styles.itemAtivo : ''}>
                            <Link to="sobremim">Sobre Mim</Link>
                        </li>
                    </ul>
                    <IoMenu
                        onClick={AbrirFecharMenu}
                        className={styles.iconeMenu}
                        size={32}
                    />

                </nav>
                <aside className={clicou ? styles.menuAberto : styles.menuFechado}>
                    <IoIosClose
                        onClick={AbrirFecharMenu}
                        size={50}
                        className={styles.iconeFechar}
                    />
                    <nav>
                        <ul className={styles.menu}>
                            <li className={location.pathname === '/' ? styles.itemAtivo : ''}>
                                <Link to="/">Início</Link>
                            </li>
                            <li className={location.pathname === '/carros' ? styles.itemAtivo : ''}>
                                <Link to="carros">Carros</Link>
                            </li>
                            <li className={location.pathname === '/faleconosco' ? styles.itemAtivo : ''}>
                                <Link to="faleconosco">Fale Conosco</Link>
                            </li>
                            <li className={location.pathname === '/sobremim' ? styles.itemAtivo : ''}>
                                <Link to="sobremim">Sobre Mim</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </header>
    )
}

export default Cabecalho;