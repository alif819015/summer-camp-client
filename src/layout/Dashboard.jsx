import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../hokes/useCart";
import useAdmin from "../hokes/useAdmin";
import useInstructor from "../hokes/useInstructor";

const Dashboard = () => {
  const [cart] = useCart();

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
      <div className="drawer-side bg-gray-500">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-500 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaWallet></FaWallet> Manage User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaShoppingCart></FaShoppingCart> All Users
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
                  <FaWallet></FaWallet> Enrolled
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
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          {/* {
           ( isAdmin &&
            <>
            <li>
            <NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'><FaWallet></FaWallet> Manage Classes</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/allUser'><FaShoppingCart></FaShoppingCart> All Users</NavLink>
          </li>
            </>)
            ||
            ( isInstructor &&
                <>
                <li>
                <NavLink to='/dashboard/home'><FaHome></FaHome> Instructor Home</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'><FaWallet></FaWallet> Add Class</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'><FaWallet></FaWallet> Enrolled</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'><FaWallet></FaWallet> Feedback</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
              </li>
                </>
                ||
                <>
                <li>
                <NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
              </li>
                </>
                )
          } */}

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
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
