import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Container from "../../../shared/container/Container";
import PopularItem from "../../../shared/popularItem/PopularItem";
import useClass from "../../../hokes/useClass";

const PopularClass = () => {
    const [menu] = useClass();
    const popularClass = menu.filter(item => item.category === 'Football')
   
    return (
        <Container>
            <div>
           <SectionTitle heading='Popular Classes'></SectionTitle> 
         <div className="grid md:grid-cols-3 gap-5">
            {
                popularClass.map((user) => <PopularItem key={user._id} user={user}></PopularItem>)
            }
            </div>  
        </div>
        </Container>
    );
};

export default PopularClass;