import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const [cart] = useCart()

  const Links = (
    <>
      <li>
        <NavLink to={"/"}>
          <a href="">Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>
          <a href="">Our Menu</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>
          <a href="">Our Order</a>
        </NavLink>
      </li>
      {
        user && isAdmin &&<li>
        <NavLink to={"/dashboard/adminHome"}>
          <a href="">Dashboard</a>
        </NavLink>
      </li>
      }
      {
        user && !isAdmin &&<li>
        <NavLink to={"/dashboard/userHome"}>
          <a href="">Dashboard</a>
        </NavLink>
      </li>
      }
      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="btn btn-sm">
          <FaCartShopping/>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/shope"}>
          <a href="">Our Shope</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>
          <a href="">Contact</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <div>
            <a className="btn btn-ghost text-xl font-bold uppercase hidden lg:block">
            Gourmet Feast
            {" "}
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%] mr-2"
                title={user.displayName}
              />
              <Link onClick={logOut} className="btn btn-info">
                Sign out
              </Link>
            </>
          ) : (
            <Link to={"/login"} className="btn btn-info">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
