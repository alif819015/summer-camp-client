import Cover from "../../../shared/cover/Cover";
import ClassCard from "../allClass/ClassCard";

const ClassCategory = ({ items, img, title }) => {
  return (
    <div>
       {title&& <Cover img={img} title={title}></Cover>}

      <div className="mx-16 grid md:grid-cols-5 gap-5">
        {items.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default ClassCategory;
