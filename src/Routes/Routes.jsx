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
import Update from "../Pages/Update";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ()=> fetch('https://hobby-hub-server-tau.vercel.app/groups'),
            Component:Home
        },
        {
            path:'/all-groups',
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ()=> fetch('https://hobby-hub-server-tau.vercel.app/groups'),
            Component:AllGroup
        },
        {
            path:'/groups/:id',
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ({params})=> fetch(`https://hobby-hub-server-tau.vercel.app/groups/${params.id}`),
            element: <PrivateRoute>
                <GroupDetails></GroupDetails>
            </PrivateRoute>,
           
        },
        {
            path:'/create-group',
            element: <PrivateRoute>
                <CreateGroup></CreateGroup>
            </PrivateRoute>
        },
        {
            path:'/update-group/:id',
            hydrateFallbackElement: <Spinner></Spinner>,
            loader: ({params})=> fetch(`https://hobby-hub-server-tau.vercel.app/groups/${params.id}`),
            element: <PrivateRoute>
                <Update></Update>
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
        {
      path: "/*",
      Component:ErrorPage
    },
    ]
  },
]);