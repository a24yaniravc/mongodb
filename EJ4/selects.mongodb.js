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

// Search the titles of books whose author surname is 'Stevens'.
db.getCollection('library').find(
  { 'author.surname': 'Stevens' },
  { title: 1 }
);

// Search the books whose price is greater than 20 euros.
db.getCollection('library').find(
    {"price": { $gt: 20 }}
)

// Search the books whose title contains the word Web.
db.getCollection('library').find(
  { title: /Web/ }
)

// Search the books whose tiele contains the word Web or the word TV.
db.getCollection('library').find(
    { title: /Web|TV/ }
)

// Search the books whose title contains the word Web or the word TV (case insensitive)
db.getCollection('library').find(
    { title: /Web|TV/i }
)

// Search the books whose title length is greater than 20 characters
db.getCollection('library').find(
    {"title": /^.{20,}/}
)

// Search the books whose price is 39.95, 65.95 or 80.95
db.getCollection('library').find(
    { "price": { $in: [39.95, 65.95, 80.95]}}
)