const { Api } = require('../api');

// Variables
const variables = require('../../config/variables');

// Mocks
const { mockDescription, mockDetails } = require('./mock');

class DetailsService {
    async findById(id) {
        try {
            if (variables.useMock) {
                return mockDetails;
            }
            return await Api.findById(id);
        } catch (err) {
            return err;
        }
    }

    async findDescriptionById(id) {
        try {
            if (variables.useMock) {
                return mockDescription;
            }
            return await Api.findDescriptionById(id);
        } catch (err) {
            return err;
        }
    }
}

module.exports = {
    DetailsService: new DetailsService()
};
