import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hokes/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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

            <div className="stats stats-vertical shadow">
  
  <div className="stat">
    <div className="stat-title">User</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">All Users</div>
    <div className="stat-value">{stats.topClass}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Price</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">Total Order</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;