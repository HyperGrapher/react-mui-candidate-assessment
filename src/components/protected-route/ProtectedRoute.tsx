import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../../services/auth.service";


const ProtectedRoute = () => {

    const token = authService.tokenValue;

    if (!token) return (<Navigate to={'/login'} />)

    return (<Outlet />);
}

export default ProtectedRoute;