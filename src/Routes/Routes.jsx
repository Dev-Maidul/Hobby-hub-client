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
import Spinner from "../Components/Spinner";
import GroupDetails from "../Pages/GroupDetails";

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
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ()=> fetch('http://localhost:3000/groups'),
            Component:AllGroup
        },
        {
            path:'/groups/:id',
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ({params})=> fetch(`http://localhost:3000/groups/${params.id}`),
            Component:GroupDetails
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