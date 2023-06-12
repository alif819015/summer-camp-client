import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const EnrolledClass = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="w-full">
      <SectionTitle heading="Enrolled Class"></SectionTitle>
      <div></div>

      <div className="overflow-x-auto mx-10">
        <table className="table table-xs">
          <thead className="text-lg text-black font-bold">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>CartItem</th>
            </tr>
          </thead>
          {items&&items.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>
                  <button className="btn btn-outline btn-secondary btn-sm">
                    CartItem
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
