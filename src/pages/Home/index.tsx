import ModalCarro from '../../components/ModalCarro';
import ModalSalvou from '../../components/ModalSalvou';
import { useModal } from '../../hooks/useModal';
import Banner from './Banner';
import NossoServicos from './NossosServicos';
import SejaMotorista from '../../components/SejaMotorista';
import TemosTudo from './TemosTudo';

const Home = () => {
    const { itemSelecionado } = useModal();

    return (
        <>
            <Banner />
            <NossoServicos />
            <TemosTudo />
            <ModalCarro item={itemSelecionado}/>
            <SejaMotorista />
            <ModalSalvou nomeInfo='Recebemos o seu E-mail!' />
        </>
    )
}

export default Home;