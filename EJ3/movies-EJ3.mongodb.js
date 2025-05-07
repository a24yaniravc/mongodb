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
db.getCollection('movies').drop()

// Create one collection in your database named movies.
db.createCollection('movies');

// Create eight documents into the movies collection.

db.getCollection('movies').insertMany([
    {
        "title": "Bullet Train",
        "writer": "Kotaro Isaka",
        "year": 2022,
        "actors": [
            "Brad Pitt",
            "Joey King"
        ],
    },
    {
        "title": "The Shawshank Redemption",
        "writer": "Stephen King",
        "year": 1994,
        "actors": [
            "Tim Robbins",
            "Morgan Freeman"
        ],
    },
    {
        "title": "The Hunger Games",
        "writer": "Suzanne Collins",
        "year": 2012,
        "actors": [
            "Jennifer Lawrence",
            "Josh Hutcherson",
            "Liam Hemsworth"
        ],
    },
    {
        "title": "The Fellowship of the Ring",
        "writer": "J.R.R. Tolkien",
        "year": 2001,
        "actors": [
            "Elijah Wood",
            "Ian McKellen",
            "Orlando Bloom"
        ],
        "franchise": "The Lord of the Rings"
    },
    {
        "title":"The Two Towers",
        "writer": "J.R.R. Tolkien",
        "year": 2002,
        "actors": [
            "Elijah Wood",
            "Ian McKellen",
            "Orlando Bloom"
        ],
        "franchise": "The Lord of the Rings"
    },
    {
        "title":"The Return of the King",
        "writer": "J.R.R. Tolkien",
        "year": 2003,
        "actors": [
            "Elijah Wood",
            "Ian McKellen",
            "Orlando Bloom"
        ],
        "franchise": "The Lord of the Rings",
        "sypnosis": "The final battle for Middle-earth begins. As the darkness of Mordor spreads, Frodo and Sam approach Mount Doom to destroy the One Ring. Meanwhile, Aragorn, Legolas, and Gimli lead the fight against Sauron's forces at Minas Tirith."
    },
    {
        "title": "The Dark Knight",
    },
    {
        "title": "Pulp Fiction",
    }
])
