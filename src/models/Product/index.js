class Product {
    constructor(data) {
        this.data = data;
    }

    getResponse() {
        return {
            id: this.data.id,
            title: this.data.title,
            price: {
                currency: this.data.currency_id,
                amount: this.data.price,
                decimals: ''
            },
            address: this.data.address,
            picture: this.data.thumbnail,
            condition: this.data.condition,
            free_shipping: this.data.shipping
                ? this.data.shipping.free_shipping
                : false
        };
    }
}

module.exports = {
    Product: data => new Product(data)
};
