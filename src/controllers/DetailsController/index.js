const { DetailsService } = require('../../services/DetailsService');

class DetailsController {
    async show(req, res) {
        try {
            const id = req.params.id;
            const details = await DetailsService.findById(id);
            const description = await DetailsService.findDescriptionById(id);
            return res.status(200).json({ details, description });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = {
    DetailsController: new DetailsController()
};
