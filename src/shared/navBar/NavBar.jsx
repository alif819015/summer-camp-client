import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hokes/useCart";
import useAdmin from "../../hokes/useAdmin";
import useInstructor from "../../hokes/useInstructor";

const NavBar = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navOption = (
    <>
      <li className="flex md:flex-row text-lg items-start md:items-center md:text-white sm:text-black font-semibold">
        <Link to="/">Home</Link>
        <Link to="/allInstructor">Instructors</Link>
        <Link to="/allClass">Classes</Link>
        {isAdmin ? (
          <Link to="/dashboard/adminHome">Dashboard </Link>
        ) : isInstructor ? (
          <Link to="/dashboard/instructorHome">Dashboard </Link>
        ) : (
          <Link to="/dashboard/userHome">Dashboard </Link>
        )}
        <Link to="/dashboard">
          <button className="btn btn-active btn-ghost">
            <FaCartPlus className="text-xl text-white"></FaCartPlus>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
        {isSmallScreen && (
          <>
            {user ? (
              <li>
                <button
                  className="btn btn-active btn-ghost"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">Register</Link>
                </li>
              </>
            )}
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-400 md:px-20 sm:px-2">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow text-white bg-gray-500 rounded-box w-fit ${
              isDropdownOpen ? "block" : "hidden"
            }`}
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
        {user && !isSmallScreen && (
          <button className="btn btn-active btn-ghost" onClick={handleLogOut}>
            Logout
          </button>
        )}
        {user && (
          <div className="avatar online">
            <div className="w-14 rounded-full">
            <img title={user?.displayName} src={user?.photoURL} />
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
