import api from "../api/api";

const fetchUser = async () => {
    try {
        const response = await api.get('/get-user');
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export default fetchUser;