"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifySignup = require("../middleware/verifySignup");

var _PA_people = require("../controllers/PA_people.Controllers");

var router = (0, _express.Router)();
router.get("/", _verifySignup.verifyToken, _PA_people.GetProducts);
router.post("/", _PA_people.CreateProduct);
router.get("/:productId", _PA_people.GetProduct);
router.put("/:productId", _PA_people.UpdateProduct);
router["delete"]("/:productId", _PA_people.DeleteProduct);
var _default = router;
exports["default"] = _default;