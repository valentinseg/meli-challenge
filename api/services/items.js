const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    responseType: 'json',
});

const findByQuery = (query, limitStr) => {
    const params = {
        q: query,
    };
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
