import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import auth from '../Firebase/firebase.config';
import toast from 'react-hot-toast';
import { Context } from '../Providers/AuthContext';

const Navbar = () => {

    const { user } = useContext(Context)

    const navList = <>
        <li>
            <Link to={'/'}> home</Link>
        </li>
        <li>
            <Link to={'/login'}> Login</Link>
        </li>
        <li>
            <Link to={'/signUp'}> Sign Up</Link>
        </li>
        <li>
            <Link to={'/order'}> order</Link>
        </li>
    </>

    const handleLogOut = () => {
        signOut(auth)
            .then(result => toast.success('Log out Successfully'))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <h1>{user.email}</h1>
                    <button onClick={handleLogOut} className="btn">Log out</button>
                </>:
                <Link to={'/login'} className="btn">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;