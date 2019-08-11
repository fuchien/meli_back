const { Router } = require('express');

const routes = Router();

// CONTROLLERS
const { DetailsController } = require('../controllers/DetailsController');

routes.get('/api/items/:id', DetailsController.show);

module.exports = routes;
