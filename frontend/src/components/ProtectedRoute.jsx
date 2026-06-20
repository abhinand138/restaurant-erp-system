import { Navigate } from "react-router-dom";

function ProtectedRoute({

  allowedRoles,

  children

}) {

  const role = localStorage.getItem("role");


  if (!allowedRoles.includes(role)) {

    return <Navigate to="/dashboard" />;

  }


  return children;

}

export default ProtectedRoute;