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

    async findByQuery(query) {
        try {
            const { data } = await api.get(`/sites/MLA/search?q=${query}`);
            return data;
        } catch (err) {
            return {
                err,
                msg: 'Erro ao buscar os produtos'
            };
        }
    }
}

module.exports = {
    Api: new Api()
};
