import React, { useContext } from 'react';
import { Context } from '../Providers/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const PrivateRoutes = ({ children }) => {

    const { user, isLoading } = useContext(Context)
const location = useLocation()


    if (isLoading) {
       return<span className="loading loading-spinner loading-lg text-primary"></span> 
    }
    if (user && !isLoading) {
        return children
    }
    return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
    
};

export default PrivateRoutes;