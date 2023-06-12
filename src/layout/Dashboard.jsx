import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../hokes/useCart";
import useAdmin from "../hokes/useAdmin";
import useInstructor from "../hokes/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  const [cart] = useCart();
const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-purple-400 ">
        <div className="flex justify-center items-center gap-4 font-bold my-5">
        {user&&
        <div className="avatar online">
        <div className="w-14 mask mask-hexagon">
        <img src={user?.photoURL} />
      </div>
      </div>
        }
        {user&&
           <h3>~~~{user?.displayName}~~~</h3>
        }
        </div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <FaWallet></FaWallet> Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaShoppingCart></FaShoppingCart> Manage User
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <FaWallet></FaWallet> Add Class
                </NavLink>
              </li>
        
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled">
                  <FaWallet></FaWallet> Enrolled
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allClass">
              <FaBars></FaBars> Class
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
