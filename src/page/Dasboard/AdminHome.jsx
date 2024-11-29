import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAllData from '../Hooks/useAllData';
import { FaUsers, FaClipboardList, FaShoppingCart } from 'react-icons/fa';

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const { allData } = useAllData();
  const users = allData[0]?.length || 0;
  const menu = allData[1]?.length || 0;
  const orders = allData[2]?.length || 0; // Assuming third index for orders

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
        Hi, {user?.displayName || 'Admin'}! Welcome Back
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg p-6">
          <div>
            <p className="text-lg font-semibold">All Users</p>
            <p className="text-4xl font-extrabold">{users}</p>
          </div>
          <FaUsers className="text-6xl opacity-80" />
        </div>

        {/* Menu Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-6">
          <div>
            <p className="text-lg font-semibold">Menu</p>
            <p className="text-4xl font-extrabold">{menu}</p>
          </div>
          <FaClipboardList className="text-6xl opacity-80" />
        </div>

        {/* Orders Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-6">
          <div>
            <p className="text-lg font-semibold">Orders</p>
            <p className="text-4xl font-extrabold">{orders}</p>
          </div>
          <FaShoppingCart className="text-6xl opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
