"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import SubmitButton from "../components/Buttons/SubmitButton";
import ProtectedRoute from "../components/Auth/ProtectedRoute";

interface ApiResponse {
    message: string;
}

export default function TestPage() {
   const [data, setData] = useState<ApiResponse | null>(null);
   const [name, setName] = useState(''); // Сохраняем значение из input
   const [age, setAge] = useState<number | ''>(''); // Сохраняем возраст
   const [buttonDisbles, setButtonDisbles] = useState<boolean>(false); // Состояние кнопки
   const [responseMessage, setResponseMessage] = useState<string | null>(null);

   const handleSubmit = async () => {
        setButtonDisbles(true); // Блокируем кнопку
        try {
            const payload = {
                name,
                age,
            };
            const api = process.env.NEXT_PUBLIC_SERVER_URL_HTTP;
            const response = await axios.post(api + '/Test/send-data', payload, { withCredentials: true });
            setResponseMessage(response.data.name);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            setResponseMessage('An error occurred while sending data.');
            setButtonDisbles(false);
        }
    };


   useEffect(() => {
        const api = process.env.NEXT_PUBLIC_SERVER_URL_HTTP;
        axios.get(api + '/Test/get-data', { withCredentials: true })
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
   }, []);

    return (
         <ProtectedRoute>
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px'}}>
                <h1>Test page</h1>
                {data ? <pre>{data.message}</pre> : <p>Loading...</p>}
                <div>
                    <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} // Обновляем state
                        placeholder="Enter your age"
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Name:
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value === '' ? '' : e.target.value)} // Обновляем state
                        placeholder="Enter your Name"
                    />
                    </label>
                </div>
                <SubmitButton  onClick={handleSubmit} 
                disabled={buttonDisbles} 
                loading={false} 
                icon={""}>Send Data</SubmitButton>
                <div>
                    {responseMessage && <p>Server Response: {responseMessage}</p>}
                </div>
            </div>
         </ProtectedRoute>
         
    );
}