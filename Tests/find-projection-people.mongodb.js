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

// El 1 indica que se debe mostrar || El 0 indica que no se debe mostrar
// A menos que se especifique lo contrario, la ID siempre se muestra

// Solo el _id se puede mezclar con el resto. Los demás deben ser o todos 1 o todos 0.

// ---- // db.getCollection('people').find({"name":"Laura"},{"_id":0, "name":1, "surname":1})

db.getCollection('people').find({"name":"Laura"},{"name":0, "surname":0})