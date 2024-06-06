import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>
          <a href="">Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>

          <a href="">Contact Us</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/dashboard'}>

          <a href="">DashBoard</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/menu'}>

          <a href="">Our Menu</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/shope'}>

          <a href="">Our Shope</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar text-white bg-black opacity-[0.7] fixed z-20 mx-auto max-w-screen-xl">
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
          <a className="btn btn-ghost text-xl font-bold uppercase hidden lg:block">Bistro Boss </a>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;