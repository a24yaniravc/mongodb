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

// db.getCollection('library').drop();
db.createCollection('library');

db.getCollection('library').insertMany([
      {
        "title": "TCP/IP Illustrated",
        "author": {
          "surname": "Stevens",
          "name": "W."
        },
        "publisher": "Addison-Wesley",
        "price": 65.95
      },
      {
        "title": "Advan Programming for Unix environment",
        "author": {
          "surname": "Stevens",
          "name": "W."
        },
        "publisher": "Addison-Wesley",
        "price": 65.95
      },
      {
        "title": "Data on the Web",
        "author": [
          {
            "surname": "Abiteboul",
            "name": "Serge"
          },
          {
            "surname": "Buneman",
            "name": "Peter"
          },
          {
            "surname": "Suciu",
            "name": "Dan"
          }
        ],
        "publisher": "Morgan Kaufmann publishers",
        "price": 39.95
      },
      {
        "title": "Economics of Technology for Digital TV",
        "editor": {
          "surname": "Gerbarg",
          "name": "Darcy",
          "membership": "CITI"
        },
        "publisher": "Kluwer Academic publishers",
        "price": 129.95
      }
    ])