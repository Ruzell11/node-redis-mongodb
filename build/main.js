"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('<h2>Hello Worlsdsss</h2>');
});
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});