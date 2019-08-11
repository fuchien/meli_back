const request = require('supertest');
const { DetailsService } = require('../../src/services/DetailsService');

jest.mock('../../src/services/DetailsService');

const server = require('../../src/server');

describe('Details', () => {
    it('should return item details and description by id', async () => {
        const detailsMock = {
            title: 'Reproductor Apple iPod Touch 32gb (7 Generacion) Gtia ',
            seller_id: 133799638,
            price: 18999,
            sold_quantity: 1
        };
        const descriptionMock = {
            plain_text:
                'Aspectos Destacados Del Producto\n\nPantalla Retina IPS Multi-Touch de 4 "\nResolución nativa de 1136 x 640 a 326 ppi'
        };
        DetailsService.findById.mockImplementation(() =>
            Promise.resolve(detailsMock)
        );
        DetailsService.findDescriptionById.mockImplementation(() =>
            Promise.resolve(descriptionMock)
        );
        const id = 'MLA795803301';
        const response = await request(server).get(`/api/items/${id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('details');
        expect(response.body.details).toEqual(detailsMock);
        expect(response.body.description).toEqual(descriptionMock);
    });

    it('should return error to get details', async () => {
        const detailsMock = {
            msg: 'Erro ao pegar os dados'
        };
        DetailsService.findById.mockImplementation(() =>
            Promise.reject(detailsMock)
        );
        const id = 'MLA795803301';
        const response = await request(server).get(`/api/items/${id}`);
        expect(response.status).toBe(500);
        expect(response.body).toEqual(detailsMock);
    });
});
