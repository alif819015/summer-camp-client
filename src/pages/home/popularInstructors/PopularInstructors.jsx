import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const PopularInstructors = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/instractore")
        .then((res) => res.json())
        .then((data) => setMenu(data));
    }, []);
    return (
        <div>
            <SectionTitle heading='Popular Instructors'></SectionTitle>
    <div>
      <div className="my-10 mx-16 grid md:grid-cols-6 gap-4">
        {menu.map((item) =>  <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[350px] md:h-[200px] w-full"
          src={item.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
        )}
      </div>
    </div>
        </div>
    );
};

export default PopularInstructors;


  