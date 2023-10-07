import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = (props) => {
  const token = localStorage.getItem("token");
    return token ? (
      <Outlet {...props} />
    ) : (
      <Navigate
        to="/login"
      />
    );
  };
  

export default PrivateRoutes;