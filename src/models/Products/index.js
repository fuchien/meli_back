const { Product } = require('../Product');

class Products {
    constructor(data) {
        this.data = data;
    }

    getItems(results) {
        return results.map(result => Product(result).getResponse());
    }

    getFilter(filters) {
        const categoryIndex = filters.findIndex(
            filter => filter.id === 'category'
        );
        return filters[categoryIndex].values[0].path_from_root.map(
            value => value.name
        );
    }

    getResponse() {
        const items = this.getItems(this.data.results);
        const categories = this.getFilter(this.data.filters);
        return {
            author: {
                name: '',
                lastname: ''
            },
            categories,
            items
        };
    }
}

module.exports = {
    Products: data => new Products(data)
};
