const { Api } = require('../api');

// Variables
const Variables = require('../../config/variables');

// Mock
const { mockProducts } = require('./mock');

class ProductsService {
    async findByQuery(query) {
        try {
            if (Variables.useMock) {
                return mockProducts;
            }
            return await Api.findByQuery(query);
        } catch (err) {
            return err;
        }
    }
}

module.exports = {
    ProductsService: new ProductsService()
};
