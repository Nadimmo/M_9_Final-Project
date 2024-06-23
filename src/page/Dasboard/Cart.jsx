import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  // console.log(cart)

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

            axiosSecure.delete(`/carts/${id}`)
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
      <div className="grid lg:grid-cols-3 gap-8 text-center">
        <h3 className="text-4xl">Total Booking: {cart.length} </h3>
        <h3 className="text-4xl">Total Price: ${totalPrice}</h3>
        <button className="btn bg-[#D1A054] w-[100px]">Pay</button>
      </div>
      <div className="mt-10 bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
            
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    cart.map(item =>  <tr key={item._id}>
                    
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.name}</div>
                              <div className="text-sm opacity-50">{item.recipe}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>${item.price}</td>
                        <th>
                          <button onClick={()=>handlerRemove(item._id)} className="btn btn-ghost text-2xl"><RiDeleteBin5Fill /></button>
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

export default Cart;
