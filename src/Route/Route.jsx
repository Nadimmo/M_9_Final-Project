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
import AllUsers from "../page/Dasboard/AllUsers";
import AddItem from "../page/Dasboard/AddItem";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageItem from "../page/Dasboard/ManageItem";
import UpdateItem from "../page/Dasboard/UpdateItem";
import Payment from "../page/Dasboard/Payment";
import PaymentHistory from "../page/Dasboard/PaymentHistory";
import AddReview from "../page/Dasboard/AddReview";
import OurShope from "../page/OurShope/OurShope";
import BookingPage from "../page/Dasboard/BookingPage";
import ManageBooking from "../page/Dasboard/ManageBooking";
import UserHome from "../page/Dasboard/UserHome";
import AdminHome from "../page/Dasboard/AdminHome";
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
          path:'/shope',
          element:<OurShope></OurShope>
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
        // user dashboard
        {
          path:'userHome',
          element: <UserHome></UserHome>
        },
       { 
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:"payment",
        element: <Payment></Payment>
      },
      {
        path:"paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:"addReview",
        element: <AddReview></AddReview>
      },
      {
        path:'reservation',
        element: <BookingPage></BookingPage>
      },
      // admin dashboard
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:"user",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute> 
      },
      {
        path:"addItem",
        element: <AdminRoute> <AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manage',
        element: <AdminRoute> <ManageItem></ManageItem> </AdminRoute>
      },
      {
        path:'booking',
        element: <AdminRoute> <ManageBooking></ManageBooking></AdminRoute>
      },
      {
        path: 'update/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute> ,
        loader: ({params}) => fetch(`https://resturent-server-side-psi.vercel.app/menu/${params.id}`)
      }
      ]
    }
  ]);

export default router;