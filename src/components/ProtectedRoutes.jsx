import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  return user == null ? <Navigate to={"/login"} /> : children;
};

export default ProtectedRoutes;
