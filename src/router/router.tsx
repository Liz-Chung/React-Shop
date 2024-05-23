import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Main from '../pages/Main/MainPage';
import Product from '../pages/Product/ProductPage';
import ProductDetail from '../pages/ProductDetail/ProductDetailPage';
import { Items } from '../stores/recoil/items';

interface RouterProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

const Router = ({ cart, setCart }: RouterProps): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/main" element={<Main />} />
      <Route path="/products" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
    </Routes>
  );
};

export default memo(Router);
