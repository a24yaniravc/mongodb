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

// Get all documents
db.getCollection('movies').find({});

// Get all documents with writer set to "J.R.R. Tolkien"
db.getCollection('movies').find({ writer: "J.R.R. Tolkien" });

// Get all documents where actors include "Brad Pitt"
db.getCollection('movies').find({ actors: "Brad Pitt" });

// Get all documents with franchise set to "The Lord of the Rings"
db.getCollection('movies').find({ franchise: "The Lord of the Rings" });

// Get all movies released in the 90s
db.getCollection('movies').find({ year: { $gte: 1990, $lt: 2000 } });

// Get all movies released before the year 2000 or after 2010
db.getCollection('movies').find({ $or: [{ year: { $lt: 2000 } }, { year: { $gt: 2010 } }] });