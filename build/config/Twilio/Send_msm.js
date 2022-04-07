"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var accountSid = "AC9bddd5d23df762bdd707dd046693fc12"; // Your Account SID from www.twilio.com/console

var authToken = "97bd1318f79ec1e2280bdfd60dd30437"; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio");

var client = new twilio(accountSid, authToken);

function SendMessage(_x, _x2) {
  return _SendMessage.apply(this, arguments);
}

function _SendMessage() {
  _SendMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body, phone) {
    var message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.messages.create({
              body: body,
              to: phone,
              // Text this number+
              from: "+12052367152" // From a valid Twilio number

            });

          case 3:
            message = _context.sent;
            return _context.abrupt("return", message);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _SendMessage.apply(this, arguments);
}

module.exports = {
  SendMessage: SendMessage
};