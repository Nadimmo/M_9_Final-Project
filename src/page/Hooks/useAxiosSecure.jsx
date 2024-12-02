import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://resturent-server-side-psi.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`; // Fixing the token format here
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor for axiosSecure
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      return response;
    },
    async (error) => {
      const status = error.response?.status; // Protect against undefined error.response
      if (status === 401 || status === 402) {
        await logOut();
        navigate('/login');
      }
      // Any status codes that fall outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
