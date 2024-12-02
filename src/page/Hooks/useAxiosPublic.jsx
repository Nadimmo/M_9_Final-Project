import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://resturent-server-side-psi.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
