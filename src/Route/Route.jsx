import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import OurMenu from "../page/OurMenu/OurMenu";
import Order from "../page/Order/Order";
import Register from "../page/Register/Register";


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
          element: <Order></Order>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;