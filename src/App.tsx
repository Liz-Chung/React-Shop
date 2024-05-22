import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';
import { Items } from './stores/recoil/items';

const App = (): JSX.Element => {
  const [cart, setCart] = useState<Items[]>([]);

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Nav />
        <section className="main pt-16">
          <Router cart={cart} setCart={setCart} />
        </section>
        <Footer />
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
