import { useEffect, useState } from "react";

const useClass = () => {
    const [menu, setmenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/topClass')
        .then( res => res.json())
        .then( data => {
            setmenu(data)
            setLoading(false);
        })
    },[])
    return [menu, loading]
}
export default useClass;