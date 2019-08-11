const { api } = require('../config/api');

class Api {
    async findById(id) {
        try {
            const { data } = await api.get(`/items/${id}`);
            return data;
        } catch (err) {
            return {
                err,
                msg: 'Erro ao buscar os detalhes do pedido'
            };
        }
    }

    async findDescriptionById(id) {
        try {
            const { data } = await api.get(`/items/${id}/description`);
            return data;
        } catch (err) {
            return {
                err,
                msg: 'Erro ao buscar a descricao do pedido'
            };
        }
    }
}

module.exports = {
    Api: new Api()
};
