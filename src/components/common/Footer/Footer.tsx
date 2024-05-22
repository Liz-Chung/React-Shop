import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../../stores/recoil/theme';
import styles from './Footer.module.css';
import americanExpress from '../../../assets/img/svg/americanExpress.svg';
import dinersClub from '../../../assets/img/svg/dinersClub.svg';
import discover from '../../../assets/img/svg/discover.svg';
import master from '../../../assets/img/svg/master.svg';
import paypal from '../../../assets/img/svg/paypal.svg';
import visa from '../../../assets/img/svg/visa.svg';

export default function Footer(): React.ReactElement {
  const themeDark = useRecoilValue(themeDarkState);

  return (
    <section className={themeDark ? styles.footer : styles.footerLightTheme}>
      <p className="text-regular-14">ABOUT REACT SHOP</p>
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