const { axiosInstance } = require("./config");

const findById = (id) => {
    return axiosInstance.get(`/categories/${id}`);
};

module.exports = {
    findById,
};
