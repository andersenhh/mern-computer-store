import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook"
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import ManageProducts from "../dashboard/ManageProducts";
import EditProduct from "../dashboard/EditProduct";
import UploadProduct from "../dashboard/UploadProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/product/:id", element: <SingleBook/>, 
      loader: ({params}) => fetch(`${import.meta.env.VITE_LocalHost}/product/${params.id}`) },
    ],
  },
  {
    path:"/admin/dashboard",
    element: <DashboardLayout/>,
    children: [
      {  path: "/admin/dashboard",
        element: <PrivateRoute></PrivateRoute>
    },
    {
      path: "/admin/dashboard/upload",
      element: <UploadProduct/>
    },
    {
      path: "/admin/dashboard/manage",
      element: <ManageProducts/>
    },
    {
      path: "/admin/dashboard/edit-products/:id",
      element:<EditProduct/>, loader: ({params}) => fetch(`${import.meta.env.VITE_LocalHost}/product/${params.id}`) 
    }
    ]
  },
  {
    path: "sign-up",
    element: <SignUp/>

  },{
    path: "login",
    element: <Login/>
  },{
    path: "logout",
    element: <Logout/>
  }
]);

export default router;
