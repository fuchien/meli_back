require('dotenv').config();
const express = require('express');
const routes = require('../routes');

class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use((req, res, next) => {
            res.header(
                'Access-Control-Allow-Origin',
                process.env.MELI_API_CORS_DOMAIN
            );
            res.header('Access-Control-Allow-Methods', 'GET');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        });
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;
