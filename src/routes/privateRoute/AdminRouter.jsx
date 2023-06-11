import { useContext } from "react";
import {  Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hokes/useAdmin";


const AdminRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    console.log(location)

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRouter;
