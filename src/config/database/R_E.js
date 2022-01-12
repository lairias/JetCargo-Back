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
import { REL_PEOPLE_ADDRES } from "../../models/relations/REL_people_addres";

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

const relaciones = async() => {
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
      name: "COD_PERMISO",
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

  SE_PERMISOS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });
  USERS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_USER",
    },
  });

  //***************** */
  PA_ADDRES.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_ADDRESS",
    },
    onDelete: "CASCADE",
    comment: "COD OF ADDRES",
  });

  PA_POEPLE.belongsToMany(PA_ADDRES, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_PEOPLE",
    },
    comment: "COD OF PEOPLE",
    onDelete: "CASCADE",
  });

  PA_ADDRES.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_ADDRESS",
    },
  });
  PA_POEPLE.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_PEOPLE",
    },
  });

  /********** ********************************************************************************/
  SE_PERMISOS.belongsToMany(PA_TypeUsers, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_PERMISO",
    },
    onDelete: "CASCADE",
  });

  PA_TypeUsers.belongsToMany(SE_PERMISOS, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
    onDelete: "CASCADE",
  });

  SE_PERMISOS.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });

  PA_TypeUsers.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });



  /********************************************************************* */
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

  PA_TypeUsers.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });
  USERS.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_USER",
    },
  });
};

relaciones()
