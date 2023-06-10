import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Cover from "../../../shared/cover/Cover";
import img1 from "../../../assets/banner/Footballbanner.jpg";
import img2 from "../../../assets/banner/cricketbanner.jpg";
import img3 from "../../../assets/banner/basketballbanner.jpg";
import useClass from "../../../hokes/useClass";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import ClassCategory from "../classCategory/ClassCategory";

const AllClass = () => {
  const [users] = useClass();
  const football = users.filter((item) => item.category === "Football");
  const cricket = users.filter((item) => item.category === "Cricket");
  const basketball = users.filter((item) => item.category === "Basketball");
  return (
    <div className="mb-8">
      <Cover img={img1}></Cover>
      <SectionTitle heading="Foot Ball"></SectionTitle>
      <ClassCategory items={football}></ClassCategory>
      
      <Cover img={img2}></Cover>
      <SectionTitle heading="Cricket"></SectionTitle>
      <ClassCategory items={cricket}></ClassCategory>
      
      <Cover img={img3}></Cover>
      <SectionTitle heading="Cricket"></SectionTitle>
      <ClassCategory items={basketball}></ClassCategory>
    </div>
  );
};

export default AllClass;
