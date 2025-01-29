import axios from "axios";
import exp from "constants";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL_HTTP,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
    }
})

export default api;