const { Api } = require('../api');

class DetailsService {
    async findById(id) {
        try {
            return await Api.findById(id);
        } catch (err) {
            return err;
        }
    }

    async findDescriptionById(id) {
        try {
            return await Api.findDescriptionById(id);
        } catch (err) {
            return err;
        }
    }
}

module.exports = {
    DetailsService: new DetailsService()
};
