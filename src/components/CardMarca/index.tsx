import { ReactNode } from 'react';

interface CardMarcaProps {
    children: ReactNode;
    aoClicar?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className?: string;
}

const CardMarca = ({ children, aoClicar, className }: CardMarcaProps) => {
    return (
        <button
            className={className}
            onClick={aoClicar}>
            {children}
        </button>
    );
};

export default CardMarca;
