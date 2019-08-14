const { Router } = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');

const routes = Router();

// CONTROLLERS
const { DetailsController } = require('../controllers/DetailsController');
const { ProductsController } = require('../controllers/ProductsController');

// VALIDATORS
const products = require('../validators/products');

routes.get('/api/items', validate(products), handle(ProductsController.index));
routes.get('/api/items/:id', handle(DetailsController.show));

module.exports = routes;
