import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { getFirstPermittedPath, hasPermission } from "../constants/permissions";

const ProtectedRoute = ({ permission }) => {
    const { admin, token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (permission && !hasPermission(admin, permission)) {
        return <Navigate to={getFirstPermittedPath(admin)} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
