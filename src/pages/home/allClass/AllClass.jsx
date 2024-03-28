
import Cover from "../../../shared/cover/Cover";
import img from "../../../assets/banner/sports_banner.jpg";
import img1 from "../../../assets/banner/Footballbanner.jpg";
import img2 from "../../../assets/banner/cricketbanner.jpg";
import img3 from "../../../assets/banner/basketballbanner.jpg";
import useClass from "../../../hokes/useClass";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import ClassCategory from "../classCategory/ClassCategory";

const AllClass = () => {
  const [menu] = useClass();
  const football = menu.filter((item) => item.category === "Football");
  const cricket = menu.filter((item) => item.category === "Cricket");
  const basketball = menu.filter((item) => item.category === "Basketball");
  return (
    <div className="mb-8">
      <Cover img={img}></Cover>
      <SectionTitle heading="Foot Ball"></SectionTitle>
      <ClassCategory items={football} title="football"
      img={img1}></ClassCategory>
      
      
      <SectionTitle heading="Cricket"></SectionTitle>
      <ClassCategory items={cricket} title="cricket" img={img2}></ClassCategory>
      
      
      <SectionTitle heading="Cricket"></SectionTitle>
      <ClassCategory items={basketball} title="basketball" img={img3}></ClassCategory>
    </div>
  );
};

export default AllClass;
