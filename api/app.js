const express = require('express');
const app = express();

const cors = require('cors');
const config = require('./config/config.json');
const configuration = config[process.env.NODE_ENV];
app.use(cors({
    origin: [configuration.frontendUrl],
    methods: ['GET'],
}));

const { AUTHOR } = require('./utils/constants');

const responseInterceptor = (req, res, next) => {
    let oldSend = res.json;
    res.json = (responseData) => {
        responseData.author = AUTHOR; // signature
        oldSend.apply(res, [responseData]);
    };
    next();
}
app.use(responseInterceptor);

const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

module.exports = app;
