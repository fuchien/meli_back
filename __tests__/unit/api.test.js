const { Api } = require('../../src/services/api');
const { api } = require('../../src/config/api');

// MOCKS
const {
    mockDescription,
    mockDetails
} = require('../../src/services/DetailsService/mock');
const { mockProducts } = require('../../src/services/ProductsService/mock');

jest.mock('../../src/config/api');

describe('API service', () => {
    it('should return data findById', async () => {
        api.get.mockImplementation(() =>
            Promise.resolve({ data: mockDetails })
        );
        const id = 'macbook pro';
        const response = await Api.findById(id);
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('title');
        expect(response).toHaveProperty('pictures');
        expect(response).toHaveProperty('shipping');
        expect(response).toEqual(mockDetails);
    });

    it('should return error findById', async () => {
        const msg = 'Erro ao buscar os detalhes do pedido';
        api.get.mockImplementation(() => Promise.reject());
        const id = 'macbook pro';
        const response = await Api.findById(id);
        expect(response).toHaveProperty('msg');
        expect(response.msg).toEqual(msg);
    });

    it('should return data findDescriptionById', async () => {
        api.get.mockImplementation(() =>
            Promise.resolve({ data: mockDescription })
        );
        const id = 'macbook pro';
        const response = await Api.findDescriptionById(id);
        expect(response).toHaveProperty('plain_text');
        expect(response).toEqual(mockDescription);
    });

    it('should return error findDescriptionById', async () => {
        const msg = 'Erro ao buscar a descricao do pedido';
        api.get.mockImplementation(() => Promise.reject());
        const id = 'macbook pro';
        const response = await Api.findDescriptionById(id);
        expect(response).toHaveProperty('msg');
        expect(response.msg).toEqual(msg);
    });

    it('should return data findByQuery', async () => {
        api.get.mockImplementation(() =>
            Promise.resolve({ data: mockProducts })
        );
        const id = 'macbook pro';
        const response = await Api.findByQuery(id);
        expect(response).toHaveProperty('results');
        expect(response).toEqual(mockProducts);
    });

    it('should return error findByQuery', async () => {
        const msg = 'Erro ao buscar os produtos';
        api.get.mockImplementation(() => Promise.reject());
        const id = 'macbook pro';
        const response = await Api.findByQuery(id);
        expect(response).toHaveProperty('msg');
        expect(response.msg).toEqual(msg);
    });
});
