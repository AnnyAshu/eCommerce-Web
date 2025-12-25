import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <ToastContainer />

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
