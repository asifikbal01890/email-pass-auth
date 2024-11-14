import React, { useContext } from 'react';
import { Context } from '../Providers/AuthContext';
import { useNavigate } from 'react-router-dom';


const PrivateRoutes = ({ children }) => {

    const { user, isLoading } = useContext(Context)
    const navigate = useNavigate()
console.log(isLoading);

    if (isLoading) {
       return<span className="loading loading-spinner loading-lg text-primary"></span> 
    }
    if (user && !isLoading) {
        return children
    }else{
       navigate('/login') 
    }
    
};

export default PrivateRoutes;