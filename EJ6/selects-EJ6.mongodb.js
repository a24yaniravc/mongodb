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

// Retrieve all documents in the collection.
db.getCollection('orders').find({});

// Retrieve all documents that contain paid orders (the "paid" field is "Y").
db.getCollection('orders').find({ 'paid': 'Y'})

// Retrieve all documents that contain paid orders and the orders are from before 2020.
db.getCollection('orders').find({ 'paid': 'Y', 'year': {$lt : 2020}})

// Retrieve all documents that contain unpaid orders or whose orders are from before 2020.
db.getCollection('orders').find({ $or: [ { 'paid': 'N' }, { 'year': { $lt: 2020 } } ] })

// Retrieve all documents that contain orders whose price is in NOK.
db.getCollection('orders').find({ 'cost.currency': /NOK/ })

// Retrieve all documents that contain orders whose price is less than 20 NOK.
db.getCollection('orders').find({ 'cost.price' : { $lt: 20 }, 'cost.currency': /NOK/ })

// Retrieve all documents with orders that contain product "p2".
db.getCollection('orders').find({'items.product': 'p2'})

// Retrieve all documents with orders that contain products whose quantity is less than 15.
db.getCollection('orders').find({ 'items.quantity': {$lt: 15} })

// Retrieve all documents with orders that contain products blue.
db.getCollection('orders').find({ 'items.colours': 'blue' })

// Retrieve order and year of all documents
db.getCollection('orders').find({}, { 'order': 1, 'year': 1 })

// Retrieve order, year and delivery days of documents of year 2022.
db.getCollection('orders').find({ 'year': 2022 }, { 'order': 1, 'year': 1, 'delivery_days': 1})