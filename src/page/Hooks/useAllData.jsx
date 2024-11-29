import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'

const useAllData = () => {
    const axiosSecure =useAxiosSecure()
    const {data: allData = []} = useQuery({
        queryKey: "allData",
        queryFn: async()=>{
            const res = await axiosSecure.get('admin-stats')
            return res.data
        }
    })
  return {allData}
}

export default useAllData