import styles from './Pagination.module.scss'
import ArrowLeft from '../assets/images/arrow_left.svg';
import ArrowRight from '../assets/images/arrow_right.svg';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  // Функція для генерації видимого діапазону сторінок
  const getPageNumbers = () => {
    const maxVisible = 5; // скільки номерів показуємо (крім стрілок і ...)
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisible - 1);

    // коригуємо, якщо близько до кінця
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages: (number | string)[] = [];

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Попередня сторінка"
      >
         <img src={ArrowLeft} alt="" className="" />
      </button>

      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        const isCurrent = page === currentPage;

        return (
          <button
            key={page}
            className={`${styles.pageNumber} ${isCurrent ? styles.current : ''}`}
            onClick={() => onPageChange(page as number)}
            disabled={isCurrent}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className={styles.arrow}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Наступна сторінка"
      >
         <img src={ArrowRight} alt="" className="" />
      </button>
    </div>
  );
}