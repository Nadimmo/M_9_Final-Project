
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserHome = () => {
    const axiosSecure = useAxiosSecure()

    const {data: allDataUser = []} = useQuery({
        queryKey: 'allDataUser',
        queryFn: async()=>{
            const res = await axiosSecure.get('/user-stats')
            return res.data
        }
    })


  return {allDataUser}
}

export default useUserHome