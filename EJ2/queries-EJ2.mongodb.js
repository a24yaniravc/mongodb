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
config.set("displayBatchSize", 1000);

// Find a record in transactions where name is Tom
use('yaniravc');
db.getCollection('transactions').find({Name: 'Tom'});

// Find a record in transactions where total payment amount is 400.
use('yaniravc');
db.getCollection('transactions').find({'Payment.Total': 400});

// Find a record in transactions collection where price is greater than 400
use('yaniravc');
db.getCollection('transactions').find({'Transaction.price': {$gt: 400}});

// Find a record in transacaions collection where note is null or missing
use('yaniravc');
db.getCollection('transactions').find({'Note':null})