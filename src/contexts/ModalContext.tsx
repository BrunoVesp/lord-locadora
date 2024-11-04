import { createContext, ReactNode, useState } from "react";
import { TipoCarro } from "../types/TipoCarro";

export interface ModalContextTypes {
    estaAberto: boolean;
    setEstaAberto: React.Dispatch<React.SetStateAction<boolean>>;
    abrirModal: (item: TipoCarro) => void;
    fecharModal: () => void;
    itemSelecionado: TipoCarro | null;
    setItemSelecionado: React.Dispatch<React.SetStateAction<TipoCarro | null>>;
    estaAbertoSalvou: boolean;
    abrirModalSalvou: () => void;
}

export const ModalContext = createContext<ModalContextTypes | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

    const [estaAberto, setEstaAberto] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState<TipoCarro | null>(null)
    const [estaAbertoSalvou, setEstaAbertoSalvou] = useState(false)

    const abrirModalSalvou = () => {
        setEstaAbertoSalvou(true);
    }

    const abrirModal = (item: TipoCarro) => {
        setItemSelecionado(item);
        setEstaAberto(true);
    }

    const fecharModal = () => {
        setEstaAberto(false);
        setEstaAbertoSalvou(false);
        setItemSelecionado(null);
    }



    return (
        <ModalContext.Provider value={{
            estaAberto, 
            setEstaAberto,
            abrirModal,
            fecharModal,
            itemSelecionado,
            setItemSelecionado,
            estaAbertoSalvou,
            abrirModalSalvou
        }}>
            {children}
        </ModalContext.Provider>
    )
}