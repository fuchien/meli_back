const { Api } = require('../api');

class ProductsService {
    async findByQuery(query) {
        try {
            return await Api.findByQuery(query);
        } catch (err) {
            return err;
        }
    }
}

module.exports = {
    ProductsService: new ProductsService()
};
