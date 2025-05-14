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

db.getCollection('sales').insertMany([
    {
        "movie_id": "UUID-1",
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "release_year": 1994,
        "duration": 142,
        "rating": 4.6,
        "actors": [{ "name": "Morgan Freeman" }, { "name": "Tim Robbins" }],
    },
    {
        "movie_id": "UUID-2",
        "title": "The Godfather",
        "genre": "Crime",
        "release_year": 1972,
        "duration": 175,
        "rating": 4.8,
        "actors": [{ "name": "Marlon Brando" }, { "name": "Al Pacino" }],
    },
    {
        "movie_id": "UUID-3",
        "title": "The Dark Knight",
        "genre": "Action",
        "release_year": 2008,
        "duration": 152,
        "rating": 4.5,
        "actors": [{ "name": "Christian Bale" }, { "name": "Heath Ledger" }],
    },
]);
