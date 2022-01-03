import people from  "../../models/Pa_people";
import typeusers from"../../models/Pa_tipeUsers";
import users from "../../models/Users";
import {Sequelize} from "sequelize"
import db from './index'
// users.hasOne(typeusers)
// users.hasOne(people)

// typeusers.belongsTo(users)
// people.belongsTo(users);

//  typeusers.hasMany(users, {
//   foreignKey: "COD_TYPEUSERS", // Name for new column added to Bar
//   sourceKey: "COD_USER", // Column in Foo that FK will reference to
//   // The possible choices are RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL
//   onDelete: "CASCADE", // Default is SET NULL
//   onUpdate: "RESTRICT", // Default is CASCADE
// });

// typeusers.belongsTo(users, {
//   foreignKey: "COD_TYPEUSERS", // Name for new column added to Bar
// });

// var Person = db.define("Person", {
//   name: Sequelize.STRING,
// });

// var Father = db.define("Father", {
//   age: Sequelize.STRING,
//   //The magic start here
//   personId: {
//     type: Sequelize.INTEGER,
//     references: "Person", // <<< Note, its table's name, not object name
//     referencesKey: "id", // <<< Note, its a column name
//   },
// });
// Person.hasMany(Father);


// const Movie = db.define("Movie", { name: Sequelize.STRING });
// const Actor = db.define("Actor", { name: Sequelize.STRING });
// Movie.belongsToMany(Actor, { through: "ActorMovies" });
// Actor.belongsToMany(Movie, { through: "ActorMovies" });


const Team = db.define("Team", {clubId:{
      type: Sequelize.BIGINT,
      primaryKey: true}, name: Sequelize.STRING, });
const Player = db.define("Player", { name: Sequelize.STRING });

Team.hasMany(Player, { foreignKey: "clubId", onDelete: "CASCADE" });
