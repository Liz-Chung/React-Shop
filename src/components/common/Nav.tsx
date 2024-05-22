import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart";
import { useState } from "react";

const Nav = (): JSX.Element => {
  const cart = useRecoilValue(cartState);
  const cartItemCount = Object.values(cart.items || {}).reduce((total, item) => total + item.count, 0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
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
                <Link to="/" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">패션</Link>
                <Link to="/products" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">액세서리</Link>
                <Link to="/digital" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Digital</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
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
              <span className="material-symbols-outlined h-6 w-6 text-gray-800 dark:text-white">
                shopping_bag
              </span>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
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