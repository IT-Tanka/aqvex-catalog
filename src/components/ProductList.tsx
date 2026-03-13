import ProductCard from './ProductCard';
import styles from './ProductList.module.scss'
import type { Product } from '../types';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  if (products.length === 0) {
    return <div className="no-results">Товарів не знайдено</div>;
  }

  return (
    <div className={styles.productGrid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}