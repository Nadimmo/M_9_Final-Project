import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useUserHome from '../Hooks/useUserHome'
import { FaClipboardList, FaUsers } from 'react-icons/fa6'
import { FaCloudDownloadAlt, FaShoppingCart } from 'react-icons/fa'
import useCart from '../Hooks/useCart'
import { BiSolidPhoneCall } from 'react-icons/bi'

const UserHome = () => {
    const {user} = useContext(AuthContext)
    const {allDataUser} = useUserHome()
    const [cart, refetch] = useCart();

    const orders = allDataUser[0]?.length || 0;
    const contact = allDataUser[1]?.length || 0;
    // console.log(allDataUser)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
      Hi, {user?.displayName || 'User'}! Welcome Back
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

      {/* Menu Card */}
      <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-6">
        <BiSolidPhoneCall  className="text-6xl opacity-80" />
        <div>
          <p className="text-4xl font-extrabold">{contact}</p>
          <p className="text-lg font-semibold">Contact</p>
        </div>
      </div>

      {/* Orders Card */}
      <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-6">
        <FaShoppingCart className="text-6xl opacity-80" />
        <div>
          <p className="text-4xl font-extrabold">{cart.length}</p>
          <p className="text-lg font-semibold">My Booking</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserHome