import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hokes/useAxiosSecure";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-12-summer-camp-server.vercel.app/users/admin/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleMakeAdmin = (item) => {
    fetch(
      `https://assignment-12-summer-camp-server.vercel.app/users/admin/${item._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (item) => {
    fetch(
      `https://assignment-12-summer-camp-server.vercel.app/users/instructor/${item._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full min-h-full">
      <SectionTitle heading="Manage User"></SectionTitle>
      <div className=" mx-5 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-purple-400">
            <tr className="text-xl text-black">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Inst Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.name}</td>
                <th>{item.email}</th>
                <th>
                  {item.role === "admin" ? (
                    <button className="btn btn-sm btn-outline btn-secondary">
                      admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="btn btn-ghost bg-fuchsia-600 text-white text-lg"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </th>
                <th>
                  {item.role === "instructor" ? (
                    <button className="btn btn-sm btn-outline btn-success">
                      instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(item)}
                      className="btn btn-ghost bg-blue-600 text-white text-lg"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-purple-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
