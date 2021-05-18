"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Bring in express
// Load environment variables
_dotenv["default"].config({
  path: './config/config.env'
}); // Initialize express application


var app = (0, _express["default"])(); // Assign port to the environment variable or 3000

var PORT = process.env.PORT || 3000; // Start application

app.listen(PORT, console.log("Server running in ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT)));
