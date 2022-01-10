import { PA_POEPLE } from "../../models/Pa_people";
import { PA_TypeUsers } from "../../models/Pa_typeUsers"; //roles
import { USERS } from "../../models/Users";
import { PA_ADDRES } from "../../models/Pa_addres";
import { PA_CITIES } from "../../models/Pa_cities";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_EMAIL } from "../../models/Pa_email";
import { PA_PHONES } from "../../models/Pa_phones";
import { PA_STATES } from "../../models/Pa_states";

import { PA_CUSTOMES } from "../../models/Pa_customes";
import { BO_LOCKER } from "../../models/BO_locker";
import { Se_PASS_RESET } from "../../models/security/SE_pass_reset";



import { SE_PERMISOS } from "../../models/security/SE_permisos";
import { MODEL_HAS_PERMISOS } from "../../models/relations/MODEL_has_permisos";
import { MODEL_HAS_ROLES } from "../../models/relations/MODEL_has_typeUser";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";

/**Entidad Relacioens de tablas */
import { REL_PEOPLE_PHONE } from "../../models/relations/REL_people_phone";
import { REL_PEOPLE_EMAIL } from "../../models/relations/REL_people_email";



// //Relacion de uno a uno
// /**
//  * Foo.hasOne(Bar, {
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })
//  * Bar.belongsTo(Foo)
//  */

// //Relacion de uno a muchos
// /*
//  * Team.hasMoany(Player, {
//   onDelete: 'RESTRICT',
//   onUpdate: 'RESTRICT'
// })
//  * Player.belongsTo(Team)
// */

// //Relacion de muchos a muchos 

// /**
//  * 
//  * Movie.belongsToMany(Actor, { through: 'ActorMovies' });
// Actor.belongsToMany(Movie, { through: 'ActorMovies' });
//  * 
//  */


// //Carga diferida
// /**
//  * const awesomeCaptain = await Captain.findOne({
//   where: {
//     name: "Jack Sparrow"
//   }
// });
// // Do stuff with the fetched captain
// console.log('Name:', awesomeCaptain.name);
// console.log('Skill Level:', awesomeCaptain.skillLevel);
// // Now we want information about his ship!
// const hisShip = await awesomeCaptain.getShip();
// // Do stuff with the ship
// console.log('Ship Name:', hisShip.name);
//  * 
//  */
// //Carga ansiosa
// /**
// const awesomeCaptain = await Captain.findOne({
//   where: {
//     name: "Jack Sparrow"
//   },
//   include: Ship
// });
// // Now the ship comes with it
// console.log('Name:', awesomeCaptain.name);
//  * 
//  */

const relaciones = ()=>{
  //Relaciones de personas con las tablas de informacion necesaria
PA_EMAIL.belongsToMany(PA_POEPLE, {
  through: REL_PEOPLE_EMAIL,
  foreignKey: "COD_EMAIL",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE",
});

PA_POEPLE.belongsToMany(PA_EMAIL, {
  through: REL_PEOPLE_EMAIL,
  foreignKey: "COD_PEOPLE",
  comment: "COD OF TYPE OF EMAIL",
  onDelete: "CASCADE",
});

PA_PHONES.belongsToMany(PA_POEPLE, {
  through: REL_PEOPLE_PHONE,
  foreignKey: "COD_PHONE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE",
});

PA_POEPLE.belongsToMany(PA_PHONES, {
  through: REL_PEOPLE_PHONE,
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PHONES",
});
PA_POEPLE.hasMany(USERS, {
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS",
});

PA_CITIES.hasMany(PA_ADDRES, {
  foreignKey: "COD_CITY",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS",
});

PA_COUNTRIES.hasMany(PA_STATES, {
  foreignKey: "COD_COUNTRY",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF STATES",
});

PA_STATES.hasMany(PA_CITIES, {
  foreignKey: "COD_STATE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF CITIES",
});

// Relaciones de tablas de roles 



SE_PERMISOS.belongsToMany(USERS, {
  through: MODEL_HAS_PERMISOS,
  foreignKey: {
    name: "COD_PERMISOS",
  },
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE",
});

USERS.belongsToMany(SE_PERMISOS, {
  through: MODEL_HAS_PERMISOS,
  foreignKey: {
    name: "COD_USER",
  },
  comment: "COD OF TYPE OF EMAIL",
  onDelete: "CASCADE",
});


SE_PERMISOS.belongsToMany(PA_TypeUsers, {
  through: MODEL_TYPEUSER_HAS_PERMISOS,
  foreignKey: {
    name: "COD_PERMISOS",
  },
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE",
});


PA_TypeUsers.belongsToMany(SE_PERMISOS, {
  through: MODEL_TYPEUSER_HAS_PERMISOS,
  foreignKey: {
    name: "COD_TYPEUSERS",
  },
  comment: "COD OF TYPE OF EMAIL",
  onDelete: "CASCADE",
});


PA_TypeUsers.belongsToMany(USERS, {
  through: MODEL_HAS_ROLES,
  foreignKey: {
    name: "COD_TYPEUSERS",
  },
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE",
});

USERS.belongsToMany(PA_TypeUsers, {
  through: MODEL_HAS_ROLES,
  foreignKey: {
    name: "COD_USER",
  },
  comment: "COD OF TYPE OF EMAIL",
  onDelete: "CASCADE",
});



}

const insertat =async  ()=>{
  
await PA_TypeUsers.create({
  NOM_TYPE: "ADMIN",
  DES_TYPE: " Perfil administrador",
  USR_ADD: "admin",
});

await PA_TypeUsers.create({
  NOM_TYPE: "CLIENTE",
  DES_TYPE: " Perfil cliente",
  USR_ADD: "admin",
});

await PA_TypeUsers.create({
  NOM_TYPE: "EMPLEADO",
  DES_TYPE: " Perfil empleado",
  USR_ADD: "admin",
});

/////////////////////Permisos

await SE_PERMISOS.create({
  NAM_PERMISOS: "admin.crear",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "admin.view",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "admin.update",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "admin.delete",
  USR_ADD: "admin",
});

await SE_PERMISOS.create({
  NAM_PERMISOS: "empleado.crear",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "empleado.view",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "empleado.update",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "empleado.delete",
  USR_ADD: "admin",
});

await SE_PERMISOS.create({
  NAM_PERMISOS: "cliente.crear",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "cliente.view",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "cliente.update",
  USR_ADD: "admin",
});
await SE_PERMISOS.create({
  NAM_PERMISOS: "cliente.delete",
  USR_ADD: "admin",
});
        
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 1,
  COD_TYPEUSERS: 1,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 2,
  COD_TYPEUSERS: 1,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 3,
  COD_TYPEUSERS: 1,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 4,
  COD_TYPEUSERS: 1,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 5,
  COD_TYPEUSERS: 2,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 6,
  COD_TYPEUSERS: 2,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 7,
  COD_TYPEUSERS: 2,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 8,
  COD_TYPEUSERS: 2,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 9,
  COD_TYPEUSERS: 3,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 10,
  COD_TYPEUSERS: 3,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 11,
  COD_TYPEUSERS: 3,
});
MODEL_TYPEUSER_HAS_PERMISOS.create({
  COD_PERMISOS: 12,
  COD_TYPEUSERS: 3,
});
    
}

const relaciones_has_roles =  ()=>{


}

relaciones()
insertat()

