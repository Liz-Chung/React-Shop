import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { categories, Items } from '../../stores/recoil/items';
import { themeDarkState } from '../../stores/recoil/theme';
import SearchProduct from '../SearchProduct/SearchProduct';
import SideNav from '../SideNav/SideNav';
import styles from './Header.module.css';

interface PropsType {
  cart: Items[];
}

export default function Header(props: PropsType) {
  const navigate = useNavigate();
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const [themeDark, setThemeDark] = useRecoilState(themeDarkState);
  let cartCount = 0;

  if (props.cart !== null) {
    props.cart.forEach((item: Items) => {
      cartCount += item.quantity;
    });
  }

  useLayoutEffect(() => {
    if (localStorage.getItem('themeDark') === 'true') {
      setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  }, []);

  useEffect(() => {
    if (themeDark) {
      localStorage.setItem('themeDark', 'true');
    } else {
      localStorage.setItem('themeDark', 'false');
    }
  }, [themeDark]);

  return (
    <div className={themeDark ? styles.navContainer : styles.navContainerLightTheme}>
      <div className={styles.nav}>
        <SideNav />
        <div
          className={searchToggle ? `${styles.none} ${styles.titleBox}` : styles.titleBox}
          onClick={() => navigate('/')}
        >
          <h1 className={styles.title}>React Shop</h1>
        </div>
        <div className={`${styles.navCategory} ml`}>
          {categories.map((category, idx) => {
            return (
              <span
                key={idx}
                onClick={() => navigate(`/${category.en}`)}
                className={`${styles.category} ${styles.commonHoverEffect}`}
              >
                {category.ko}
              </span>
            );
          })}
        </div>
        <div className={styles.flex}>
          <button
            onClick={() => setThemeDark(!themeDark)}
            className={`${styles.label} ${styles.commonHoverEffect} ${themeDark ? styles.labelDark : styles.labelLight}`}
          >
            <span className="material-symbols-outlined">
              {themeDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <div className={styles.searchBox}>
            <SearchProduct searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
          </div>
          <div className={`${styles.label} ${styles.commonHoverEffect}`} onClick={() => navigate('/cart')}>
            <span className="material-symbols-outlined">
              shopping_bag
            </span>
            {cartCount > 0 && <div className={styles.cartCount}>{cartCount}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}