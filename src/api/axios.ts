import axios from "axios";
// const BASE_URL = `http://localhost:${import.meta.env.BACKEND_PORT || 8000}/api`;
const BASE_URL = import.meta.env.VITE_URL_BACKEND; //`https://backend.pereepl.mg/api`;

export default axios.create({
  baseURL: BASE_URL + "api/",
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
