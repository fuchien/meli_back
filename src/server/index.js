require('dotenv').config();
const express = require('express');
const validate = require('express-validation');
const routes = require('../routes');
const Youch = require('youch');

class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        this.exception();
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

    exception() {
        this.express.use(async (err, req, res, next) => {
            if (err instanceof validate.ValidationError) {
                return res.status(err.status).json(err);
            }

            if (process.env.NODE_ENV !== 'production') {
                const youch = new Youch(err, req);

                return res.json(await youch.toJSON(err));
            }

            return res
                .status(err.status || 500)
                .json({ msg: 'Internal Server Error' });
        });
    }
}

module.exports = new App().express;
