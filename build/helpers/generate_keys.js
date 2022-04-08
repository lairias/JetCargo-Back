"use strict";

var crypto = require("crypto");

var JwrSecret = crypto.randomBytes(32).toString("hex");
var JwrSecret_PassReset = crypto.randomBytes(32).toString("hex");
module.exports = {
  JwrSecret: JwrSecret,
  JwrSecret_PassReset: JwrSecret_PassReset
};