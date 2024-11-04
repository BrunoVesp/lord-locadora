import CardCarro from '../../../components/CardCarro';
import styles from './TemosTudo.module.css';
import carros from '../../../mocks/carros.json';
import Botao from '../../../components/Botao';
import { Link } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';

const TemosTudo = () => {
    const { abrirModal } = useModal();

    return (
        <section className={styles.tudo}>
            <h2>Nós Temos Tudo Que Você Precisa</h2>
            <div className={styles.containerCards}>
                {carros.slice(0, 4).map(carro =>
                    <CardCarro
                        nome={carro.nome}
                        imagem={carro.imagem}
                        ano={carro.ano}
                        assentos={carro.assentos}
                        combustivel={carro.combustivel}
                        portas={carro.portas}
                        tipo={carro.tipo}
                        preco={carro.preco}
                        abrirModalAoClicar={() => abrirModal(carro)}
                        key={carro.id}
                    />
                )}
            </div>
            <div className={styles.marcas}>
                <Link to="carros">
                    <Botao>Ver todos os carros</Botao>
                </Link>
            </div>
        </section>
    )
}

export default TemosTudo;