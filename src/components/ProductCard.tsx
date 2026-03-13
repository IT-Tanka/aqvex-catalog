import { useState } from 'react';
import type { Product } from '../types';
import VolumeSelector from './VolumeSelector';
import styles from './ProductCard.module.scss';

import defaultCardPhoto from '../assets/images/card_photo.png';
import starIcon from '../assets/images/star.svg';
import doneIcon from '../assets/images/done.svg';
import bagIcon from '../assets/images/bag.svg';
import dropIcon from '../assets/images/drop.svg';


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {


  const [selectedVolumeId, setSelectedVolumeId] = useState(
    product.selected_volume_id || product.volumes?.[0]?.id || ''
  );
  const discount = product.discount_percent ?? 0;
  const hasDiscount = discount > 0 && product.old_price;
  const inStock = product.in_stock ?? true;
  const currency = product.currency || 'грн';

  // const imgSrc = product.image || defaultCardPhoto;
  const imgSrc = defaultCardPhoto;

  function renderStars(rating: number = 0) {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
      <>
        {Array(full)
          .fill(0)
          .map((_, i) => (
            <img
              key={`full-${i}`}
              src={starIcon}
              alt="full star"
              className={styles.star}
            />
          ))}

        {hasHalf && (
          <img
            src={starIcon}
            alt="half star"
            className={styles.star}
          // якщо є окрема half-зірка — заміни сюди
          />
        )}

        {Array(empty)
          .fill(0)
          .map((_, i) => (
            <img
              key={`empty-${i}`}
              src={starIcon}
              alt="empty star"
              className={`${styles.star} ${styles.starEmpty}`}
            />
          ))}
      </>
    );
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt={product.name} loading="lazy" />
      </div>

      <div className={styles.info}>

        <div className={styles.priceBlock}>
          {hasDiscount && (
            <span className={styles.oldPrice}>
              {product.old_price}
            </span>
          )}
          <span className={styles.currentPrice}>
            {product.price} {currency}
          </span>

          {hasDiscount && (
            <svg
              width="44"
              height="18"
              viewBox="0 0 44 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="
        M 9,0
        H 41
        Q 44,0 44,3
        V 15
        Q 44,18 41,18
        H 11
        L 9,18
        Q 6.5,18 5,16.5
        L 0.5,10.5
        Q 0,9 0.5,7.5
        L 5,1.5
        Q 6.5,0 9,0
        Z
      "
                fill="#FF2741"
              />

              {/* белая точка */}
              <circle cx="6" cy="9" r="1.5" fill="white" />

              {/* текст */}
              <text
                x="26"
                y="14"
                fill="white"
                fontSize="14"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="2%"
              >
                {discount}%
              </text>
            </svg>
          )}


        </div>
        <div>
          <h3 className={styles.name}>{product.name}</h3>

          <div className={styles.rating}>
            {renderStars(product.rating)}
            <span className={styles.ratingText}>
              {product.reviews_count || 0}
            </span>
          </div>

        </div>

        <div className={styles.stockInfo}>
          {inStock ? (
            <>
              <img src={doneIcon} alt="" className={styles.doneIcon} />
              В наличии
            </>
          ) : (
            <span className={styles.outOfStock}>Нет в наличии</span>
          )}
          <img src={dropIcon} alt="" className={styles.separator} />
          <span>{product.category || 'Уход за обувью'}</span>
        </div>

        <div className={styles.actionsRow}>
          {product.volumes && product.volumes.length > 1 && (
            <VolumeSelector
              volumes={product.volumes}
              // selectedId={product.selected_volume_id || ''}
              selectedId={selectedVolumeId}           // ← было product.selected_volume_id
              onSelect={setSelectedVolumeId}           // ← добавляем обработчик
            />
          )}

          <button
            className={styles.addToCart}
            disabled={!inStock}
          >
            <img src={bagIcon} alt="" className={styles.bagIcon} />
            {inStock ? 'В корзину' : 'Нет в наличии'}
          </button>
        </div>
      </div>
    </div>
  );
}