import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../../store/cart';
import styles from './Nav.module.css';

const Nav = (): JSX.Element => {
  const cart = useRecoilValue(cartState);
  const cartItemCount = Object.values(cart.items || {}).reduce((total, item) => total + item.count, 0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className={isDarkMode ? `${styles.nav} ${styles.navDark}` : styles.nav}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <label htmlFor="side-menu" className="drawer-overlay"></label>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">React Shop</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className={isDarkMode ? `${styles.link} ${styles.linkDark}` : styles.link}>패션</Link>
                <Link to="/products" className={isDarkMode ? `${styles.link} ${styles.linkDark}` : styles.link}>액세서리</Link>
                <Link to="/digital" className={isDarkMode ? `${styles.link} ${styles.linkDark}` : styles.link}>Digital</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className={isDarkMode ? `${styles.link} ${styles.linkDark}` : styles.link}
            >
              <span className="material-symbols-outlined">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <input 
              type="text" 
              placeholder="검색" 
              className="px-3 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
            />
            <Link to="/cart" className="relative">
              <span className={isDarkMode ? `${styles.icon} ${styles.iconDark}` : styles.icon}>
                shopping_bag
              </span>
              <span className={styles.badge}>
                {cartItemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;