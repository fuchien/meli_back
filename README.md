# Melicidade backend test

> Challenge to create a simple backend for front API to GET data from MELI API

## Developing

First, you need to install [**docker**](#Docker) and [**docker-compose**](https://docs.docker.com/compose/install) for **server** or you can run with [**node**](#Node) to start server

_Clone the repository_

```
git clone https://github.com/fuchien/meli_back.git
```

## Docker

_Run docker-compose to start the server_

```
docker-compose up
```

---

## Node

_Install dependencies_

```
npm install
```

_Start server_

```
npm install
```

---

### For both, the _PORT_ is _3333_\*\*

_Open your favourite browser or postman, and test_

```
http://localhost:3333
```

## Description and solution

The backend will receive the path and query params, so request in MELI API.

---

## Testing

To test the application, only need to run script

```
npm run test
```

You will have each test in **terminal** and **coverage** for each file. _Integration and Unit tests_

---

## Endpoint list:

-   [**GET** /api/items/:id](#getDetails)
-   [**GET** /api/items?q=](#getProducts)

---

## getDetails

Returns all games log object

**Input:** _path parameter_

```
/api/items/:id
```

| params | required | type   | example        |
| ------ | -------- | ------ | -------------- |
| `id`   | true     | string | `MLA795803301` |

**Output:**

```
{
  "author": {
    "name": "",
    "lastname": ""
  },
  "item": {
    "id": "MLA795803301",
    "title": "Reproductor Apple iPod Touch 32gb (7 Generacion) Gtia ",
    "price": {
      "currency": "ARS",
      "amount": 26599,
      "decimals": ""
    },
    "picture": "https://mla-s2-p.mlstatic.com/961788-MLA31657666807_082019-O.jpg",
    "condition": "new",
    "free_shipping": true,
    "sold_quantity": 1,
    "description": "Aspectos Destacados Del Producto\n\nPantalla Retina IPS Multi-Touch de 4 \"\nResolución nativa de 1136 x 640..."
  }
}
```

---

## getProducts

Returns the game log object

**Input:** _query parameter_

```
/api/items?q=
```

| params | required | type   | example   |
| ------ | -------- | ------ | --------- |
| `q`    | true     | string | `iphoneX` |

**Output:**

```
{
  "author": {
    "name": "",
    "lastname": ""
  },
  "categories": [
    "Celulares y Teléfonos",
    "Celulares y Smartphones"
  ],
  "items": [
    {
      "id": "MLA771186525",
      "title": "iPhone 7 Apple 32gb Sellado Libre + Original Gtia + Templado",
      "price": {
        "currency": "ARS",
        "amount": 39989.99,
        "decimals": ""
      },
      "address": {
        "state_id": "AR-C",
        "state_name": "Capital Federal",
        "city_id": null,
        "city_name": "Palermo Soho"
      },
      "picture": "http://mla-s2-p.mlstatic.com/751692-MLA31081757564_062019-I.jpg",
      "condition": "new",
      "free_shipping": true
    }...
  ]
}
```
