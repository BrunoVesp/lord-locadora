import CabecalhoPagina from "../../components/CabecalhoPagina";
import ListaCarros from "./ListaCarros";
import carros from '../../mocks/carros.json';
import { useState } from "react";
import MarcaDisponiveis from "../../components/MarcasDisponiveis";
import SejaMotorista from "../../components/SejaMotorista";

const Carros = () => {
    const brands = Array.from(new Set(carros.slice(0, 9).map(car => ({ marca: car.marca, iconeMarca: car.iconeMarca }))));

    const [selectedBrand, setSelectedBrands] = useState<string[]>([]);

    const handleBrandSelect = (brand: string) => {
        setSelectedBrands((prevSelected) =>
            prevSelected.includes(brand)
                ? prevSelected.filter(selectedBrand => selectedBrand !== brand)
                : [...prevSelected, brand]
        );
    };

    return (
        <>
            <CabecalhoPagina nomePagina="Carros" />
            <MarcaDisponiveis
                brands={brands}
                selectedBrand={selectedBrand}
                onBrandSelect={handleBrandSelect}
            />
            <ListaCarros carros={carros} selectedBrands={selectedBrand} />
            <SejaMotorista />
        </>
    )
}

export default Carros;