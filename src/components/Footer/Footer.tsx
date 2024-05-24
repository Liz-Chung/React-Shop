import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';
import americanExpress from '../../../public/images/americanExpress.svg';
import dinersClub from '../../../public/images/dinersClub.svg';
import discover from '../../../public/images/discover.svg';
import master from '../../../public/images/master.svg';
import paypal from '../../../public/images/paypal.svg';
import visa from '../../../public/images/visa.svg';
import styles from './Footer.module.css';

export default function Footer(): React.ReactElement {
  const themeDark = useRecoilValue(themeDarkState);

  return (
    <section className={themeDark ? styles.footer : styles.footerLightTheme}>
      <a href="https://zero-base.co.kr/" className="text-bold-14">제로베이스</a>
      <div className={styles.paymentIcons}>
        <img src={americanExpress} alt="American Express" />
        <img src={dinersClub} alt="Diners Club" />
        <img src={discover} alt="Discover" />
        <img src={master} alt="Mastercard" />
        <img src={paypal} alt="PayPal" />
        <img src={visa} alt="Visa" />
      </div>
      <p className={styles.copyright}>Copyright © 2024 Zero Base</p>
    </section>
  );
}
