import React, { useContext } from 'react';
import { Context } from '../Providers/AuthContext';


const Home = () => {
    const data = useContext(Context)
    console.log(data);
    
    return (
        <div>
            this is home
        </div>
    );
};

export default Home;