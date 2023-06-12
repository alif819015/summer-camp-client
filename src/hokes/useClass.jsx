import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const {data: topClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['topClass'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-12-summer-camp-server-alif819015.vercel.app/topClass');
            return res.json();
        }
    })
    return [topClass, loading, refetch]
}
export default useClass;