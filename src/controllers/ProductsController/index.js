const { ProductsService } = require('../../services/ProductsService');

class ProductsController {
    async index(req, res) {
        try {
            const query = req.query.q;
            const products = await ProductsService.findByQuery(query);
            return res.status(200).json(products);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = {
    ProductsController: new ProductsController()
};
