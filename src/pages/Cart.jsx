import { useSelector } from "react-redux";
import { selectUniqueProducts } from "../redux/slices/selectUniqueProducts";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.value);
  const uniqueProducts = useSelector(selectUniqueProducts);

  return (
    <div>
      <h1 className="text-3xl text-center">Cart</h1>
      {cartProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 6xl:grid-cols-12 gap-2 py-12 px-5 place-items-center items-stretch">
          {uniqueProducts.map(({ product, quantity }) => (
            <CartProductCard
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))}
        </div>
      ) : (
        <p className="text-3xl text-center">No Products Added in Cart!</p>
      )}
    </div>
  );
};

export default Cart;
// https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif
