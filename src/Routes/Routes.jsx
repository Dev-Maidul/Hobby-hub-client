import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllGroup from '../Pages/AllGroup';
import CreateGroup from '../Pages/CreateGroup';
import MyGroups from '../Pages/MyGroups';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import PrivateRoute from "../ContextProvider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/all-groups',
            Component:AllGroup
        },
        {
            path:'/create-group',
            element: <PrivateRoute>
                <CreateGroup></CreateGroup>
            </PrivateRoute>
        },
        {
            path:'/my-groups',
             element: <PrivateRoute>
                <MyGroups></MyGroups>
            </PrivateRoute>
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/signup',
            Component:Signup
        },
    ]
  },
]);