import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const FoodCarts = ({ item }) => {
  const { recipe, name, image, price, _id } = item;
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useContext(AuthContext);
  const [,refetch ]= useCart()
  const axiosSecure = useAxiosSecure();

  const handlerSend = (item) => {
    // console.log(item)
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        recipe,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login" , {state:{from: location.pathname}});
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-[340px] h-[500px]  bg-base-100 shadow-xl">
        <figure>
          <img className="relative" src={image} alt="loading" />
          <p className="absolute ml-[260px] text-xl mb-[160px] font-bold bg-black text-white w-fit">
            ${price}
          </p>
        </figure>
        <div className="card-body text-left">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm">{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handlerSend(item)}
              className="btn btn-ghost btn-outline border-0 border-b-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCarts;
