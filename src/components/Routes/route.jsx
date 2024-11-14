import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Order from "../Order/Order";
import PrivateRoutes from "./PrivateRoutes";

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
                path: "/order",
                element: <PrivateRoutes><Order></Order></PrivateRoutes>
            },
            {
                path: "/signUp",
                element:<SignUp></SignUp>
            }
        ]
    }
])