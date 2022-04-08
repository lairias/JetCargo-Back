"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = require("./app");

var db = require("./config/database");

require('dotenv').config(); // const { ApolloServer } =require( "apollo-server-express";
// const { typeDefs } =require( "../src/types/typeDefs/typeDefs";
// const { resolvers } =require( "../src/graphql/resolvers";


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.authenticate().then(function () {
              return console.log("Conectado a la base de datos");
            })["catch"](function (error) {
              return console.log(error);
            });

          case 2:
            _context.next = 4;
            return app.listen(process.env.PORT, function () {
              console.log("Server puesto 4000");
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();