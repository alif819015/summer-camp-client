import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const PaymentHistory = () => {
    const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items)
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
      {
      items&&items.map((item, index) => <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item.email}</td>
        <td>{item.transactionId}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;