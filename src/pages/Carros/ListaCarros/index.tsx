import CardCarroPrincipal from '../../../components/CardCarroPrincipal';
import styles from './ListaCarros.module.css';
import Input from '../../../components/Input';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { TipoCarro } from '../../../types/TipoCarro';

interface ListaCarrosProps {
    carros: TipoCarro[];
    selectedBrands: string[];
}

const ListaCarros = ({ carros, selectedBrands }: ListaCarrosProps) => {
    const [busca, setBusca] = useState<string>('');

    const lowerBusca = busca.toLowerCase();

    const carrosFiltrados = selectedBrands.length > 0
        ? carros.filter(carro => carro.marca && selectedBrands.includes(carro.marca))
        : carros.filter(carro => carro.nome?.toLowerCase().includes(lowerBusca));

    return (
        <div className={styles.lista}>
            <div className={styles.campoPesquisa}>
                <Input
                    placeholder='Pesquise pelo nome'
                    type='text'
                    onChange={e => setBusca(e.target.value)}
                    value={busca}
                />
                <FaSearch size={20}/>
            </div>
            <div className={styles.carros}>
                {carrosFiltrados.map(carro =>
                    <CardCarroPrincipal
                        id={carro.id}
                        ano={carro.ano}
                        assentos={carro.assentos}
                        combustivel={carro.combustivel}
                        descricao={carro.descricao}
                        iconeMarca={carro.iconeMarca}
                        imagem={carro.imagem}
                        key={carro.id}
                        nome={carro.nome}
                        portas={carro.portas}
                        preco={carro.preco}
                        tipo={carro.tipo}
                        marca={carro.marca}
                        carro={carro.id}
                    />
                )}
            </div>
        </div>
    )
}

export default ListaCarros;