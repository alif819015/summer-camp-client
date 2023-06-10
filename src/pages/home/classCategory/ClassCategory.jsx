import PopularItem from "../../../shared/popularItem/PopularItem";
import ClassCard from "../allClass/ClassCard";

const ClassCategory = ({items}) => {
    return (
        <div className="mx-16 grid md:grid-cols-5 gap-5">
        {
            items.map((user) => <ClassCard key={user._id} user={user}></ClassCard>)
        }
        </div> 
    );
};

export default ClassCategory;