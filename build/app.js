"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _database = _interopRequireDefault(require("./config/database"));

require("./config/database/R_E");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_database["default"].sync();

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    mensaje: "Welcome"
  });
});
app.use("/api/users", _users["default"]);
app.use("/api/auth", _auth["default"]);
var _default = app;
exports["default"] = _default;