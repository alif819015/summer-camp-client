import { useEffect, useState } from "react";

const useClass = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/topClass')
        .then( res => res.json())
        .then( data => {
            setUsers(data)
            setLoading(false);
        })
    },[])
    return [users, loading]
}
export default useClass;