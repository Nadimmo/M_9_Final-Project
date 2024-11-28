import React, { useState } from "react";
import Title from "../Title/Title";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BookingPage = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to the database or API endpoint
    axiosPublic
      .post("/bookings", formData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50  items-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 ">
        <Title title={"Reservation"} short={"booking a table"}></Title>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Guests Dropdown */}
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>

          {/* Name, Phone, and Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#D1A054] hover:bg-[#aa8246] text-white py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Book Table
            </button>
          </div>
        </form>
      </div>
      {/* contact section */}
      <div className="mt-10 mx-auto">
        <Title title={"Visit Us "} short={"our location"}></Title>
        <div className="mt-10  grid lg:grid-cols-3 gap-5">
          <div className="lg:w-[300px] lg:h-[180px]  border-2 bg-white text-black">
            <p className="bg-[#D1A054] h-10 w-full">
              <BiSolidPhoneCall className="mx-auto text-3xl" />
            </p>
            <div className="mt-5 text-center py-2">
              <p className="text-lg font-bold">Phone</p>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="lg:w-[300px]  lg:h-[180px]  border-2 bg-white text-black">
            <p className="bg-[#D1A054] h-10 w-full">
              <FaLocationDot className="mx-auto text-3xl" />
            </p>
            <div className="mt-5 text-center py-2">
              <p className="text-lg font-bold">Address</p>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="lg:w-[300px] lg:h-[180px]  border-2 bg-white text-black">
            <p className="bg-[#D1A054] h-10 w-full">
              <PiTimerFill className="mx-auto text-3xl" />
            </p>
            <div className="mt-5 text-center py-2">
              <p className="text-lg font-bold">Working Houser</p>
              <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
