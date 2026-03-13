import type { SortOption } from '../types';
import styles from './SortSelect.module.scss'
interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div className={styles.sortSelectWrapper}>
      <select value={value} onChange={(e) => onChange(e.target.value as SortOption)} className={styles.sortSelect}>
      <option value="rating_desc"> По рейтингу</option>
      <option value="price_asc"> Цена: по возрастанию</option>
      <option value="price_desc"> Цена: по убыванию</option>
      <option value="name_asc">А → Я (по названию)</option>
    </select>

    </div>
    
  );
}