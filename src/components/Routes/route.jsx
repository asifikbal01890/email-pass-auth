import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const route = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element:<SignUp></SignUp>
            }
        ]
    }
])