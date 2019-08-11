const request = require('supertest');
const { ProductsService } = require('../../src/services/ProductsService');

jest.mock('../../src/services/ProductsService');

const server = require('../../src/server');

describe('Products', () => {
    it('should return max 4 products searched', async () => {
        const productsMock = {
            query: 'macbookpro',
            results: [
                {
                    id: 'MLA724490168',
                    site_id: 'MLA',
                    title:
                        'Macbook Pro 2017 Core I5 8gb 128gb 13.3 Retina Nuevas'
                },
                {
                    id: 'MLA742340051',
                    site_id: 'MLA',
                    title: 'Macbook Pro I5 1 Tera Disco Duro 8 Ram Impecable'
                },
                {
                    id: 'MLA792311553',
                    site_id: 'MLA',
                    title:
                        'Apple Macbook Pro Mr9r2 13,3 8gb 512gb I5 Space Gray'
                },
                {
                    id: 'MLA782096181',
                    site_id: 'MLA',
                    title:
                        'Macbook Pro 15 Laptop A1286 (mid 2010) Intel Core I5 4gb 320'
                }
            ]
        };
        ProductsService.findByQuery.mockImplementation(() =>
            Promise.resolve(productsMock)
        );
        const query = 'macbookpro';
        const response = await request(server).get(`/api/items?q=${query}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('query');
        expect(response.body).toHaveProperty('results');
        expect(response.body).toEqual(productsMock);
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
});
