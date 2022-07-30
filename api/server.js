const app = require('./app');
const config = require('./config/config.json');
const configuration = config[process.env.NODE_ENV];

app.listen(configuration.port, () => {
    console.log(`Server running on port ${configuration.port}`);
});
