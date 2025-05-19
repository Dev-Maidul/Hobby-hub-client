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
            Component:CreateGroup
        },
        {
            path:'/my-groups',
            Component:MyGroups
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