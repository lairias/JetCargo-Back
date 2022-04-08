"use strict";

var multer = require("multer");

var path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== "jpeg" && ext !== ".png") {
      cb(new Error("Error tipo de dato"), false);
      return;
    }

    cb(null, true);
  }
});