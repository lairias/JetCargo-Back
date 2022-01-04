import { PA_POEPLE } from "../../models/Pa_people";
import { PA_TypeUsers } from "../../models/Pa_tipeUsers";
import { USERS } from "../../models/Users";
import { PA_ADDRES } from "../../models/Pa_addres";
import {PA_CITIES  } from "../../models/Pa_cities";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_CUSTOMES } from "../../models/Pa_customes";
import { PA_EMAIL } from "../../models/Pa_email";
import { PA_PHONES } from "../../models/Pa_phones";
import { PA_STATES } from "../../models/Pa_states";
import { BO_LOCKER } from "../../models/BO_locker";

import {Sequelize} from "sequelize"
import db from './index'




PA_PHONES.belongsToMany(PA_POEPLE, { through: "relacion" });
PA_POEPLE.belongsToMany(PA_PHONES, { through: "relacion" });


PA_TypeUsers.hasMany(USERS, {
  foreignKey: "COD_TIPUSERS",
  onDelete: "CASCADE",
  comment:"COD OF TYPE OF USERS",
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
});
PA_STATES.hasMany(PA_CITIES, {
  foreignKey: "COD_STATE",
  onDelete: "CASCADE",
});

