import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://opensourcefw.herokuapp.com/api/",
});

export default axiosInstance;
