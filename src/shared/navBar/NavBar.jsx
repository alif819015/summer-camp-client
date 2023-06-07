import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const NavBar = () => {
  const navOption = (
    <>
      <li className="flex md:flex-row text-lg md:text-yellow-600 sm:text-black font-semibold">
        <Link to="/">Home</Link>
        <Link to="/">Instructors</Link>
        <Link to="/">Classes</Link>
        <Link to="/">Dashboard </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed z-10 bg-opacity-20 md:px-20 sm:px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <div className="flex">
          <img className="w-10" src={logo} alt="" />
          <a
            style={{ fontFamily: "font-Cinzel" }}
            className="btn btn-ghost normal-case text-xl md:text-white"
          >
            PlayInspire
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="avatar navbar-end gap-4 text-white">
        <>
        <Link to="/logIn">Login</Link>
        <Link to="/signUp">Register</Link>
        </>
        <div className="w-14 mask mask-hexagon">
          <img src={`https://i.ibb.co/h1mdkPZ/Mahmud-Hasan.jpg`} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
