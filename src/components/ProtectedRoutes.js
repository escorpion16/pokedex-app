import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {

    const name = useSelector( state => state.name)

    if( name ){
        return <Outlet/>
    }else{
        return <Navigate to="/" />
    }
    
}

export default ProtectedRoutes