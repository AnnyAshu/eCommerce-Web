import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import WishList from "./pages/WishList";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import LearnUseEffect from "./components/LearnUseEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "useeffect",
        element: <LearnUseEffect />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
