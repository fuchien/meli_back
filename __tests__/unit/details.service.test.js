const { DetailsService } = require('../../src/services/DetailsService');
const { Api } = require('../../src/services/api');

jest.mock('../../src/services/api');

describe('Details service', () => {
    it('should return item details by id', async () => {
        const detailsMock = {
            title: 'Reproductor Apple iPod Touch 32gb (7 Generacion) Gtia ',
            seller_id: 133799638,
            price: 18999,
            sold_quantity: 1
        };
        Api.findById.mockImplementation(() => Promise.resolve(detailsMock));
        const id = 'MLA795803301';
        const response = await DetailsService.findById(id);
        expect(response).toHaveProperty('title');
        expect(response).toHaveProperty('seller_id');
        expect(response).toHaveProperty('price');
        expect(response).toHaveProperty('sold_quantity');
        expect(response).toEqual(detailsMock);
    });

    it('should return error to get details', async () => {
        const detailsMock = {
            msg: 'Erro ao pegar os dados'
        };
        Api.findById.mockImplementation(() => Promise.reject(detailsMock));
        const id = 'MLA795803301';
        const response = await DetailsService.findById(id);
        expect(response).toHaveProperty('msg');
        expect(response).toEqual(detailsMock);
    });

    it('should return item description by id', async () => {
        const descriptionMock = {
            plain_text:
                'Aspectos Destacados Del Producto\n\nPantalla Retina IPS Multi-Touch de 4 "\nResolución nativa de 1136 x 640 a 326 ppi'
        };
        Api.findDescriptionById.mockImplementation(() =>
            Promise.resolve(descriptionMock)
        );
        const id = 'MLA795803301';
        const response = await DetailsService.findDescriptionById(id);
        expect(response).toHaveProperty('plain_text');
        expect(response).toEqual(descriptionMock);
    });

    it('should return error to get description', async () => {
        const descriptionMock = {
            msg: 'Erro ao pegar a descricao'
        };
        Api.findDescriptionById.mockImplementation(() =>
            Promise.reject(descriptionMock)
        );
        const id = 'MLA795803301';
        const response = await DetailsService.findDescriptionById(id);
        expect(response).toHaveProperty('msg');
        expect(response).toEqual(descriptionMock);
    });
});
