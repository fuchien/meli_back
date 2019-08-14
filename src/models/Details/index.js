class Details {
    constructor({ details, description }) {
        this.details = details;
        this.description = description;
    }

    getResponse() {
        return {
            author: {
                name: '',
                lastname: ''
            },
            item: {
                id: this.details.id,
                title: this.details.title,
                price: {
                    currency: this.details.currency_id,
                    amount: this.details.price,
                    decimals: ''
                },
                picture: this.details.pictures[0].secure_url,
                condition: this.details.condition,
                free_shipping: this.details.shipping.free_shipping,
                sold_quantity: this.details.sold_quantity,
                description: this.description.plain_text
            }
        };
    }
}

module.exports = {
    Details: data => new Details(data)
};
