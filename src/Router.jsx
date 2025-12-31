import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "./Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Spinner from "./components/Spinner";

// LAZY LOADED PAGES (BEST PRACTICE)
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Cart = React.lazy(() => import("./pages/Cart"));
const WishList = React.lazy(() => import("./pages/WishList"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Error = React.lazy(() => import("./pages/Error"));

// OPTIONAL LEARNING COMPONENTS
const LearnUseEffect = React.lazy(() => import("./components/LearnUseEffect"));
const UseRefDemo = React.lazy(() => import("./components/UseRefDemo"));
const LearnMemo = React.lazy(() => import("./components/LearnMemo"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
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
        path: "useref",
        element: <UseRefDemo />,
      },
      {
        path: "usememo",
        element: <LearnMemo />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoutes>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
