import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hokes/useCart";

const ClassCard = ({ item }) => {
  const { _id, image, InstructorName, className, availableSeats, price } = item;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleAddToCard = async (item) => {
    try {
      console.log(item);
      if (user && user.email) {
        const cartItem = {
          classItemId: _id,
          InstructorName,
          image,
          price,
          email: user.email,
        };
        const response = await fetch(
          "https://assignment-12-summer-camp-server.vercel.app/carts",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to add class to cart. Status: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Class has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          title: "Please login to join this class",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login now",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { from: location });
          }
        });
      }
    } catch (error) {
      console.error("Error adding class to cart:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding the class to the cart!",
      });
    }
  };
  return (
    <div className="my-8 card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px] w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-black card-title">{className}</h2>
        <p>
          <span className="font-semibold text-orange-600">InstructorName:</span>{" "}
          {InstructorName}
        </p>
        <p>
          <span className="font-semibold text-orange-600">
            AvailableSeats:{" "}
          </span>
          {availableSeats}
        </p>
        <p>
          <span className="font-semibold text-green-700">Price: </span>${price}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCard(item)}
            className="btn btn-outline btn-secondary"
          >
            Select Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
