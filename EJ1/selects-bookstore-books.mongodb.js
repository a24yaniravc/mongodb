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
DBQuery.shellBatchSize = 50;

// Get the titles of all books
db.getCollection('bookstore').find({},{_id:0, title:1})

// Select all the books that have a price with a value that is less than 30.
db.getCollection('bookstore').find({ price: { $lt: 30 } })

// Select all titles from books that have a price with a value that is less than 30.
db.getCollection('bookstore').find({ price: { $lt: 30 } }, {_id:0, title: 1 })

// Select all titles from books that have a price with a value greater than 30 in alphabetical order.
db.getCollection('bookstore').find({ price: { $gt: 30 } }, {_id:0, title: 1 }).sort({ title: 1 })

// Select all books published between 2003 and 2004.
db.getCollection('bookstore').find({ year: { $gte: 2003, $lte: 2004 } })

