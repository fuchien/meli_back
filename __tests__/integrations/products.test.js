const request = require('supertest');
const { ProductsService } = require('../../src/services/ProductsService');

// mocks
const { productsMock } = require('../mocks/products.mock');

jest.mock('../../src/services/ProductsService');

const server = require('../../src/server');

describe('Products', () => {
    it('should return max 4 products searched', async () => {
        ProductsService.findByQuery.mockImplementation(() =>
            Promise.resolve(productsMock)
        );
        const query = 'macbookpro';
        const response = await request(server).get(`/api/items?q=${query}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('author');
        expect(response.body).toHaveProperty('categories');
        expect(response.body).toHaveProperty('items');
        expect(response.body.items.length).toBe(4);
    });

    it('should return error to get by query', async () => {
        const productsMock = {
            msg: 'Erro ao buscar os dados'
        };
        ProductsService.findByQuery.mockImplementation(() =>
            Promise.reject(productsMock)
        );
        const query = 'macbookpro';
        const response = await request(server).get(`/api/items?q=${query}`);
        expect(response.status).toBe(500);
        expect(response.body).toEqual(productsMock);
    });

    it('should return error bad request', async () => {
        const query = 'macbookpro';
        const response = await request(server).get(`/api/items?query=${query}`);
        expect(response.status).toBe(400);
    });
});
