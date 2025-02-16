import axios from "axios";
import api from "../api/api";
import Cookies from "js-cookie";

const fetchUser = async () => {
    try {
        const response = await api.get('/get-user');
        return response.data;
    } catch (error) {
        console.log('Error fetching user:', error);
        return null;
    };
};

const fetchLogin = async (payload: { email: string, password: string }) => {
    try {
        const response = await api.post('/login', payload);
        return { data: response.data, status: response.status };
    } catch (error) {
        if(axios.isAxiosError(error) && error.response) {
            console.error('Error fetching login:', error.response.data.error);
            return { data: null, status: error.response.status };
        } else {
            console.error('Network error:', error);
            return { data: null, status: 500 };
        }
    }

};

const fetchCheckToken = async () => {
    try {
        const response = await api.get('/chack-token')
        console.log('Server response:', response.data);
        return { data: response.data, status: response.status };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('Ошибка запроса:', error.response.data.error); 
        console.log('Сообщение:', error.response.data.message); 
        Cookies.remove("dragonkey")
        return { data: null, status: error.response.status };
    } else {
        console.error('Ошибка сети:', error);
        return { data: null, status: 500 };
    }
 }
};

export  { fetchUser, fetchLogin, fetchCheckToken };

