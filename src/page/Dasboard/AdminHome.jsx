import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAllData from '../Hooks/useAllData';
import { FaUsers, FaClipboardList,  } from 'react-icons/fa';
import { PiVanFill } from 'react-icons/pi';
import { FaWallet } from 'react-icons/fa6';
import PieChartComponent from './PieChartComponent';
import CustomBarChartComponent from './CustomBarChartComponent';

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const { allData } = useAllData();
// Assuming third index for orders

  // console.log(allData)

  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
        Hi, {user?.displayName || 'Admin'}! Welcome Back
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Users Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-300 to-purple-500 text-white rounded-lg shadow-lg p-6">
          <FaWallet className="text-5xl opacity-80" />
          <div>
            <p className="text-3xl font-extrabold">{allData.revenue}</p>
            <p className="text-lg font-semibold">Revenue</p>
          </div>
        </div>
        {/* Users Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg p-6">
          <FaUsers className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{allData.users}</p>
            <p className="text-lg font-semibold">All Users</p>
          </div>
        </div>

        {/* Menu Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-6">
          <FaClipboardList className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{allData.menuItems}</p>
            <p className="text-lg font-semibold">Menu Items</p>
          </div>
        </div>

        {/* Orders Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-6">
          <PiVanFill className="text-6xl opacity-80" />
          <div>
            <p className="text-4xl font-extrabold">{allData.orders}</p>
            <p className="text-lg font-semibold">Orders</p>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 w-full gap-4 mt-20">
      <CustomBarChartComponent></CustomBarChartComponent>
      <PieChartComponent ></PieChartComponent>
      </div>

    </div>
  );
};

export default AdminHome;
