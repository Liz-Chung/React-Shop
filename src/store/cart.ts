import { atom, selector } from "recoil";
import { CART_ITEM } from "../constants/category";

export interface ICartInfo {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  items?: Record<string, ICartInfo>;
}

export const cartState = atom<ICartState>({
  key: "cartState",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      const savedCart = localStorage.getItem("CART_ITEM");
      if (savedCart) {
        setSelf(JSON.parse(savedCart));
      }
      onSet((newCart) => {
        localStorage.setItem("CART_ITEM", JSON.stringify(newCart));
      });
    },
  ],
});


/**
 * cartList를 구현 하세요.
 * id, image, count 등을 return합니다.
 */

// addToCart는 구현 해보세요.

// removeFromCart는 참고 하세요.
export const removeFromCart = (cart: ICartState, id: string): ICartState => {
  const updatedCart = { ...cart };
  if (updatedCart.items) {
    delete updatedCart.items[id];
  }
  return updatedCart;
};

/**
 * 그 외에 화면을 참고하며 필요한 기능들을 구현 하세요.
 */