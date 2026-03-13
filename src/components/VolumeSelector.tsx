import type { Volume } from '../types';
import styles from './VolumeSelector.module.scss';

interface VolumeSelectorProps {
  volumes: Volume[];
  selectedId: string;
  onSelect?: (volumeId: string) => void;
}

export default function VolumeSelector({
  volumes,
  selectedId,
  onSelect,
}: VolumeSelectorProps) {
  if (volumes.length <= 1) return null;

  return (
    <div className={styles.volumeWrapper}>
      <select
        className={styles.volumeSelect}
        value={selectedId}
        onChange={(e) => onSelect?.(e.target.value)}
        
      >
        {volumes.map((vol) => (
          <option
            key={vol.id}
            value={vol.id}
            disabled={!vol.in_stock}
          >
            {vol.label} {vol.in_stock ? '' : '(нет в наличии)'}
          </option>
        ))}
      </select>
    </div>
  );
}