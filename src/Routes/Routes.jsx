import {
    createBrowserRouter,
    
  } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Components/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        }

      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:"mycart",
          element:<MyCart></MyCart>
        },
        {
          path:"allusers",
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:"additem",
          element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path:"manageitem",
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
      ]
    }
  ]);