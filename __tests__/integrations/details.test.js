const request = require('supertest');

const server = require('../../src/server');

describe('Details', () => {
    it('should return item details by id', async () => {
        const id = 'MLA795803301';
        const response = await request(server).get(`/api/items/${id}`);
        expect(response.status).toBe(200);
    });
});
