import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hokes/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import useClass from "../../../hokes/useClass";

const ManageClass = () => {
  const [topClass, , refetch] = useClass();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       axiosSecure.delete(`topClass/${item._id}`)
       .then(res => {
        console.log(res.data);
        if(res.data.deletedCount > 0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
       })
      }
    })
  };
  return (
    <div>
      <SectionTitle heading="Manage Class"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class</th>
              <th>Name</th>
              <th>email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {topClass.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask w-14 rounded-full">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h3>{item.className}</h3>
                </td>
                <td>{item.InstructorName}</td>
                <td>{item.email}</td>
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-purple-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
                <th className="my-auto">
                  <select className="">
                    <option disabled selected>
                      pending
                    </option>
                    <option>approved</option>
                    <option>denied</option>
                  </select>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
