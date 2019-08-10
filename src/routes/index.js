const { Router } = require('express');

const routes = Router();

routes.get('/items/:id', (req, res) => {
    return res.status(200).json({ success: true });
});

module.exports = routes;
