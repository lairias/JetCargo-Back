"use strict";

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = _path["default"].extname(file.originalname);

    if (ext !== ".jpg" && ext !== "jpeg" && ext !== ".png") {
      cb(new Error("Error tipo de dato"), false);
      return;
    }

    cb(null, true);
  }
});