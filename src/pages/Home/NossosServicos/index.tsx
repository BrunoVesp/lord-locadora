import styles from './NossosServicos.module.css';

const NossoServicos = () => {
    return (
        <section className={styles.nossosServicos}>
            <img 
                className={styles.imagem}
                src="/imagens/mercedes.png" 
                alt="Mercedes" />
            <div className={styles.infos}>
                <h2>Nossos Serviços</h2>
                <ul>
                    <li>
                        <img src="/imagens/vector.png" alt="vector" />
                        <div>
                            <h3>Aluguel de Carros</h3>
                            <p>Temos orgulho de sempre ir além para nossos clientes.</p>
                        </div>
                    </li>
                    <li>
                        <img src="/imagens/vector.png" alt="vector" />
                        <div>
                            <h3>Venda de Carros</h3>
                            <p>Vendemos os melhores carros de luxo em todo o
                            mundo a um preço competitivo.</p>
                        </div>
                    </li>
                    <li>
                        <img src="/imagens/vector.png" alt="vector" />
                        <div>
                            <h3>Contrate um motorista</h3>
                            <p>Você quer viajar e se sentir confortável, nossos motoristas estão à disposição.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default NossoServicos;