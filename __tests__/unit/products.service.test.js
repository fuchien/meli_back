const { ProductsService } = require('../../src/services/ProductsService');
const { Api } = require('../../src/services/api');

// Varibles
const Variables = require('../../src/config/variables');

// MOCKS
const { mockProducts } = require('../../src/services/ProductsService/mock');

jest.mock('../../src/services/api');

describe('Products service', () => {
    it('should return 4 products', async () => {
        Api.findByQuery.mockImplementation(() => Promise.resolve(mockProducts));
        const query = 'macbook pro';
        const response = await ProductsService.findByQuery(query);
        expect(response).toHaveProperty('query');
        expect(response).toHaveProperty('results');
        expect(response.results.length).toBe(4);
        expect(response).toEqual(mockProducts);
    });

    it('should return error to get products', async () => {
        const mockProducts = {
            msg: 'Erro ao buscar os produtos'
        };
        Api.findByQuery.mockImplementation(() => Promise.reject(mockProducts));
        const query = 'macbook pro';
        const response = await ProductsService.findByQuery(query);
        expect(response).toHaveProperty('msg');
        expect(response).toEqual(mockProducts);
    });

    it('should return products mock', async () => {
        Variables.useMock = true;
        const query = 'macbookpro';
        const response = await ProductsService.findByQuery(query);
        expect(response).toEqual(mockProducts);
        Variables.useMock = false;
    });
});
