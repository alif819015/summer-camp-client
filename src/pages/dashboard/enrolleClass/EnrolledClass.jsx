import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const EnrolledClass = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/payments");

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
          {items &&
            items.map((item, index) => (
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
