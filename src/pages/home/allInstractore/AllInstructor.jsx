import { useEffect, useState } from "react";
import InstructorCard from "./instructorCard";
import img from "../../../assets/banner/tainerbanner.jpg";
import Cover from "../../../shared/cover/Cover";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

const AllInstructor = () => {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-summer-camp-server-alif819015.vercel.app/instractore"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch instructors. Status: ${response.status}`
          );
        }

        const data = await response.json();
        setmenu(data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Cover img={img}></Cover>
      <SectionTitle heading="Instructors"></SectionTitle>
      <div className="my-10 mx-16 grid md:grid-cols-3 gap-8">
        {menu.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
