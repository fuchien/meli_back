// SERVICES
const { DetailsService } = require('../../services/DetailsService');

// MODELS
const { Details } = require('../../models/Details');

class DetailsController {
    async show(req, res) {
        try {
            const id = req.params.id;
            const details = await DetailsService.findById(id);
            const description = await DetailsService.findDescriptionById(id);
            const response = Details({ details, description }).getResponse();
            response.success = true;
            return res.status(200).json(response);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = {
    DetailsController: new DetailsController()
};
