import axios from "axios";
// const BASE_URL = `http://localhost:${import.meta.env.BACKEND_PORT || 8000}/api`;
// const BASE_URL = `https://backend.pereepl.mg/api`;
const BASE_URL = `http://localhost:8000/api`;

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
