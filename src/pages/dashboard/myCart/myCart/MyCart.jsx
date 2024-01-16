import { FaTrash } from "react-icons/fa";
import useCart from "../../../../hokes/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = async (item) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://assignment-12-summer-camp-server-alif819015.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to delete item. Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);

      Swal.fire("Error!", "Failed to delete item.", "error");
    }
  };
  return (
    <div className="w-full min-h-full">
      <div className="flex gap-6 mx-6 h-10 p-5 justify-between items-center bg-purple-400">
        <h3 className="text-2xl">Total Class: {cart.length}</h3>
        <h3 className="text-2xl">Total Price: ${total.toFixed(2)}</h3>
      </div>
      <div className=" mx-5 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>CheckOut</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <th>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td>{item.InstructorName}</td>
                <th>${item.price}</th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-purple-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
                <th>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-xs btn-success">Pay</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
