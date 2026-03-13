import styles from './Header.module.scss';
import Logo from '../assets/images/aqvex_logo.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" className="" />
    </div>
  );
}