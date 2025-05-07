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

// Create a collection called customers and insert the document customer.json. 
db.getCollection('customers').drop();
db.createCollection('customers');

db.getCollection('customers').insertOne([
    {
        "phone": "032345432134",
        "BusinessType": ["Sell", "Sugar", "Drinks"],
        "Reference": 100,
        "Company": "Coca-Cola"
    }
]);

// Check if the document is inserted correctly
use('yaniravc');
db.getCollection('customers').find();

// Create a collection called transactions (drop if it already exists) 
// and bulk load the data from a json file, transactions.json.
use('yaniravc');
db.getCollection('transactions').drop();
db.createCollection('transactions');

db.getCollection('transactions').insertMany([
        {
            "Id": 100,
            "Name": "John",
            "TransactionId": "tran1",
            "Transaction": [
                {
                    "ItemId": "a100",
                    "price": 200
                },
                {
                    "ItemId": "a110",
                    "price": 200
                }
            ],
            "Subscriber": true,
            "Payment": {
                "Type": "Credit-Card",
                "Total": 400,
                "Success": true
            },
            "Note": "1st Complete Record"
        },
        {
            "Id": 101,
            "Name": "Tom",
            "TransactionId": "tran2",
            "Transaction": [
                {
                    "ItemId": "a100",
                    "price": 200
                },
                {
                    "ItemId": "a110",
                    "price": 200
                }
            ],
            "Subscriber": true,
            "Payment": {
                "Type": "Debit-Card",
                "Total": 400,
                "Success": true
            },
            "Note": null
        },
        {
            "Id": 102,
            "Name": "Margaret",
            "TransactionId": "tran3",
            "Transaction": [
                {
                    "ItemId": "a100",
                    "price": 200
                },
                {
                    "ItemId": "a110",
                    "price": 200
                }
            ],
            "Subscriber": true,
            "Payment": {
                "Type": "Credit-Card",
                "Total": 400,
                "Success": true
            }
        },
        {
            "Id": 103,
            "Name": "Dylan",
            "TransactionId": "tran4",
            "Transaction": [
                {
                    "ItemId": "a100",
                    "price": 200
                },
                {
                    "ItemId": "a110",
                    "price": 200
                }
            ],
            "Subscriber": true,
            "Payment": null,
            "Note": "Payment is Null"
        }
    ]);


use('yaniravc');
db.getCollection('transactions').find();