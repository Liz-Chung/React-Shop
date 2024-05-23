/// <reference types="vite/client" />

declare module '../../Modals/SearchModal' {
  import React from 'react';

  const SearchModal: React.FC<any>;
  export default SearchModal;
}

declare module '../../Modals/BuyModal' {
  import React from 'react';
  import { Items } from '../../stores/recoil/items';

  interface BuyModalProps {
    show: boolean;
    onHide: () => void;
    setCart: React.Dispatch<React.SetStateAction<Items[]>>;
  }

  const BuyModal: React.FC<BuyModalProps>;
  export default BuyModal;
}

declare module '../../components/Product/Product' {
  import React from 'react';

  interface ProductProps {
    type?: string;
  }

  const Product: React.FC<ProductProps>;
  export default Product;
}

