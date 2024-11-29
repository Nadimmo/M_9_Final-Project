import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../page/Hooks/useCart";
import { MdGroup, MdShoppingBag } from "react-icons/md";
import { Fa42Group, FaBook, FaCalendarCheck, FaEnvelope } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import useAdmin from "../page/Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054] text-white">
        <ul className="menu p-4">
          {isAdmin ? (
            // admin route
            <>
              <li className="text-xl">
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-2xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/addItem">
                  <IoAddCircle className="text-2xl"></IoAddCircle>
                  Add Items
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/manage">
                  <FaList className="text-2xl"></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/booking">
                  <FaBook className="text-2xl"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/user">
                  <MdGroup className="text-2xl"></MdGroup>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            // user route
            <>
              <li className="text-xl">
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-2xl"></FaHome>
                  User Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/reservation">
                  <FaCalendar className="text-2xl"></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="text-2xl"></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/addReview">
                  <FaAd className="text-2xl"></FaAd>
                  Add a Review
                </NavLink>
              </li>
              
              <li className="text-xl">
                <NavLink to="/dashboard/paymentHistory">
                  <FaList className="text-2xl"></FaList>
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="text-xl">
            <NavLink to="/">
              <FaHome className="text-2xl"></FaHome>
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink to="/order/salad">
              <FaSearch className="text-2xl"></FaSearch>
              Menu
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink to={"/shope"}>
              <MdShoppingBag className="text-2xl" /> Shope
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink to={"/contact"}>
              <FaEnvelope className="text-2xl" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
