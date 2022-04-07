"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type User {\n    PROFILE_PHOTO_PATH: String\n  }\n\n  type Query {\n    hello: String\n    getAllUsers: [User]\n  }\n  type Mutation {\n    createUser(PROFILE_PHOTO_PATH: String): User\n  }\n"])));
module.exports = {
  typeDefs: typeDefs
};