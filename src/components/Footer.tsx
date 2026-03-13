import styles from './Footer.module.scss';
import Applepay from '../assets/images/applepay.png';
import Visa from '../assets/images/visa.png';
import Googlepay from '../assets/images/googlepay.png';
import MadeInUkraine from '../assets/images/made_in_ukraine.png';
import Group from '../assets/images/group.png';
import Mastercard from '../assets/images/mastercard.png';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <img src={Group} alt=""  />
                <div className={styles.greyRect}>
                    <img src={MadeInUkraine} alt=""  />
                </div>
                
                <span>AQVEX  ©  2026  |  Все права защищены</span>
            </div>
            <div className={styles.right}>
                <img src={Mastercard} alt="" />
                <img src={Visa} alt=""  />
                <img src={Applepay} alt="" />
                <img src={Googlepay} alt="" />

            </div>

        </div>
    );
}