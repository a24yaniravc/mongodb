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

// Show the name of all dances
db.getCollection('dances').find({}, { "name": 1 });

// Display the name of all dances where the price is greater than 40
db.getCollection('dances').find({ "price": { $gt:40 }}, { "name": 1 })

// Display the dances sorted by name
db.getCollection('dances').find({}, { "name": 1 }).sort({ "name" : 1 })

// Show all information about the dance called Pasodoble
db.getCollection('dances').find({ "name": "Pasodoble" })

// Show the name of the dances where the teacher's surname is Lozano
db.getCollection('dances').find({ "teacher" : /Lozano/ }, { "name" : 1})

// Show the first 3 dances of the collection
db.getCollection('dances').find().limit(3)