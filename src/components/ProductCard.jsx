import { useDispatch } from "react-redux";
import { addProdInCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product, incrementCount, quantity = 1 }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full max-w-sm bg-neutral-primary-soft py-6 px-3 border border-default rounded-2xl shadow-md
      transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
    >
      {/* <a href="#"> */}
      <img
        className="rounded-xl mb-6 w-full h-[200px] object-contain transition-all duration-300 hover:scale-[1.05]"
        src={
          product?.image ||
          "https://flowbite.com/docs/images/products/apple-watch.png"
        }
        alt={product?.description}
        title={product?.description}
      />
      {/* </a> */}

      <div className="transition-all duration-300">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }, (_, i) => (
              <Star i={i} rate={Math.round(product?.rating?.rate)} key={i} />
            ))}
          </div>
          <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-semibold px-2 py-0.5 rounded-md">
            {product?.rating?.rate || 0} out of 5
          </span>
        </div>

        <a href="#">
          <h5 className="text-heading font-semibold tracking-tight hover:text-brand transition-all duration-300">
            {product?.title.length > 20
              ? product?.title.substring(0, 20).concat("...")
              : product?.title ||
                "Apple Watch Series 7 GPS, Aluminium Case, Starlight"}
          </h5>
        </a>
        {product.price > 50 && <div className="discount">Pay with EMI</div>}
        {quantity > 1 && (
          <div className="quantity">Quantity: {quantity}</div>
        )}
        <div className="flex items-center justify-between mt-1">
          <span className="text-xl font-extrabold text-heading">
            ${product?.price || 0}
          </span>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2 bg-brand hover:bg-brand-strong
            transition-all duration-300 border border-transparent focus:ring-4 focus:ring-brand-medium
            shadow-md hover:shadow-lg font-medium leading-5 rounded-lg text-sm px-4 py-2"
            onClick={() => dispatch(addProdInCart(product))}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const Star = ({ i, rate = 0 }) => {
  return (
    <svg
      key={i}
      className={`w-5 h-5 ${i < rate ? "text-yellow-400" : "text-gray-400"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    </svg>
  );
};
