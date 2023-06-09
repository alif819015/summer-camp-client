import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Container from "../../../shared/container/Container";
import PopularItem from "../../../shared/popularItem/PopularItem";

const PopularClass = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/topClass')
        .then( res => res.json())
        .then( data => {
            const popularClass = data.filter(item => item.category === 'Football')
            setUsers(popularClass)
        })
    },[])
    return (
        <Container>
            <div>
           <SectionTitle heading='Popular Classes'></SectionTitle> 
         <div className="grid md:grid-cols-3 gap-5">
            {
                users.map((user) => <PopularItem key={user._id} user={user}></PopularItem>)
            }
            </div>  
        </div>
        </Container>
    );
};

export default PopularClass;