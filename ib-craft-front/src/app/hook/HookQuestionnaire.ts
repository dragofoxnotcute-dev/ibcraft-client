import axios from "axios";
import api from "../api/api"

const fetchStatus = async (id: string) => {
    try {
        if (id === "") {
            return { data: null, status: null};
        }

        const response = await api.get(`/quesionnaire/${id}/status`);
        return { data: response.data, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Error fetching status:', error);
            return { data: null, status: error.response.status };
        } else {
            console.error('Network error:', error);
            return { data: null, status: 500 };
        }
    };
};



export {fetchStatus};