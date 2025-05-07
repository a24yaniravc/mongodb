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

db.createCollection('dances');

db.getCollection('dances').insertMany([
    {
        "name": "Tango",
        "price": 27,
        "places": 20,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Roberto Garcia",
        "hall": 1
    },
    {
        "name": "Cha-cha-cha",
        "price": 80,
        "places": 18,
        "start_date": "1/07/2022",
        "end_date": "1/10/2022",
        "teacher": "Miriam Gutiérrez",
        "hall": 1
    },
    {
        "name": "Rock",
        "price": 30,
        "places": 15,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Laura Mendiola",
        "hall": 1
    },
    {
        "name": "Merengue",
        "price": 75,
        "places": 12,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Jesús Lozano",
        "hall": 2
    },
    {
        "name": "Salsa",
        "price": 32,
        "places": 10,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Jesús Lozano",
        "hall": 2
    },
    {
        "name": "Pasodoble",
        "price": 3200,
        "places": 8,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Miriam Gutierrez",
        "hall": 2
    }
]
);