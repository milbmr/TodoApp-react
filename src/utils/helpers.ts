import axios from "axios";

const BASE_URL = "http://localhost:5116/api";

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});
