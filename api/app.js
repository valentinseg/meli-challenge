const express = require('express');
const app = express();

const { getAuthor } = require('./utils/author');

const responseInterceptor = (req, res, next) => {
    let oldSend = res.json;
    res.json = (responseData) => {
        responseData.author = getAuthor(); // signature
        oldSend.apply(res, [responseData]);
    };
    next();
}
app.use(responseInterceptor);

const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

module.exports = app;
