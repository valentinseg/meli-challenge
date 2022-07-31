import { axiosInstance } from "./config";

export const getItemsByKeyword = (query, category, limit = 4) => {
    const params = {};
    if (query && query !== '') params.q = query;
    if (category && category !== '') params.category = category;
    if (limit) params.limit = limit;
    return axiosInstance.get('/items', {
        params,
    });
};

export const getItemById = (id) => {
    return axiosInstance.get(`/items/${id}`);
};
