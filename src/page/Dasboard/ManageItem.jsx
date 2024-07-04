import { FaUserGroup } from "react-icons/fa6";
import useMenu from "../Hooks/useMenu";
import Title from "../Title/Title";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
const ManageItem = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  // console.log(menu)

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
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

  return (
    <div>
      <Title title={"Hurry Up!"} short={"manage all items"}></Title>
      <div className="overflow-x-auto mt-10 bg-white rounded-2xl rounded-b-none">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._it}>
                <td>
                    {index+1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <button className="btn text-white bg-[#D1A054] mt-3"><FaEdit className="text-2xl "></FaEdit></button>
                <th>
                  <button
                    onClick={() => handlerRemove(item._id)}
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
  );
};

export default ManageItem;
