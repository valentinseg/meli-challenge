const axios = require('axios');
const { axiosInstance } = require("./config");

const findByQuery = (query, category, limitStr) => {
    const params = {};
    if (query && query !== '') params.q = query;
    if (category && category !== '') params.category = category;
    if (limitStr) {
        const limit = Number(limitStr);
        if (!isNaN(limit)) params.limit = limit;
    }
    return axiosInstance.get('/sites/MLA/search', {
        params: params,
    });
};

const findById = (id) => {
    return axiosInstance.get(`/items/${id}`);
};

const findDescriptionById = (id) => {
    return axiosInstance.get(`/items/${id}/description`);
};

const findItemAndDescriptionById = (id) => {
    return axios.all([
        findById(id),
        findDescriptionById(id),
    ]).then(axios.spread((itemResp, itemDescription) => {
        return {
            data: {
                item: itemResp.data,
                description: itemDescription.data,
            },
        };
    }));
}

module.exports = {
    findByQuery,
    findItemAndDescriptionById,
};
