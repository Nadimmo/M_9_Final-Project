import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data: menu = [], isPending: loading} = useQuery({
        queryKey: ["menu"],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })

    return [menu, loading, refetch]
    // const [menu , setMenu] = useState([])
    // const [loader, setLoader] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => setMenu(data))
    //     setLoader(false)
    // }, [])
    // return [menu, loader]
};

export default useMenu;