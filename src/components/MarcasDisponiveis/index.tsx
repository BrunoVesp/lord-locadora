import CardMarca from '../CardMarca';
import styles from './MarcasDisponiveis.module.css';

interface CarFilterProps {
  brands: { marca: string; iconeMarca: string }[];
  selectedBrand: string[];
  onBrandSelect: (brand: string) => void;
}

const MarcaDisponiveis = ({ brands, selectedBrand, onBrandSelect }: CarFilterProps) => {
  const isActive = (brand: string) => selectedBrand.includes(brand);

  return (
    <div className={styles.marcas}>
      <h2>Marcas Disponíveis</h2>
      <p>Clique para filtrar</p>
      <div className={styles.containerMarcas}>
        {brands.map((brand) => (
          <CardMarca
            key={brand.marca}
            className={`${styles.button} ${isActive(brand.marca) ? styles.active : ''}`}
            aoClicar={() => onBrandSelect(brand.marca)}
          >
            <img src={brand.iconeMarca} alt={brand.marca} />
            {brand.marca}
          </CardMarca>
        ))}
      </div>
    </div>
  );
};

export default MarcaDisponiveis;
