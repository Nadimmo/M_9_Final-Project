import React from "react";
import useBookings from "./../Hooks/useBookings";
import Title from "../Title/Title";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ManageBooking = () => {
  const [bookings, refetch] = useBookings();
  const axiosSecure = useAxiosSecure();

  const handleStatusUpdate = (id) => {
    // Update status in the database
    axiosSecure
      .patch(`/bookings/${id}`, { status: "Done" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking status updated to Done!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch()
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
        });
      });
  };

  return (
    <div>
      <Title title={"At a Glance!"} short={"manage all bookings"}></Title>
      <div className="overflow-x-auto mt-10 bg-white rounded-2xl rounded-b-none">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>User Email</th>
              <th>Phone Number</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Activity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="font-bold">{item.email}</div>
                </td>
                <td>{item.phone}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>

                <th>
                  <p
                    className={`text-lg ${
                      item.status === "Done" ? "text-[#287855]" : "text-[#AE7B2B]"
                    }`}
                  >
                    {item.status || "Pending"}
                  </p>
                </th>
                <th>
                  <button
                    disabled={item.status === "Done"}
                    onClick={() => handleStatusUpdate(item._id)}
                    className={`btn text-2xl w-[50px] h-[50px] rounded-[50%] ${
                      item.status === "Done"
                        ? "bg-[#287855] cursor-not-allowed"
                        : "bg-[#80E2B7] hover:bg-[#2a5241]"
                    } text-white`}
                  >
                    <FaCheckCircle />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
