import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/Blog";
import ToyAdd from "../pages/Home/Home/Toys/ToyAdd";
import ToyAll from "../pages/Home/Home/Toys/ToyAll";
import ToyDetails from "../pages/Home/Home/Toys/ToyDetails";
import PrivateRourte from "./PrivateRourte";
import MyToys from "../pages/Home/Home/Toys/MyToys";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },

            {
                path: '/addtoy',
                element: <PrivateRourte><ToyAdd></ToyAdd></PrivateRourte>
            },
            {
                path: '/alltoy',
                element: <ToyAll></ToyAll>
            },
            {
                path:'/toy/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({params})=> fetch(`https://toy-car-server-blush.vercel.app/toy/${params.id}`)
            },
            {
                path: '/mytoys',
                element: <PrivateRourte><MyToys></MyToys></PrivateRourte>
            }
        ]
    },
]);

export default router;