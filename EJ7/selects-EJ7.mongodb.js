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
DBQuery.shellBatchSize = 3000;


//Search all the characteristics related with the pokemon named Squirtle.
db.getCollection('pokemon').find({ "name.english": 'Squirtle' });

//Modify the information about Squirtle adding it a description. The description must be: "Squirtle's shell is not merely used for protection".
db.getCollection('pokemon').updateOne({ "name.english": 'Squirtle' }, {$set : { "description": "Squirtle's shell is not merely used for protection" } });

//After this modification show again all characteristics related to Squirtle.
db.getCollection('pokemon').find({ "name.english": 'Squirtle' });

//Show a list with the english name of all Pokemons with attack 20 or lower.
db.getCollection('pokemon').find({ "base.Attack": { $lte: 20 } }, { "name.english": 1, _id: 0 });

//Show a list with the english name of all Pokemons with attack 50 or greater and type Poison.
db.getCollection('pokemon').find({ "base.Attack": {$gte: 50}, "type": "Poison"}, { "name.english": 1, _id: 0 });

//Show a list with the english name and type of all Pokemons with name Pikachu or with attack 20 or lower.
db.getCollection('pokemon').find({ $or: [{"name.english": "Pikachu"}, {"base.Attack": {$lte: 20}}] })

//Add same extra attacks for pokemons: Pikachu, Squirtle, Bulbasaur and Charmander. Use only one query. The extra attacks must be strong attack and ultra attack. 
db.getCollection('pokemon')
    .updateMany({ "name.english": { $in: ["Pikachu", "Squirtle", "Bulbasaur", "Charmander"] }},
        { $set: { "attacks": [ { "name": "strong attack", "type": "normal", "damage": 40 }, { "name": "ultra attack", "type": "normal", "damage": 80 } ] } });

db.getCollection('pokemon').find({ "name.english": { $in: ["Pikachu", "Squirtle", "Bulbasaur", "Charmander"] } }, { "name.english": 1, "attacks": 1, _id: 0 });

//Add 10 to the value of attack of all pokemon whose name begins with characters: Pik.
db.getCollection('pokemon').updateMany({ "name.english": /^Pik/ }, { $inc: { "base.Attack": 10 } });

db.getCollection('pokemon').find({ "name.english": /^Pik/ }, { "name.english": 1, "base.Attack": 1, _id: 0 });

//Search english name of Pokemons of type Bug.
db.getCollection('pokemon').find({ "type": "Bug"}, { "name.english": 1, _id: 0 });

//Search the french name of Pokemons that are not of type Bug.
db.getCollection('pokemon').find({ "type": { $ne: "Bug" } }, { "name.french": 1, _id: 0 });

//Search english and french name of Pokemons that are not of electric type. 
db.getCollection('pokemon').find({ "type": { $ne: "Electric" } }, { "name.english": 1, "name.french": 1, _id: 0 });

//Search english and french name of Pokemons whose defense is not lower than 49.
db.getCollection('pokemon').find({ "base.Defense": { $gte: 49 } }, { "name.english": 1, "name.french": 1, _id: 0 });

//Show all distinct types of Pokemons.
db.getCollection('pokemon').distinct("type");

//Show the info of the first five Pokemons.
db.getCollection('pokemon').find().limit(5);

//Show the info of the second five Pokemons.
db.getCollection('pokemon').find().skip(5).limit(5);

//Count the number of Pokemons in the pokemon collection.
db.getCollection('pokemon').find().count();

//Count the number of Pokemons whose type is fire.
db.getCollection('pokemon').find({ "type": "Fire" }).count();

//Count the number of Pokemons whose defense is greater than 70.
db.getCollection('pokemon').find({ "base.Defense": { $gt: 70 } }).count();

//Delete all pokemons of type fire.
db.getCollection('pokemon').deleteMany( {"type": "Fire"} );

//Delete one pokemon of your election.
db.getCollection('pokemon').deleteOne( {"name.english": "Pikachu"} );