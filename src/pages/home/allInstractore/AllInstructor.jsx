import { useEffect, useState } from "react";
import InstructorCard from "./instructorCard";
import img from "../../../assets/banner/tainerbanner.jpg";
import Cover from "../../../shared/cover/Cover";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const AllInstructor = () => {
  const [menu, setmenu] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-summer-camp-server-alif819015.vercel.app/instractore")
      .then((res) => res.json())
      .then((data) => setmenu(data));
  }, []);
  return (
    <div>
      <Cover img={img}></Cover>
      <SectionTitle heading='Instructors'></SectionTitle>
      <div className="my-10 mx-16 grid md:grid-cols-3 gap-8">
        {menu.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
