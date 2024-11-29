import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic';

const useAllData = () => {
    const axiosPublic =useAxiosPublic()
    const {data: allData = []} = useQuery({
        queryKey: "allData",
        queryFn: async()=>{
            const res = await axiosPublic.get('admin-stats')
            return res.data
        }
    })
  return {allData}
}

export default useAllData