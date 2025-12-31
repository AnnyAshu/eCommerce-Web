import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useAuth();
  const products = useSelector((state) => state.cart.value);
  return (
    <nav className="bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-default">
      {console.log(user)}
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/usememo"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="vite.svg" className="h-7" alt="Flowbite Logo" />
          <span className="self-center dark:text-white text-xl text-heading font-semibold whitespace-nowrap">
            eCommerce
          </span>
        </Link>
        {user != null ? (
          <UserMenu />
        ) : (
          <>
            <div className="auth md:order-2">
              <Link to={"/login"} className="btn btn-primary">
                login
              </Link>
              <Link to={"/register"} className="btn btn-success ml-2">
                register
              </Link>
            </div>
          </>
        )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 md:bg-transparent rounded ${
                    isActive ? "navlink-active" : "navlink-inactive"
                  }`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 md:bg-transparent rounded ${
                    isActive ? "navlink-active" : "navlink-inactive"
                  }`
                }
              >
                WishList
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 md:bg-transparent rounded ${
                    isActive ? "navlink-active" : "navlink-inactive"
                  }`
                }
              >
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 md:bg-transparent rounded ${
                    isActive ? "navlink-active" : "navlink-inactive"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 md:bg-transparent rounded ${
                    isActive ? "navlink-active" : "navlink-inactive"
                  }`
                }
              >
                Cart ({products?.length || 0})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const UserMenu = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={
            user?.image ||
            "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          }
          alt={user?.name}
        />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className="z-50 absolute top-10 bg-amber-50 -left-24 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
        id="user-dropdown"
      >
        <div className="px-4 py-3 text-sm border-b border-default">
          <span className="block text-heading font-medium">{user?.name}</span>
          <span className="block text-body truncate">{user?.email}</span>
        </div>
        <ul
          className="p-2 text-sm text-body font-medium"
          aria-labelledby="user-menu-button"
        >
          <li>
            <NavLink
              to="/"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              Earnings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={logout}
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
        aria-controls="navbar-user"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
    </div>
  );
};
