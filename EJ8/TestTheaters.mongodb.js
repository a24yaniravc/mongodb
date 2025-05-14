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

db.getCollection('theater').drop();

// Insert a few documents into the sales collection.
db.getCollection('theater').insertMany([
  { 
    "theater_id": "UUID-1",
    "name": "Shubert Theatre",
    "location": {
        "city": "New York",
        "state": "NY",
        "country": "USA"
    },
    "seating_capacity": 1500,
   },
   {
    "theater_id": "UUID-2",
    "name": "Teatro Real",
    "location": {
        "city": "Madrid",
        "state": "Madrid",
        "country": "Spain"
    },
    "seating_capacity": 1800,
   },
    {
     "theater_id": "UUID-3",
     "name": "Sydney Opera House",
     "location": {
          "city": "Sydney",
          "state": "NSW",
          "country": "Australia"
     },
     "seating_capacity": 2000,
    },
    {
     "theater_id": "UUID-4",
     "name": "Royal Opera House",
     "location": {
          "city": "London",
          "state": "England",
          "country": "UK"
     },
     "seating_capacity": 2300,
    }
]);
