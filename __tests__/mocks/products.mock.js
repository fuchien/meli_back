module.exports = {
    productsMock: {
        query: 'macbookpro',
        results: [
            {
                id: 'MLA724490168',
                site_id: 'MLA',
                title: 'Macbook Pro 2017 Core I5 8gb 128gb 13.3 Retina Nuevas'
            },
            {
                id: 'MLA742340051',
                site_id: 'MLA',
                title: 'Macbook Pro I5 1 Tera Disco Duro 8 Ram Impecable'
            },
            {
                id: 'MLA792311553',
                site_id: 'MLA',
                title: 'Apple Macbook Pro Mr9r2 13,3 8gb 512gb I5 Space Gray'
            },
            {
                id: 'MLA782096181',
                site_id: 'MLA',
                title:
                    'Macbook Pro 15 Laptop A1286 (mid 2010) Intel Core I5 4gb 320'
            }
        ],
        shipping: {
            mode: 'me2',
            tags: ['mandatory_free_shipping'],
            dimensions: null,
            local_pick_up: true,
            free_shipping: true,
            logistic_type: 'xd_drop_off',
            store_pick_up: false
        },
        filters: [
            {
                id: 'category',
                name: 'Categorías',
                type: 'text',
                values: [
                    {
                        id: 'MLA9951',
                        name: 'Macbook',
                        path_from_root: [
                            {
                                id: 'MLA1648',
                                name: 'Computación'
                            },
                            {
                                id: 'MLA1870',
                                name: 'Apple'
                            },
                            {
                                id: 'MLA9951',
                                name: 'Macbook'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'LINE',
                name: 'Línea',
                type: 'STRING',
                values: [
                    {
                        id: '95588',
                        name: 'MacBook Pro'
                    }
                ]
            },
            {
                id: 'BRAND',
                name: 'Marca',
                type: 'STRING',
                values: [
                    {
                        id: '9344',
                        name: 'Apple'
                    }
                ]
            }
        ]
    }
};
