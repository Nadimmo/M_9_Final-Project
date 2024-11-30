import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUserHome from "../Hooks/useUserHome";
import { FaClipboardList, FaStar, FaUsers, FaWallet } from "react-icons/fa6";
import { FaCalendarAlt, FaCloudDownloadAlt, FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiVanFill } from "react-icons/pi";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const { allDataUser } = useUserHome();
  const [cart, refetch] = useCart();

  const orders = allDataUser[0]?.length || 0;
  const contact = allDataUser[1]?.length || 0;
  // console.log(allDataUser)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
        Hi, {user?.displayName || "User"}! Welcome Back
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg p-6">
          <FaClipboardList className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{orders}</p>
            <p className="text-lg font-semibold">All Menu</p>
          </div>
        </div>
        {/* booking Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-6">
          <FaCalendarAlt className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{cart.length}</p>
            <p className="text-lg font-semibold">My Booking</p>
          </div>
        </div>
        {/* contact Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-6">
          <BiSolidPhoneCall className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{contact}</p>
            <p className="text-lg font-semibold">Contact</p>
          </div>
        </div>
      </div>
      {/* info section */}
      {/* Info Section */}
      <div className="lg:flex justify-between mt-20 gap-6">
        {/* Left Side: User Info */}
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white w-full lg:w-1/2 mx-auto p-8 rounded-lg shadow-lg text-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/160"}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h1 className="text-3xl font-mono font-bold uppercase mt-4">
            {user?.displayName || "User"}
          </h1>
        </div>

        {/* Right Side: User Activity */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white w-full lg:w-1/2 mx-auto p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-mono font-bold mb-6">Your Activity</h1>
          <ul className="text-lg font-semibold space-y-4">
            <li className="flex items-center gap-3">
              <PiVanFill className="text-2xl" /> Orders: {orders}
            </li>
            <li className="flex items-center gap-3">
              <FaCalendarAlt className="text-2xl" /> Booking: {cart.length}
            </li>
            <li className="flex items-center gap-3">
              <FaWallet className="text-2xl" /> Payments: Pending
            </li>
            <li className="flex items-center gap-3">
              <FaStar className="text-2xl" /> Review: Not Submitted
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
