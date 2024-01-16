import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const PaymentHistory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/payments")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setItems(data);
        });
    } catch (error) {
      console.error("Error fetching payment history:", error);
      // Handle the error as needed
    }
  }, []);
  return (
    <div className="w-full">
      <SectionTitle heading="Payment History"></SectionTitle>
      <div className="overflow-x-auto mx-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
