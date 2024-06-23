import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import OurMenu from "../page/OurMenu/OurMenu";
import Order from "../page/Order/Order";
import Register from "../page/Register/Register";
import Login from "../Login/Login";
import ContactPage from "../page/ContactPage/ContactPage";
import Cart from "../page/Dasboard/Cart";
import Dashboard from "../Root/Dashboard";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element : <Home></Home>
        },
        {
          path: '/menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order/:category',
          element:<Order></Order>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/contact',
          element: <ContactPage></ContactPage>
        }
      ],
      
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children: [
       { 
        path: 'cart',
        element: <Cart></Cart>
      }
      ]
    }
  ]);

export default router;