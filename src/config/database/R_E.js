import people from  "../../models/Pa_people";
import typeusers from"../../models/Pa_tipeUsers";
import users from "../../models/Users";


users.hasOne(typeusers)
users.hasOne(people)

typeusers.belongsTo(users)
people.belongsTo(users);

//  typeusers.hasMany(users, {
//   foreignKey: "COD_TYPEUSERS", // Name for new column added to Bar
//   sourceKey: "COD_USER", // Column in Foo that FK will reference to
//   // The possible choices are RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL
//   onDelete: "RESTRICT", // Default is SET NULL
//   onUpdate: "RESTRICT", // Default is CASCADE
// });

// typeusers.belongsTo(users, {
//   foreignKey: "COD_TYPEUSERS", // Name for new column added to Bar
// });