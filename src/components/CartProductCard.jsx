import { useDispatch } from "react-redux";
import {
  addProdInCart,
  removeOneProdFromCart,
  removeProdFromCart,
} from "../redux/slices/cartSlice";

const CartProductCard = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-xs bg-white  rounded-xl shadow-md p-4 flex flex-col gap-3">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />

      <h2 className="text-sm font-semibold line-clamp-2">
        {product.title}
      </h2>

      <p className="text-lg font-bold">₹ {product.price}</p>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch(removeOneProdFromCart(product))}
          className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700"
        >
          −
        </button>

        <span className="font-semibold">{quantity}</span>

        <button
          onClick={() => dispatch(addProdInCart(product))}
          className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => dispatch(removeProdFromCart(product))}
        className="mt-2 text-sm text-red-600 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartProductCard;
