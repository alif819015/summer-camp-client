import { useEffect, useState } from "react";
import InstructorCard from "./instructorCard";
import img from "../../../assets/banner/tainerbanner.jpg";
import Cover from "../../../shared/cover/Cover";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const AllInstructor = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instractore")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Cover img={img}></Cover>
      <SectionTitle heading='Instructors'></SectionTitle>
      <div className="my-10 mx-16 grid md:grid-cols-3 gap-8">
        {users.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
