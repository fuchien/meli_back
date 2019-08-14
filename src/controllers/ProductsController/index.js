// SERVICES
const { ProductsService } = require('../../services/ProductsService');

// MODELS
const { Products } = require('../../models/Products');

class ProductsController {
    async index(req, res) {
        try {
            const query = req.query.q;
            const products = await ProductsService.findByQuery(query);
            const response = Products(products).getResponse();
            return res.status(200).json(response);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = {
    ProductsController: new ProductsController()
};
