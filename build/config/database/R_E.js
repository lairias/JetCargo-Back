"use strict";

var _Pa_people = require("../../models/Pa_people");

var _Pa_typeUsers = require("../../models/Pa_typeUsers");

var _Users = require("../../models/Users");

var _Pa_addres = require("../../models/Pa_addres");

var _Pa_cities = require("../../models/Pa_cities");

var _Pa_countries = require("../../models/Pa_countries");

var _Pa_customes = require("../../models/Pa_customes");

var _Pa_email = require("../../models/Pa_email");

var _Pa_phones = require("../../models/Pa_phones");

var _Pa_states = require("../../models/Pa_states");

var _BO_locker = require("../../models/BO_locker");

var _SE_pass_reset = require("../../models/security/SE_pass_reset");

var _SE_permisos = require("../../models/security/SE_permisos");

var _MODEL_has_permisos = require("../../models/relations/MODEL_has_permisos");

var _MODEL_has_typeUser = require("../../models/relations/MODEL_has_typeUser");

var _typeusers_has_permisos = require("../../models/relations/typeusers_has_permisos");

var _REL_people_phone = require("../../models/relations/REL_people_phone");

var _REL_people_email = require("../../models/relations/REL_people_email");

var _sequelize = require("sequelize");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**Entidad Relacioens de tablas */
_Pa_email.PA_EMAIL.belongsToMany(_Pa_people.PA_POEPLE, {
  through: _REL_people_email.REL_PEOPLE_EMAIL,
  foreignKey: "COD_EMAIL",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE"
});

_Pa_people.PA_POEPLE.belongsToMany(_Pa_email.PA_EMAIL, {
  through: _REL_people_email.REL_PEOPLE_EMAIL,
  foreignKey: "COD_PEOPLE",
  comment: "COD OF TYPE OF EMAIL",
  onDelete: "CASCADE"
});

_Pa_phones.PA_PHONES.belongsToMany(_Pa_people.PA_POEPLE, {
  through: _REL_people_phone.REL_PEOPLE_PHONE,
  foreignKey: "COD_PHONE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PEOPLE"
});

_Pa_people.PA_POEPLE.belongsToMany(_Pa_phones.PA_PHONES, {
  through: _REL_people_phone.REL_PEOPLE_PHONE,
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF PHONES"
});

_Pa_typeUsers.PA_TypeUsers.hasMany(_Users.USERS, {
  foreignKey: "COD_TIPUSERS",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS"
});

_Pa_people.PA_POEPLE.hasMany(_Users.USERS, {
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS"
});

_Pa_cities.PA_CITIES.hasMany(_Pa_addres.PA_ADDRES, {
  foreignKey: "COD_CITY",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF USERS"
});

_Pa_countries.PA_COUNTRIES.hasMany(_Pa_states.PA_STATES, {
  foreignKey: "COD_COUNTRY",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF STATES"
});

_Pa_states.PA_STATES.hasMany(_Pa_cities.PA_CITIES, {
  foreignKey: "COD_STATE",
  onDelete: "CASCADE",
  comment: "COD OF TYPE OF CITIES"
});