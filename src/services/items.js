import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getItemsByKeyword = (query, limit = 4) => {
    return axiosInstance.get('/items', {
        params: {
            q: query,
            limit: limit,
        },
    });
};

export const getItemById = (id) => {
    return axiosInstance.get(`/items/${id}`);
};
