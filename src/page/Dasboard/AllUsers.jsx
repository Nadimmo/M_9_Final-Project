import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  // use tan stack query
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handlerRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlerAdmin = user => {
    // console.log('delete this id', id)
    axiosSecure
      .patch(`/user/admin/${user._id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(console.error());
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 text-center">
        <h3 className="text-4xl">Total Users: {users.length} </h3>
        <h3 className="text-4xl">Total Price: </h3>
      </div>
      <div className="mt-10 bg-white rounded-2xl rounded-b-none">
        <div className="overflow-x-auto rounded-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white ">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex users-center gap-3">
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  {user.role ==='admin'?"Admin": <button
                    onClick={() => handlerAdmin(user)}
                    className="btn bg-[#D1A054] text-xl text-white rounded-2xl "
                  >
                    <FaUserGroup ></FaUserGroup>
                  </button>}
                  <td></td>
                  <th>
                    <button
                      onClick={() => handlerRemove(user._id)}
                      className="btn bg-[#B91C1C] text-white hover:text-black text-2xl"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
