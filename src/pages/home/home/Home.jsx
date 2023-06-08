import Banner from "../banner/Banner";
import PopularClass from "../popularClass/PopularClass";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import TopSlider from "../topSlider/TopSlider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSlider></TopSlider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;