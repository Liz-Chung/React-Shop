declare module 'modals/SearchModal' {
  import { FC } from 'react';
  const SearchModal: FC<any>;
  export default SearchModal;
}

declare module 'modals/BuyModal' {
  import { FC } from 'react';
  import { Items } from 'stores/recoil/items';

  interface BuyModalProps {
    show: boolean;
    onHide: () => void;
    setCart: React.Dispatch<React.SetStateAction<Items[]>>;
  }

  const BuyModal: FC<BuyModalProps>;
  export default BuyModal;
}

declare module 'components/product/Product' {
  import { FC } from 'react';

  interface ProductProps {
    type?: string;
  }

  const Product: FC<ProductProps>;
  export default Product;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
}