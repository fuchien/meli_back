const { ProductsService } = require('../../src/services/ProductsService');
const { Api } = require('../../src/services/api');

jest.mock('../../src/services/api');

describe('Products service', () => {
    it('should return 4 products', async () => {
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
        Api.findByQuery.mockImplementation(() => Promise.resolve(productsMock));
        const query = 'macbook pro';
        const response = await ProductsService.findByQuery(query);
        expect(response).toHaveProperty('query');
        expect(response).toHaveProperty('results');
        expect(response.results.length).toBe(4);
        expect(response).toEqual(productsMock);
    });

    it('should return error to get details', async () => {
        const productsMock = {
            msg: 'Erro ao buscar os produtos'
        };
        Api.findByQuery.mockImplementation(() => Promise.reject(productsMock));
        const query = 'macbook pro';
        const response = await ProductsService.findByQuery(query);
        expect(response).toHaveProperty('msg');
        expect(response).toEqual(productsMock);
    });
});
