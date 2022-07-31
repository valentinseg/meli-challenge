const axios = require('axios');
const config = require('../config/config.json');

const axiosInstance = axios.create({
    baseURL: config[process.env.NODE_ENV].apiUrl,
    responseType: 'json',
});

module.exports = {
    axiosInstance,
};
