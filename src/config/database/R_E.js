import { PA_POEPLE } from "../../models/Pa_people";
import { PA_TypeUsers } from "../../models/Pa_typeUsers";
import { USERS } from "../../models/Users";
import { PA_ADDRES } from "../../models/Pa_addres";
import { PA_CITIES } from "../../models/Pa_cities";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_CUSTOMES } from "../../models/Pa_customes";
import { PA_EMAIL } from "../../models/Pa_email";
import { PA_PHONES } from "../../models/Pa_phones";
import { PA_STATES } from "../../models/Pa_states";
import { BO_LOCKER } from "../../models/BO_locker";
import { Se_PASS_RESET } from "../../models/security/SE_pass_reset";
import { SE_PERMISOS } from "../../models/security/SE_permisos";
import { MODEL_HAS_PERMISOS } from "../../models/relations/MODEL_has_permisos";
import { MODEL_HAS_ROLES } from "../../models/relations/MODEL_has_typeUser";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";

/**Entidad Relacioens de tablas */
import { REL_PEOPLE_PHONE } from "../../models/relations/REL_people_phone";
import { REL_PEOPLE_EMAIL } from "../../models/relations/REL_people_email";

import { Sequelize } from "sequelize";
import db from "./index";

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

PA_TypeUsers.hasMany(USERS, {
  foreignKey: "COD_TIPUSERS",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS",
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
