import { Outlet } from 'react-router-dom';
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}

export default Layout;