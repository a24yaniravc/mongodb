/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('yaniravc');

db.getCollection('orders').drop();
db.createCollection('orders');

db.getCollection('orders').insertMany([{
    "order": "o1",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 40,
        "currency": "NOK"
    },
    "items": [{
        "product": "p1",
        "colours": ["blue", "black"],
        "quantity": 15
    }],
    "delivery_days": 5
},
{
    "order": "o2",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 15,
        "currency": "EUR"
    },
    "items": [{
        "product": "p2",
        "colours": ["white"],
        "quantity": 4
    },
    {
        "product": "p3",
        "colours": ["white", "black"],
        "quantity": 1
    }
    ],
    "delivery_days": 4
},
{
    "order": "o3",
    "year": 2020,
    "paid": "N",
    "cost": {
        "price": 35,
        "currency": "EUR"
    },
    "items": [{
        "product": "p3",
        "colours": ["blue", "black"],
        "quantity": 4
    }],
    "delivery_days": 4
},
{
    "order": "o4",
    "year": 2019,
    "paid": "Y",
    "cost": {
        "price": 18,
        "currency": "NOK"
    },
    "items": [{
        "product": "p2",
        "colours": ["pink", "black"],
        "quantity": 14
    },
    {
        "product": "p4",
        "colours": ["white"],
        "quantity": 1
    }
    ],
    "delivery_days": 2
},
{
    "order": "o5",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 25,
        "currency": "NOK"
    },
    "items": [{
        "product": "p1",
        "quantity": 15
    }],
    "delivery_days": 3
}
]
)