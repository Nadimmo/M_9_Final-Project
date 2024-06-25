import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handlerRemove = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/user/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
}




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
                {
                    users.map(item =>  <tr key={item._id}>
                    
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-bold">{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td className="bg-[#D1A054] text-white rounded-2xl w-[50px] "> <FaUserGroup className="text-3xl "></FaUserGroup></td>
                        <td></td>
                        <th>
                          <button onClick={()=>handlerRemove(item._id)} className="btn bg-[#B91C1C] text-white hover:text-black text-2xl"><RiDeleteBin5Fill /></button>
                        </th>
                      </tr>)
                }
              {/* row 1 */}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
