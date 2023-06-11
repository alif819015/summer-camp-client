import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const {data: topClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['topClass'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/topClass');
            return res.json();
        }
    })
    return [topClass, loading, refetch]
}
export default useClass;