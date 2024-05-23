import { Link } from "react-router-dom";
import { ICartState, cartState, removeFromCart } from "../../store/cart";
import { toCurrencyFormat } from "../../helpers/helpers";
import { useRecoilState } from "recoil";

const CartList = (): JSX.Element => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  const removeFromCartHandler = (id: string) => {
    setCart(removeFromCart(cart, id));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      {Object.values(cart.items || {}).length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl">장바구니에 물품이 없습니다.</h2>
          <Link to="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-2xl mb-4">장바구니</h2>
          <ul className="divide-y divide-gray-200">
            {Object.values(cart.items || {}).map((item) => (
              <li key={item.id} className="flex py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-500">{toCurrencyFormat(item.price)}</p>
                  <p className="text-gray-500">Quantity: {item.count}</p>
                </div>
                <button
                  className="btn btn-sm btn-danger ml-4"
                  onClick={() => removeFromCartHandler(item.id.toString())}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <p className="text-lg font-medium">
              Total: {toCurrencyFormat(Object.values(cart.items || {}).reduce((total, item) => total + item.price * item.count, 0))}
            </p>
            <button className="btn btn-primary mt-2">구매하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;