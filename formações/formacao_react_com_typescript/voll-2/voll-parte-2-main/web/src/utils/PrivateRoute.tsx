import { Navigate, Outlet } from "react-router-dom";
import authStore from "../stores/auth.store";

export default function PrivateRoute() {
  const { isAuthenticated } = authStore;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
