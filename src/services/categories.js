import { axiosInstance } from "./config";

export const getCategoryById = (id) => {
    return axiosInstance.get(`/categories/${id}`);
};
