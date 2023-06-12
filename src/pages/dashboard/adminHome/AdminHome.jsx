import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hokes/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaMoneyBillAlt, FaShopify, FaUser, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () =>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })



    return (
        <div className="w-full mt-10 min-h-full">
            <h3 className="text-3xl text-center font-semibold">~~~Welcome to: {user?.displayName}~~~</h3>

            <div className="ml-10 mt-10 stats stats-vertical shadow">
  
  <div className="stat bg-red-200">
    <div className="stat-title font-bold text-xl text-black">User</div>
    <div className="stat-value flex items-center gap-4">{stats.users} <span className="text-2xl text-purple-600"><FaUser></FaUser></span></div>
  </div>
  
  <div className="stat bg-blue-200">
    <div className="stat-title font-bold text-xl text-black">All Users</div>
    <div className="stat-value flex items-center gap-4">{stats.topClass}<span className="text-2xl text-purple-600"><FaUsers></FaUsers></span></div>
  </div>
  
  <div className="stat bg-purple-200">
    <div className="stat-title font-bold text-xl text-black">Total Price</div>
    <div className="stat-value flex items-center gap-4">${stats.revenue}<span className="text-2xl text-purple-600"><FaMoneyBillAlt></FaMoneyBillAlt></span></div>
  </div>

  <div className="stat bg-emerald-200">
    <div className="stat-title font-bold text-xl text-black">Total Order</div>
    <div className="stat-value flex items-center gap-4">{stats.orders}<span className="text-2xl text-purple-600"><FaShopify></FaShopify></span></div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;