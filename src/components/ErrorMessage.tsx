import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message = 'Щось пішло не так...', onRetry }: ErrorMessageProps) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.icon}>⚠️</div>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryBtn}>
          Спробувати ще раз
        </button>
      )}
    </div>
  );
}