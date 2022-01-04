"use strict";

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_database["default"].authenticate().then(function () {
  return console.log('Conectado a la base de datos');
})["catch"](function (error) {
  return console.log(error);
});

_app["default"].listen(4000, function () {
  console.log('Server puesto 4000');
});