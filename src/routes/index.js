const { Router } = require('express');

const routes = Router();

// CONTROLLERS
const { DetailsController } = require('../controllers/DetailsController');
const { ProductsController } = require('../controllers/ProductsController');

routes.get('/api/items', ProductsController.index);
routes.get('/api/items/:id', DetailsController.show);

module.exports = routes;
